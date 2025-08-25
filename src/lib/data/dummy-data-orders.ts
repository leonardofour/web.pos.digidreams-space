export type OrderType = "dine-in" | "takeaway";
export type OrderStatus = "ready" | "in-progress" | "completed";

export interface Order {
  id: string;
  tableNumber: string;
  customerName: string;
  orderNumber: number;
  orderType: OrderType;
  timestamp: string;
  itemCount: number;
  total: number;
  status: OrderStatus;
  subtext: string;
}

export const allOrders: Order[] = [
  {
    id: "1",
    tableNumber: "A9",
    customerName: "Adam Hamzah",
    orderNumber: 289,
    orderType: "dine-in",
    timestamp: "August 17, 2023 09:52 AM",
    itemCount: 8,
    total: 70.74,
    status: "ready",
    subtext: "Ready to serve"
  },
  {
    id: "2", 
    tableNumber: "A5",
    customerName: "Nina Renard",
    orderNumber: 286,
    orderType: "dine-in",
    timestamp: "August 17, 2023 09:54 AM",
    itemCount: 4,
    total: 77.93,
    status: "ready",
    subtext: "Ready to serve"
  },
  {
    id: "3",
    tableNumber: "A3", 
    customerName: "Phillip Allen",
    orderNumber: 285,
    orderType: "dine-in",
    timestamp: "August 17, 2023 10:37 AM",
    itemCount: 6,
    total: 85.36,
    status: "ready",
    subtext: "Ready to serve"
  },
  {
    id: "4",
    tableNumber: "TA",
    customerName: "Amanda Reid", 
    orderNumber: 283,
    orderType: "takeaway",
    timestamp: "August 17, 2023 10:34 AM",
    itemCount: 2,
    total: 27.98,
    status: "in-progress",
    subtext: "Cooking Now"
  },
  {
    id: "5",
    tableNumber: "A6",
    customerName: "Mark Graham",
    orderNumber: 279,
    orderType: "dine-in", 
    timestamp: "August 17, 2023 10:48 AM",
    itemCount: 7,
    total: 87.24,
    status: "in-progress",
    subtext: "Cooking Now"
  },
  {
    id: "6",
    tableNumber: "A12",
    customerName: "Abir Hussain",
    orderNumber: 278,
    orderType: "dine-in",
    timestamp: "August 17, 2023 10:44 AM", 
    itemCount: 6,
    total: 82.23,
    status: "in-progress",
    subtext: "In the Kitchen"
  },
  {
    id: "7",
    tableNumber: "A7",
    customerName: "Rachel Griffin",
    orderNumber: 274,
    orderType: "dine-in",
    timestamp: "August 17, 2023 10:43 AM",
    itemCount: 5,
    total: 78.32,
    status: "in-progress",
    subtext: "In the Kitchen"
  },
  {
    id: "8", 
    tableNumber: "A13",
    customerName: "David Owens",
    orderNumber: 272,
    orderType: "dine-in",
    timestamp: "August 17, 2023 09:42 AM",
    itemCount: 5,
    total: 76.98,
    status: "completed",
    subtext: "Waiting For Payment"
  },
  {
    id: "9",
    tableNumber: "A15",
    customerName: "Olivia Mason", 
    orderNumber: 271,
    orderType: "dine-in",
    timestamp: "August 17, 2023 09:23 AM",
    itemCount: 4,
    total: 64.45,
    status: "completed",
    subtext: "Waiting For Payment"
  },
  {
    id: "10",
    tableNumber: "A11",
    customerName: "Sarah Johnson",
    orderNumber: 290,
    orderType: "dine-in",
    timestamp: "August 17, 2023 11:15 AM",
    itemCount: 3,
    total: 45.50,
    status: "ready",
    subtext: "Ready to serve"
  },
  {
    id: "11",
    tableNumber: "TB",
    customerName: "Michael Brown",
    orderNumber: 291,
    orderType: "takeaway",
    timestamp: "August 17, 2023 11:20 AM",
    itemCount: 2,
    total: 32.75,
    status: "in-progress",
    subtext: "Preparing Order"
  },
  {
    id: "12",
    tableNumber: "A14",
    customerName: "Emma Wilson",
    orderNumber: 292,
    orderType: "dine-in",
    timestamp: "August 17, 2023 11:30 AM",
    itemCount: 5,
    total: 68.90,
    status: "completed",
    subtext: "Payment Completed"
  }
];

// Helper functions to get filtered orders
export const getReadyOrders = (): Order[] => {
  return allOrders.filter(order => order.status === "ready");
};

export const getInProgressOrders = (): Order[] => {
  return allOrders.filter(order => order.status === "in-progress");
};

export const getCompletedOrders = (): Order[] => {
  return allOrders.filter(order => order.status === "completed");
};

export const getAllOrders = (): Order[] => {
  return allOrders;
};

export const getOrdersCount = () => {
  return {
    all: allOrders.length,
    ready: getReadyOrders().length,
    inProgress: getInProgressOrders().length,
    completed: getCompletedOrders().length
  };
};