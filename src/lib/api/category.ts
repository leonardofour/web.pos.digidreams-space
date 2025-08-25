export const fetchCategories = async () => {
  const response = await fetch('/api/category');
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};