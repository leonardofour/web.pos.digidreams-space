// components/dashboard/status-card.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import Text from "../common/text/text";
import {
  WrapperContentStatus,
  IconWrapper,
  Value,
  PersenWrapper,
} from "./dashboard.styled";

interface StatusCardProps {
  title: string;
  iconLight: StaticImageData;
  iconDark: StaticImageData;
  value: string | number;
  percent: number;
  variant: "success" | "warning" | "primary";
  theme: string;
}

export const StatusCard = ({
  title,
  iconLight,
  iconDark,
  value,
  percent,
  variant,
  theme,
}: StatusCardProps) => {
  const isNegative = percent < 0;
  const percentDisplay = `${isNegative ? "" : "+"}${percent.toFixed(1)}%`;

  return (
    <>
      <WrapperContentStatus>
        <Text variant="subtitle" level={1}>
          {title}
        </Text>
        <IconWrapper $variant={variant}>
          <Image
            src={theme === "light" ? iconLight : iconDark}
            alt={title}
            width={24}
            height={24}
          />
        </IconWrapper>
      </WrapperContentStatus>
      <Value>
        <Text variant="large">{value}</Text>
      </Value>
      <PersenWrapper $isNegative={isNegative}>
        <Text variant="title" level={3} className="persen">
          {percentDisplay}
        </Text>
        <Text variant="body" level={3} className="desc">
          than yesterday
        </Text>
      </PersenWrapper>
    </>
  );
};
