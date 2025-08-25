"use client";
import Image from "next/image";
import Text from "../common/text/text";
import {
  CardHeader,
  Container,
  ContentCard,
  ContentLeft,
  ContentRight,
  DateTime,
  Dhises,
  Greetings,
  GreetingsContent,
  InWaiting,
  MenuHeader,
  MenuToggle,
  NoOrders,
  NoOrderText,
  OutOfStock,
  Search,
  StatusContent,
  TabsContentRight,
  TotalEarning,
  WaitingList,
} from "./dashboard.styled";
import Dollar from "@/assets/icons/dollar.svg";
import DollarDark from "@/assets/icons/dollar-dark.svg";
import Time from "@/assets/icons/time.svg";
import TimeDark from "@/assets/icons/time-dark.svg";
import List from "@/assets/icons/list.svg";
import ListDark from "@/assets/icons/list-dark.svg";
import SearchIcon from "@/assets/icons/search.svg";
import NoOrdersIcon from "@/assets/icons/document-add.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import MenuIconDark from "@/assets/icons/menu-dark.svg";
import DishList from "../common/dish-list";
import OrderList from "../common/order/order-list/order-list";
import { Tabs } from "../common/tabs/tabs";
import { useState, useEffect } from "react";
import { Button } from "../common/button";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/lib/api/user";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import {
  inProgressOrders,
  waitingPaymentOrders,
} from "@/lib/data/dummy-data-order";
import { StatusCard } from "./status-card";
import Modals from "../common/modal/modal";
import { getOutOfStockDishes } from "@/lib/api/dishes";

interface ModalState {
  show: boolean;
  title: string;
  message: string;
  boldTexts: string[];
  variant: "success" | "error";
}

export default function DashboardPage() {
  const { theme } = useThemeContext();
  const [activeTab2, setActiveTab2] = useState("label1");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [modal, setModal] = useState<ModalState>({
    show: false,
    title: "",
    message: "",
    boldTexts: [],
    variant: "success",
  });
  const {
    data: outOfStockDishes,
    isLoading: isOutOfStockLoading,
    isError: isOutOfStockError,
  } = useQuery({
    queryKey: ["outOfStockDishes"],
    queryFn: getOutOfStockDishes,
  });

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginSuccess = sessionStorage.getItem("loginSuccess");
      if (loginSuccess) {
        const { userName } = JSON.parse(loginSuccess);

        setModal({
          show: true,
          title: "Login Successful",
          message: `Welcome ${userName}, your shift has started.`,
          boldTexts: [userName, "shift"],
          variant: "success",
        });

        sessionStorage.removeItem("loginSuccess");
      }
    }
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const { data: userData } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const userName = userData?.user?.displayName || "User";

  const getGreeting = (): string => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return `Good Morning, ${userName}`;
    } else if (hour < 17) {
      return `Good Afternoon, ${userName}`;
    } else {
      return `Good Evening, ${userName}`;
    }
  };

  const simpleTabs = [
    { id: "label1", label: "In Progress" },
    { id: "label2", label: "Waiting for Payment" },
  ];

  const selectedOrders =
    activeTab2 === "label1" ? inProgressOrders : waitingPaymentOrders;

  const handleModalClose = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <ContentLeft>
        <GreetingsContent>
          <Greetings>
            <Text variant="title" level={2} className="title">
              {getGreeting()}
            </Text>
            <Text variant="body" level={3} className="body">
              Give your best services for customers😁
            </Text>
          </Greetings>
          <DateTime>
            <Text variant="subtitle" level={1} className="time">
              {formatTime(currentTime)}
            </Text>
            <Text variant="body" level={5} className="date">
              {formatDate(currentTime)}
            </Text>
          </DateTime>
        </GreetingsContent>
        <StatusContent>
          <TotalEarning $isOpen={isMenuOpen}>
            <StatusCard
              title="Total Earning"
              iconLight={Dollar}
              iconDark={DollarDark}
              value="$526"
              percent={3.2}
              variant="success"
              theme={theme}
            />
          </TotalEarning>

          <InWaiting $isOpen={isMenuOpen}>
            <StatusCard
              title="In Progress"
              iconLight={Time}
              iconDark={TimeDark}
              value={16}
              percent={2.1}
              variant="warning"
              theme={theme}
            />
          </InWaiting>

          <WaitingList $isOpen={isMenuOpen}>
            <StatusCard
              title="Waiting List"
              iconLight={List}
              iconDark={ListDark}
              value={5}
              percent={-1.6}
              variant="primary"
              theme={theme}
            />
          </WaitingList>
        </StatusContent>
        <Dhises>
          <OutOfStock>
            <CardHeader>
              <Text variant="title" level={2} className="title-card">
                Out of Stock
              </Text>
              <Text variant="title" level={3} className="view-all">
                View All
              </Text>
            </CardHeader>
            <ContentCard>
              {isOutOfStockLoading ? (
                <Text variant="body" level={4}>
                  Loading...
                </Text>
              ) : isOutOfStockError ? (
                <Text variant="body" level={4}>
                  Failed to load out of stock dishes.
                </Text>
              ) : outOfStockDishes && outOfStockDishes.length > 0 ? (
                <DishList dishes={outOfStockDishes} variant="available" />
              ) : (
                <Text variant="body" level={4}>
                  No dishes are out of stock.
                </Text>
              )}
            </ContentCard>
          </OutOfStock>
        </Dhises>
      </ContentLeft>
      <ContentRight $isOpen={isMenuOpen}>
        <MenuHeader $isOpen={isMenuOpen}>
          <MenuToggle onClick={toggleMenu}>
            <Image
              src={theme === "dark" ? MenuIconDark : MenuIcon}
              alt="Menu Toggle"
              width={24}
              height={24}
            />
          </MenuToggle>
        </MenuHeader>
        {isMenuOpen && (
          <>
          <TabsContentRight>
            <Tabs
              tabs={simpleTabs}
              activeTab={activeTab2}
              onTabChange={setActiveTab2}
              variant="contained"
            />
            </TabsContentRight>
            <Search>
              <Image src={SearchIcon} alt="Search" width={24} height={24} />
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

            {selectedOrders.length > 0 ? (
              selectedOrders.map((order, i) => (
                <OrderList
                  key={i}
                  tableNumber={order.tableNumber}
                  customerName={order.customerName}
                  itemCount={order.itemCount}
                  status={order.status}
                  subtext={order.subtext}
                />
              ))
            ) : (
              <>
                <NoOrders>
                  <Image src={NoOrdersIcon} alt="NoOrdersIcon" />
                </NoOrders>
                <NoOrderText>
                  <Text variant="title" level={3} className="title-no-order">
                    You Don&apos;t Have Any Orders
                  </Text>
                  <Text variant="body" level={4} className="body-no-order">
                    You haven&apos;t received any orders from your customers
                    today.
                  </Text>
                </NoOrderText>
                <Button>Create New Order</Button>
              </>
            )}
          </>
        )}
      </ContentRight>

      <Modals
        isOpen={modal.show}
        onClose={handleModalClose}
        title={modal.title}
        message={modal.message}
        boldTexts={modal.boldTexts}
        primaryText="Continue"
        variant={modal.variant}
      />
    </Container>
  );
}
