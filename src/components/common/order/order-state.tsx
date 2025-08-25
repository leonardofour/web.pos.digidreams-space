"use client";
import React from "react";
import { Wrapper, Badge, Subtext, Dot } from "./order-state.styled";
import { OrderStateProps } from "@/types/order.type";
import CheckmarkLight from "@/assets/icons/light-checkmark.svg";
import TimerLight from "@/assets/icons/light-timer.svg";
import ReceiptLight from "@/assets/icons/light-receipt-check.svg";
import CheckmarkDark from "@/assets/icons/dark-checkmark.svg";
import TimerDark from "@/assets/icons/dark-timer.svg";
import ReceiptDark from "@/assets/icons/dark-receipt-check.svg";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import Image from "next/image";
import Text from "../text/text";

export default function OrderState({ status, subtext }: OrderStateProps) {
  const { theme } = useThemeContext();

  const renderIcon = () => {
    const isDark = theme === "light";
    switch (status) {
      case "ready":
        return (
          <Image src={isDark ? CheckmarkLight : CheckmarkDark} alt="ready" />
        );
      case "in-progress":
        return (
          <Image src={isDark ? TimerLight : TimerDark} alt="in progress" />
        );
      case "completed":
        return (
          <Image src={isDark ? ReceiptLight : ReceiptDark} alt="completed" />
        );
      default:
        return null;
    }
  };

  const label = {
    ready: "Ready",
    "in-progress": "In Progress",
    completed: "Completed",
  }[status];

  return (
    <Wrapper>
      <Badge status={status}>
        {renderIcon()}
        <Text variant="subtitle" level={6}>
          {label}
        </Text>
      </Badge>
      <Subtext status={status}>
        <Dot status={status} />
        <Text variant="subtitle" level={6}>
          {subtext}
        </Text>
      </Subtext>
    </Wrapper>
  );
}
