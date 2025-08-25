"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import { useTimerContext } from "@/lib/provider/timer-provider/timer-provider";
import {
  Container,
  TabsWrapper,
  Tab,
  RestaurantTab,
  TabLabel,
  TimerIndicator,
} from "./nav-bottom.styled";
import InputModal from "../common/input-modal/input-modal";
import HomeIcon from "@/assets/icons/home.svg";
import HomeActiveIconDark from "@/assets/icons/home-active-dark.svg";
import HomeActiveIcon from "@/assets/icons/home-active.svg";
import OrdersIcon from "@/assets/icons/orders.svg";
import OrdersActiveIconDark from "@/assets/icons/orders-active-dark.svg";
import OrdersActiveIcon from "@/assets/icons/orders-active.svg";
import RestaurantIcon from "@/assets/icons/restaurant.svg";
import RestaurantActiveIcon from "@/assets/icons/restaurant-active.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import ClockActiveIconDark from "@/assets/icons/clock-dark-active.svg";
import ClockActiveIcon from "@/assets/icons/clock-active.svg";
import MoreIcon from "@/assets/icons/more.svg";
import MoreActiveIcon from "@/assets/icons/more-active.svg";
import Image from "next/image";
import Text from "../common/text/text";

interface TabType {
  id: string;
  label: string;
  icon: string;
  link: string;
  activeIcon: string;
  isFloating?: boolean;
  isModal?: boolean;
}

export default function NavBottom() {
  const [activeTab, setActiveTab] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useThemeContext();
  const { isRunning } = useTimerContext();
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: HomeIcon,
      link: "/pages/dashboard",
      activeIcon: theme === "light" ? HomeActiveIcon : HomeActiveIconDark,
    },
    {
      id: "orders",
      label: "Orders",
      icon: OrdersIcon,
      link: "/pages/orders",
      activeIcon: theme === "light" ? OrdersActiveIcon : OrdersActiveIconDark,
    },
    {
      id: "restaurant",
      label: "Restaurant",
      icon: RestaurantIcon,
      link: "",
      activeIcon: RestaurantActiveIcon,
      isFloating: true,
      isModal: true,
    },
    {
      id: "clock",
      label: "Clock In & Clock out",
      icon: ClockIcon,
      link: "/pages/timer",
      activeIcon: theme === "light" ? ClockActiveIcon : ClockActiveIconDark,
    },
    {
      id: "more",
      label: "More",
      icon: MoreIcon,
      link: "/pages/more",
      activeIcon: MoreActiveIcon,
    },
  ];

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.link === pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [pathname]);

  const handleTabClick = (tab: TabType) => {
    if (tab.isModal) {
      setIsModalOpen(true);
    } else if (tab.link && tab.link !== "") {
      router.push(tab.link);
      setActiveTab(tab.id);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (customerData: {
    name: string;
    phone: string;
    date: string;
  }) => {
    console.log("Order Created for:", customerData);
    router.push("/pages/orders");
    setActiveTab("orders");
  };

  return (
    <>
      <Container>
        <TabsWrapper>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isTimerTab = tab.id === "clock";
            const showTimerIndicator = isTimerTab && isRunning;

            if (tab.isFloating) {
              return (
                <RestaurantTab
                  key={tab.id}
                  $isActive={isActive}
                  onClick={() => handleTabClick(tab)}
                >
                  <Image
                    src={isActive ? tab.activeIcon : tab.icon}
                    alt={tab.label}
                  />
                </RestaurantTab>
              );
            }

            return (
              <Tab
                key={tab.id}
                $isActive={isActive}
                onClick={() => handleTabClick(tab)}
              >
                <TabLabel>
                  <Image
                    src={isActive ? tab.activeIcon : tab.icon}
                    alt={tab.label}
                  />
                  <Text variant={isActive ? "title" : "subtitle"} level={4}>
                    {tab.label}
                  </Text>
                  {showTimerIndicator && <TimerIndicator />}
                </TabLabel>
              </Tab>
            );
          })}
        </TabsWrapper>
      </Container>
      <InputModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </>
  );
}
