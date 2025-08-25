"use client";

import React from "react";
import {
  CardWrapper,
  TableIcon,
  TextWrapper,
  TableNumber,
  CustomerName,
  ItemCount,
} from "./order-list.styled";

import OrderState from "../order-state";
import Text from "../../text/text";
import { Button } from "@/components/common/button/button";

type OrderListProps = {
  tableNumber: string;
  customerName: string;
  itemCount: number;
  status: "ready" | "in-progress" | "completed" | "waiting-for-payment";
  subtext: string;
  children?: React.ReactNode;
};
const OrderList: React.FC<OrderListProps> = ({
  tableNumber,
  customerName,
  itemCount,
  status,
  subtext,
}) => {
  return (
    <CardWrapper>
      <TableIcon>
        <TableNumber>
          <Text variant="title" level={3}>
            {tableNumber}
          </Text>
        </TableNumber>
      </TableIcon>
      <TextWrapper>
        <CustomerName>
          <Text variant="subtitle" level={3}>
            {customerName}
          </Text>
        </CustomerName>
        <ItemCount>
          <Text variant="body" level={4}>
            {itemCount} Items
          </Text>
        </ItemCount>
      </TextWrapper>

      {status === "waiting-for-payment" ? (
        <Button variant="filled" arrow="right" type="button">
          Pay Now
        </Button>
      ) : (
        <OrderState status={status} subtext={subtext} />
      )}
    </CardWrapper>
  );
};

export default OrderList;
