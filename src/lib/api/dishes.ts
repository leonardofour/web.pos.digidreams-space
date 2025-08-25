export const getOutOfStockDishes = async () => {
  const res = await fetch("/api/dishes");
  const data = await res.json();
  return data.data.items;
};