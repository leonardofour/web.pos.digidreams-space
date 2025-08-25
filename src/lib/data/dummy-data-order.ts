export type OrderStatus = "ready" | "in-progress" | "completed" | "waiting-for-payment";

export interface OrderItem {
  tableNumber: string;
  customerName: string;
  itemCount: number;
  status: OrderStatus;
  subtext: string;
}

export const inProgressOrders: OrderItem[] = [
  {
    tableNumber: "A9",
    customerName: "Adam Hamzah",
    itemCount: 8,
    status: "ready",
    subtext: "Ready to serve",
  },
  {
    tableNumber: "A5",
    customerName: "Nina Renard",
    itemCount: 4,
    status: "ready",
    subtext: "Ready to serve",
  },
  {
    tableNumber: "A3",
    customerName: "Phillip Allen",
    itemCount: 6,
    status: "ready",
    subtext: "Ready to serve",
  },
  {
    tableNumber: "TA",
    customerName: "Amanda Reid",
    itemCount: 2,
    status: "in-progress",
    subtext: "Cooking Now",
  },
  {
    tableNumber: "A6",
    customerName: "Mark Graham",
    itemCount: 7,
    status: "in-progress",
    subtext: "Cooking Now",
  },
  {
    tableNumber: "A12",
    customerName: "Abir Hussain",
    itemCount: 6,
    status: "in-progress",
    subtext: "In the Kitchen",
  },
  {
    tableNumber: "A7",
    customerName: "Rachel Griffin",
    itemCount: 5,
    status: "in-progress",
    subtext: "In the Kitchen",
  },
];

export const waitingPaymentOrders: OrderItem[] = [
  {
    tableNumber: "A13",
    customerName: "David Owens",
    itemCount: 5,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A15",
    customerName: "Olivia Mason",
    itemCount: 4,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A4",
    customerName: "Lisa Michaud",
    itemCount: 5,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A2",
    customerName: "Jordan Moulin",
    itemCount: 4,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A10",
    customerName: "Nolan Smith",
    itemCount: 6,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A11",
    customerName: "Edward Allen",
    itemCount: 5,
    status: "waiting-for-payment",
    subtext: "",
  },
  {
    tableNumber: "A14",
    customerName: "Jasmin Walter",
    itemCount: 4,
    status: "waiting-for-payment",
    subtext: "",
  },
];
