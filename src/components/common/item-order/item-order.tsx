"use client";
import {
  Border,
  Button,
  Price,
  Subtitle,
  Title,
  Wrapper,
} from "./item-order.styled";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import FilePlusLight from "@/assets/icons/FilePlusLight.svg";
import FilePlusDark from "@/assets/icons/FilePlusDark.svg";
import Image from "next/image";
import Text from "../text/text";

const ItemOrder = () => {
  const { theme } = useThemeContext();
  return (
    <Border>
      <Title>
      <Text variant="subtitle" level={3}>
        Item Name
      </Text>
      <Text variant="subtitle" level={3}>
        x1
      </Text>
      </Title>
      <Subtitle>
      <Text variant='body' level={5}>
        Notes : Notes
      </Text>
      </Subtitle>
      <Wrapper>
        <Button>
        <Text variant="subtitle" level={5}>
          <Image
            src={theme === "light" ? FilePlusLight : FilePlusDark}
            alt="FilePlus"
            width={16}
            height={16}
          />
          Notes
        </Text>
        </Button>
        <Price>
        <Text variant="title" level={3}>$10.00</Text>
        </Price>
      </Wrapper>
    </Border>
  );
};

export default ItemOrder;
