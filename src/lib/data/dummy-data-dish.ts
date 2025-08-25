import { Dish } from "@/types/dish-list";
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

export const popularDishes: Dish[] = [
  {
    id: "1",
    name: "Southwest Scramble Bowl",
    image: Order1,
    orders: 26,
  },
  {
    id: "2",
    name: "Hickory Smoked Bacon",
    image: Order2,
    orders: 24,
  },
  {
    id: "3",
    name: "Chicken Tender Plate",
    image: Order3,
    orders: 23,
  },
  {
    id: "4",
    name: "Grilled Chicken Sandwich",
    image: Order4,
    orders: 22,
  },
  {
    id: "5",
    name: "BBQ Bacon Burger",
    image: Order5,
    orders: 22,
  },
];

export const outOfStockDishes: Dish[] = [
  {
    id: "1",
    name: "Breakfast Burger",
    image: Order6,
    availableTime: "04:20 PM",
  },
  {
    id: "2",
    name: "Fried Fish Sandwich",
    image: Order7,
    availableTime: "04:20 PM",
  },
  {
    id: "3",
    name: "Shrimp & Grits",
    image: Order8,
    availableTime: "Tomorrow",
  },
  {
    id: "4",
    name: "Chicken Tender Salad",
    image: Order9,
    availableTime: "Tomorrow",
  },
  {
    id: "5",
    name: "Veggie Omelette",
    image: Order10,
    availableTime: "Tomorrow",
  },
];