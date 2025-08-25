"use client";
import {
  ContainerNavbar,
  LogoWrapper,
  ProfileWrapper,
  Search,
} from "./navbar.styled";
import Logo from "@/assets/logo.svg";
import LogoDark from "@/assets/logo-dark.svg";
import Bell from "@/assets/icons/bell.svg";
import BellDark from "@/assets/icons/bell-dark.svg";
import Image from "next/image";
import ProfileDropdown from "../common/profile/profile";
import ProfilePhoto from "@/assets/profile.jpg";
import SearchIcon from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/lib/api/user";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import { useTimerContext } from "@/lib/provider/timer-provider/timer-provider"; 
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";

export default function Navbar() {
  const { toggleTheme, theme } = useThemeContext();
  const { clockInTime, clockOutTime } = useTimerContext();
  
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const formatTime = (timeString: string | null) => {
    if (!timeString) return null;
    
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      return timeString;
    }
    
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const displayClockInTime = clockInTime 
    ? formatTime(clockInTime) 
    : (userData?.user?.clockIn ? formatTime(userData.user.clockIn) : null);
    
  const displayClockOutTime = clockOutTime 
    ? formatTime(clockOutTime) 
    : (userData?.user?.clockOut ? formatTime(userData.user.clockOut) : null);

  const mappedUser = userData?.user
    ? {
        name: userData.user.displayName,
        role: userData.user.role || "Employee",
        avatar: userData.user.photoUrl || ProfilePhoto,
        clockIn: displayClockInTime,
        clockOut: displayClockOutTime,
      }
    : null;

  return (
    <ContainerNavbar>
      <Link href="/dashboard">
        <LogoWrapper>
          <Image
            src={theme === "light" ? Logo : LogoDark}
            alt="Digidreams Logo"
            width={160}
            height={160}
          />
        </LogoWrapper>
      </Link>

      <Search>
        <Image
          src={theme === "light" ? SearchIcon : SearchDark}
          alt="Search Icon"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="Search here"
          style={{
            width: "100%",
            border: "none",
            background: "transparent",
            outline: "none",
            color: "inherit",
          }}
        />
      </Search>

      <ProfileWrapper>
        <button
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0 8px",
          }}
        >
          <Image
            src={theme === "light" ? SunIcon : MoonIcon}
            alt="Toggle Theme"
            width={24}
            height={24}
          />
        </button>
        <Image
          src={theme === "light" ? Bell : BellDark}
          alt="Notification Bell"
          width={24}
          height={24}
        />

        {isLoading && (
          <div style={{ padding: "8px 12px", fontSize: "14px" }}>
            Loading...
          </div>
        )}

        {isError && (
          <div style={{ padding: "8px 12px", fontSize: "14px", color: "red" }}>
            Error loading profile
          </div>
        )}

        {!isLoading && !isError && !mappedUser && (
          <div
            style={{ padding: "8px 12px", fontSize: "14px", color: "orange" }}
          >
            No user data available
          </div>
        )}

        {mappedUser && <ProfileDropdown user={mappedUser} />}
      </ProfileWrapper>
    </ContainerNavbar>
  );
}