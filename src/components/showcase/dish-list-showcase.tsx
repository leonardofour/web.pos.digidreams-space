"use client";

import React from "react";
import DishList from "../common/dish-list/dish-list";
import { Dish } from "@/types/dish-list";
import styled from "styled-components";
import Order1 from "@/assets/dummy-dish-list/1.png";
import Order2 from "@/assets/dummy-dish-list/2.png";
import Order3 from "@/assets/dummy-dish-list/3.png";
import Order4 from "@/assets/dummy-dish-list/4.png";
import Order5 from "@/assets/dummy-dish-list/5.png";
import Order6 from "@/assets/dummy-dish-list/6.png";
import Order7 from "@/assets/dummy-dish-list/7.jpg";
import Order8 from "@/assets/dummy-dish-list/8.png";
import Order9 from "@/assets/dummy-dish-list/9.jpg";
import Order10 from "@/assets/dummy-dish-list/10.png";
import Text from "../common/text/text";

export const ExampleContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  color: var(--text);
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const orderedDishes: Dish[] = [
  {
    id: "1",
    name: "Southwest Scramble Bowl",
    image: Order1,
    orders: 26,
  } as Dish & {image: any},
  {
    id: "2",
    name: "Hickory Smoked Bacon",
    image: Order2,
    orders: 24,
  }as Dish & {image: any},
  {
    id: "3",
    name: "Chicken Tender Plate",
    image: Order3,
    orders: 23,
  }as Dish & {image: any},
  {
    id: "4",
    name: "Grilled Chicken Sandwich",
    image: Order4,
    orders: 22,
  }as Dish & {image: any},
  {
    id: "5",
    name: "BBQ Bacon Burger",
    image: Order5,
    orders: 22,
  }as Dish & {image: any},
];

const availableDishes: Dish[] = [
  {
    id: "6",
    name: "Breakfast Burger",
    image: Order6,
    availableTime: "04:20 PM",
  },
  {
    id: "7",
    name: "Fried Fish Sandwich",
    image: Order7,
    availableTime: "04:20 PM",
  },
  {
    id: "8",
    name: "Shrimp & Grits",
    image: Order8,
    availableTime: "Tomorrow",
  },
  {
    id: "9",
    name: "Chicken Tender Salad",
    image: Order9,
    availableTime: "Tomorrow",
  },
  {
    id: "10",
    name: "Veggie Omelette",
    image: Order10,
    availableTime: "Tomorrow",
  },
];

const DishListShowcase: React.FC = () => {
  return (
    <ExampleContainer>
      <GridContainer>
        <Section>
          <SectionTitle>
            <Text variant="title" level={1}>
              Most Ordered Dishes
            </Text>
          </SectionTitle>
          <DishList dishes={orderedDishes} variant="ordered" />
        </Section>

        <Section>
          <SectionTitle>
            <Text variant="title" level={1}>
              Available Dishes
            </Text>
          </SectionTitle>
          <DishList dishes={availableDishes} variant="available" />
        </Section>
      </GridContainer>
    </ExampleContainer>
  );
};

export default DishListShowcase;
