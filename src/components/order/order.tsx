'use client'
import { useState } from "react";
import { Tabs } from "../common/tabs/tabs";
import Text from "../common/text/text";
import OrderCard from "../common/order/order-card/order-card";
import { 
  Container, 
  Header, 
  ContentArea, 
  NoOrdersContainer, 
  NoOrderContent,
  NoOrderText,
  CircleNoOrder,
  OrderCardWrapper 
} from "./order.styled";
import { 
  getAllOrders, 
  getReadyOrders, 
  getInProgressOrders, 
  getCompletedOrders,
  type Order 
} from "@/lib/data/dummy-data-orders";

export default function OrderTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const tabsLabel = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "inProgress", 
      label: "In Progress",
    },
    {
      id: "ready",
      label: "Ready",
    },
    {
      id: "completed",
      label: "Completed",
    },
  ];

  const getFilteredOrders = (): Order[] => {
    switch (activeTab) {
      case "inProgress":
        return getInProgressOrders();
      case "ready":
        return getReadyOrders();
      case "completed":
        return getCompletedOrders();
      default:
        return getAllOrders(); 
    }
  };

  const filteredOrders = getFilteredOrders();
  const selectedTab = tabsLabel.find((tab) => tab.id === activeTab);

  return (
    <Container>
      <Header>
        <Text variant="title" level={1} className="title-page">
          Orders
        </Text>
        <Tabs 
          tabs={tabsLabel} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="separated" 
        />
      </Header>
      
      <ContentArea>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCardWrapper key={order.id}>
              <OrderCard
                tableNumber={order.tableNumber}
                customerName={order.customerName}
                orderNumber={order.orderNumber}
                orderType={order.orderType}
                timestamp={order.timestamp}
                itemCount={order.itemCount}
                total={order.total}
                status={order.status}
                subtext={order.subtext}
              />
            </OrderCardWrapper>
          ))
        ) : (
          <NoOrdersContainer>
            <NoOrderContent>
              <CircleNoOrder>
                <Text variant="title" level={2}>📋</Text>
              </CircleNoOrder>
              <NoOrderText>
                <Text variant="title" level={3} className="title-no-order">
                  No {selectedTab?.label} Orders
                </Text>
                <Text variant="body" level={4} className="body-no-order">
                  There are currently no orders in this category.
                </Text>
              </NoOrderText>
            </NoOrderContent>
          </NoOrdersContainer>
        )}
      </ContentArea>
    </Container>
  );
}