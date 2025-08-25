"use client";

import React from "react";
import { DishListProps } from "@/types/dish-list";
import {
  DishListContainer,
  DishItem,
  DishNumber,
  DishContent,
  DishName,
  DishMeta,
  AvailableTime,
  DishImage,
} from "./dish-list.styled";
import Text from "../text/text";
import Image from "next/image";

const DishList: React.FC<DishListProps> = ({ dishes, variant, className }) => {
  const isTimeAvailable = (time: string): boolean => {
    return time.toLowerCase() !== "tomorrow";
  };

  return (
    <DishListContainer className={className}>
      {dishes.map((dish, index) => (
        <DishItem key={dish.id}>
          {variant === "ordered" && (
            <DishNumber>
              <Text variant="subtitle" level={3} className="no">
                {String(index + 1).padStart(2, "0")}
              </Text>
            </DishNumber>
          )}

          <DishImage>
            <Image src={dish.photoUrl} alt={dish.name} width={36} height={36} />
          </DishImage>
          <DishContent>
            <DishName>
              <Text variant="subtitle" level={2} className="name">
                {dish.name}
              </Text>
            </DishName>
            <DishMeta>
              {variant === "ordered" && dish.orders !== undefined ? (
                <>
                  <Text variant="body" level={3} className="order">
                    Orders :
                  </Text>
                  <Text variant="title" level={3} className="order">
                    {dish.orders}
                  </Text>
                </>
              ) : (
                <>
                  <Text variant="body" level={3} className="order">
                    Available :
                  </Text>
                  <AvailableTime
                    $isAvailable={isTimeAvailable(dish.availableAt || "")}
                  >
                    <Text variant="title" level={3} className="order">
                      {dish.availableAt}
                    </Text>
                  </AvailableTime>
                </>
              )}
            </DishMeta>
          </DishContent>
        </DishItem>
      ))}
    </DishListContainer>
  );
};

export default DishList;
