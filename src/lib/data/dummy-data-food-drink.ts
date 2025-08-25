import { Drink, Food } from "@/types/category";

export const foodDummy: Food[] = [
  { id: 1, name: "Chicken Katsu Besar", price: "20000" },
  { id: 2, name: "Chicken Katsu Kecil", price: "12000" },
  { id: 3, name: "Seblak Ori", price: "10000" },
  { id: 4, name: "Seblak Sosis", price: "12000" },
  { id: 5, name: "Seblak Bakso Ikan", price: "12000" },
  { id: 6, name: "Seblak Campur", price: "15000" },
  { id: 7, name: "Mie Goreng", price: "8000" },
  { id: 8, name: "Mie Rebus", price: "8000" },
  { id: 9, name: "Mie Goreng Double", price: "15000" },
  { id: 10, name: "Mie Rebus Double", price: "15000" },
];

export const snackDummy: Food[] = [
  { id: 1, name: "Burger", price: "13000" },
  { id: 2, name: "Mix Platter", price: "13000" },
  { id: 3, name: "French Fries", price: "10000" },
  { id: 4, name: "Banana Pop", price: "8000" },
  { id: 5, name: "Singkong Presto", price: "7000" },
  { id: 6, name: "Tempura", price: "7000" },
  { id: 7, name: "Siomay Goreng", price: "7000" },
  { id: 8, name: "Basreng", price: "7000" },
  { id: 9, name: "Sempol", price: "7000" },
  { id: 10, name: "Sosis", price: "7000" },
  { id: 11, name: "Otak-Otak", price: "7000" },
  { id: 12, name: "Snack", price: "3000" },
  { id: 13, name: "Snack Kecil", price: "2000" },
  { id: 14, name: "Tambah Tempura 1pc", price: "1000" },
];
export const coffeeDummy: Drink[] = [
  {
    id: 1,
    name: "Capucino",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 2,
    name: "Arabica",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 3,
    name: "Vanila Latte",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 4,
    name: "Mocchacino",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 5,
    name: "Espresso",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 6,
    name: "Coffe Caramel",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
];

export const otherDummy: Drink[] = [
  {
    id: 1,
    name: "Matcha",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 2,
    name: "Red Valvet",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 3,
    name: "Taro",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
  {
    id: 4,
    name: "Coklat",
    variants: {
      small: { price: "8000" },
      large: { price: "13000" },
    },
  },
];

export const teaDummy: Drink[] = [
  {
    id: 1,
    name: "Es Teh",
    variants: {
      small: { price: "3000" },
      large: { price: "3000" },
    },
  },
  {
    id: 2,
    name: "Es Teh Leci",
    variants: {
      small: { price: "6000" },
      large: { price: "6000" },
    },
  },
];
