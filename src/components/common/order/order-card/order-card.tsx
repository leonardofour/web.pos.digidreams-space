"use client";

import React from "react";
import {
  CardContainer,
  Header,
  InfoGroup,
  TableBox,
  CustomerTextGroup,
  MetaText,
  MiddleRow,
  Footer,
  Line,
} from "./order-card.styled";
import OrderState from "../order-state";
import Text from "../../text/text";

type OrderType = "dine-in" | "takeaway";

type OrderCardProps = {
  tableNumber: string;
  customerName: string;
  orderNumber: number;
  orderType: OrderType;
  timestamp: string;
  itemCount: number;
  total: number;
  status: "ready" | "in-progress" | "completed";
  subtext: string;
};

const OrderCard: React.FC<OrderCardProps> = ({
  tableNumber,
  customerName,
  orderNumber,
  orderType,
  timestamp,
  itemCount,
  total,
  status,
  subtext,
}) => {
  return (
    <CardContainer>
      <Header>
        <InfoGroup>
          <TableBox>
            <Text variant="title" level={3}>
              {tableNumber}
            </Text>
          </TableBox>
          <CustomerTextGroup>
            <Text variant="subtitle" level={3}>
              {customerName}
            </Text>
            <MetaText>
              <Text variant="subtitle" level={4}>
                #{orderNumber} /{" "}
                {orderType === "dine-in" ? "Dine in" : "Takeaway"}
              </Text>
            </MetaText>
          </CustomerTextGroup>
        </InfoGroup>
        <OrderState status={status} subtext={subtext} />
      </Header>

      <MiddleRow>
        <Text variant="body" level={4}>
          {timestamp}
        </Text>
        <Text variant="title" level={4}>
          {itemCount} Items
        </Text>
      </MiddleRow>

      <Line />

      <Footer>
        <Text variant="subtitle" level={4}>
          Total
        </Text>
        <Text variant="title" level={3}>
          ${total}
        </Text>
      </Footer>
    </CardContainer>
  );
};

export default OrderCard;
