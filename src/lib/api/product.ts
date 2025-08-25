export const fetchProducts = async (category?: string) => {
  let url = '/api/product';
  if (category && category !== 'all') {
    url += `?category=${category}`;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};