import React from "react";
import {
  Card,
  ImageContainer,
  TagContainer,
  Tag,
  Content,
  Title,
  Description,
  PriceContainer,
  PriceSection,
  Price,
  OriginalPrice,
  QuantityContainer,
  QuantityButton,
  DecrementButton,
  Quantity,
} from "./card-items.styled";
import Star from "@/assets/icons/star.svg";
import ShopTag from "@/assets/icons/shopping-tag.svg";
import Image, { StaticImageData } from "next/image";
import Text from "../text/text";
import Add from "@/assets/icons/add.svg";
import Minus from "@/assets/icons/minus.svg";
import MinusWhite from "@/assets/icons/minus-white.svg";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";

interface ItemCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity?: number;
  isPopular?: boolean;
  discount?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const CardItems: React.FC<ItemCardProps> = ({
  image,
  title,
  description,
  price,
  originalPrice,
  quantity = 0,
  isPopular,
  discount,
  onIncrement,
  onDecrement,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={title} width={223} height={150} />
        <TagContainer>
          {isPopular && (
            <Tag type="popular">
              <Image src={Star} alt="Star" className="star" />
              <Text variant="title" level={5}>
                {" "}
                Popular
              </Text>
            </Tag>
          )}
          {discount && (
            <Tag type="discount">
              <Image src={ShopTag} alt="ShopTag" className="shoptag" />
              <Text variant="title" level={5}>
                {" "}
                Disc {discount}%
              </Text>
            </Tag>
          )}
        </TagContainer>
      </ImageContainer>

      <Content>
        <Title>
          <Text variant="subtitle" level={3}>
            {title}
          </Text>
        </Title>
        <Description>
          <Text variant="body" level={5}>
            {description}
          </Text>
        </Description>

        <PriceContainer>
          <PriceSection>
            <Price>
              <Text variant="title" level={2} className="prices">
                <span>$</span>
                {price.toFixed(2)}
              </Text>
            </Price>
            {originalPrice && (
              <OriginalPrice>
                <Text variant="body" level={4} className="prices">
                  <span>$</span>
                  {originalPrice.toFixed(2)}
                </Text>
              </OriginalPrice>
            )}
          </PriceSection>

          <QuantityContainer>
            <DecrementButton onClick={onDecrement}>
              <Image src={isDark ? MinusWhite : Minus} alt="minus" />
            </DecrementButton>
            <Quantity><Text variant="title" level={2}>{quantity}</Text></Quantity>
            <QuantityButton onClick={onIncrement}>
              <Image src={Add} alt="add" />
            </QuantityButton>
          </QuantityContainer>
        </PriceContainer>
      </Content>
    </Card>
  );
};

export default CardItems;
