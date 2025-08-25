"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Avatar,
  CardHeader,
  Container,
  DropdownCard,
  Line,
  MenuItem,
  MenuSection,
  Name,
  Role,
  TimeItem,
  TimeLabel,
  TimeSection,
  TimeValue,
  Trigger,
  UserInfo,
} from "./profile.styled";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import ArrowDownLight from "@/assets/icons/arrow-down-light.svg";
import ArrowDownDark from "@/assets/icons/arrow-down-dark.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import ProfileIconDark from "@/assets/icons/profile-dark.svg";
import SettingsIconLight from "@/assets/icons/settings.svg";
import SettingsIconDark from "@/assets/icons/settings-dark.svg";
import LogoutIconLight from "@/assets/icons/logout.svg";
import LogoutIconDark from "@/assets/icons/logout-dark.svg";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import { useTimerContext } from "@/lib/provider/timer-provider/timer-provider";
import { getShiftLogToday } from "@/lib/api/shift";
import Text from "../text/text";

interface ProfileDropdownProps {
  user: {
    name: string;
    role: string;
    avatar: string | StaticImageData;
    clockIn?: string | null;
    clockOut?: string | null;
  };
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onEndShiftClick?: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  user,
  onProfileClick,
  onSettingsClick,
}) => {
  const { theme } = useThemeContext();
  const { resetTimer, clockInTime, clockOutTime } = useTimerContext();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fetch shift log data when dropdown is opened
  const {
    data: shiftLogData,
    isLoading: isShiftLogLoading,
    // isError: isShiftLogError,
    refetch: refetchShiftLog,
  } = useQuery({
    queryKey: ["shiftLogToday"],
    queryFn: getShiftLogToday,
    enabled: isOpen, // Only fetch when dropdown is open
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Refetch shift log when dropdown opens
  useEffect(() => {
    if (isOpen) {
      refetchShiftLog();
    }
  }, [isOpen, refetchShiftLog]);

  const handleMenuClick = (callback?: () => void) => {
    callback?.();
    setIsOpen(false);
  };

  const formatTime = (timeString: string | null) => {
    if (!timeString) return null;
    
    // If already in HH:MM format, return as is
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      return timeString;
    }
    
    // If it's a full date string, format it
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getDisplayClockIn = () => {
    if (clockInTime) {
      return formatTime(clockInTime);
    }
    
    if (shiftLogData?.success && shiftLogData?.data?.checkIn) {
      return formatTime(shiftLogData.data.checkIn);
    }
    
    if (user.clockIn) {
      return formatTime(user.clockIn);
    }
    
    return "-";
  };

  const getDisplayClockOut = () => {
    if (clockOutTime) {
      return formatTime(clockOutTime);
    }
    
    if (shiftLogData?.success && shiftLogData?.data?.checkOut) {
      return formatTime(shiftLogData.data.checkOut);
    }
    
    if (user.clockOut) {
      return formatTime(user.clockOut);
    }
    
    return "-";
  };

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Logout failed");
      }
      return res.json();
    },
    onSuccess: () => {
      resetTimer();
      router.replace("/");
    },
    onError: (error) => {
      console.error("Logout error:", error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <Container ref={dropdownRef}>
      <Trigger onClick={() => setIsOpen(!isOpen)}>
        <Avatar>
          <Image
            src={user.avatar}
            alt={user.name}
            className="avatar"
            width={40}
            height={40}
          />
        </Avatar>
        <UserInfo>
          <Name>
            <Text variant="title" level={3}>
              {user.name}
            </Text>
          </Name>
          <Role>
            <Text variant="subtitle" level={4}>
              {user.role}
            </Text>
          </Role>
        </UserInfo>
        <Image
          src={isDark ? ArrowDownDark : ArrowDownLight}
          alt="arrow-down"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </Trigger>

      {isOpen && (
        <DropdownCard>
          <CardHeader>
            <Avatar>
              <Image
                src={user.avatar}
                alt={user.name}
                className="avatar"
                width={40}
                height={40}
              />
            </Avatar>
            <UserInfo>
              <Name>
                <Text variant="title" level={3}>
                  {user.name}
                </Text>
              </Name>
              <Role>
                <Text variant="subtitle" level={4}>
                  {user.role}
                </Text>
              </Role>
            </UserInfo>
          </CardHeader>

          <TimeSection>
            <TimeItem>
              <TimeLabel>
                <Text variant="subtitle" level={5}>
                  Clock In
                </Text>
              </TimeLabel>
              <TimeValue>
                <Text variant="title" level={5}>
                  {isShiftLogLoading ? "Loading..." : getDisplayClockIn()}
                </Text>
              </TimeValue>
            </TimeItem>
            <TimeItem>
              <TimeLabel>
                <Text variant="subtitle" level={5}>
                  Clock Out
                </Text>
              </TimeLabel>
              <TimeValue>
                <Text variant="title" level={5}>
                  {isShiftLogLoading ? "Loading..." : getDisplayClockOut()}
                </Text>
              </TimeValue>
            </TimeItem>
          </TimeSection>

          <MenuSection>
            <MenuItem onClick={() => handleMenuClick(onProfileClick)}>
              <Image
                src={isDark ? ProfileIconDark : ProfileIcon}
                alt="profile-icon"
              />
              <Text variant="subtitle" level={3}>
                Profile
              </Text>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick(onSettingsClick)}>
              <Image
                src={isDark ? SettingsIconDark : SettingsIconLight}
                alt="settings-icon"
              />
              <Text variant="subtitle" level={3}>
                Account Settings
              </Text>
            </MenuItem>
            <Line />
            <MenuItem onClick={handleLogout}>
              <Image
                src={isDark ? LogoutIconDark : LogoutIconLight}
                alt="logout-icon"
              />
              <Text variant="subtitle" level={3}>
                Logout
              </Text>
            </MenuItem>
          </MenuSection>
        </DropdownCard>
      )}
    </Container>
  );
};

export default ProfileDropdown;