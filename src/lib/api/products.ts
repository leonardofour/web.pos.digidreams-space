// lib/api/products.ts
export type ApiCategory = {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
};

export type ApiDrink = {
  id: number;
  name: string;
  description?: string;
  category_id: number;
  variants: {
    small: {
      id: number;
      price: number;
      size?: string;
    };
    large: {
      id: number;
      price: number;
      size?: string;
    };
  };
  created_at?: string;
  updated_at?: string;
};

export type ApiFood = {
  id: number;
  name: string;
  description?: string;
  price: number;
  category_id: number;
  image_url?: string;
  is_available?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    total?: number;
    page?: number;
    per_page?: number;
    last_page?: number;
  };
};

// Fetch categories from API
export const fetchCategories = async (): Promise<ApiCategory[]> => {
  try {
    const response = await fetch('/api/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<ApiCategory[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch categories');
    }

    return result.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (
  category: string, 
  type?: string
): Promise<ApiDrink[] | ApiFood[]> => {
  try {
    let url = `/api/products?category=${encodeURIComponent(category)}`;
    if (type) {
      url += `&type=${encodeURIComponent(type)}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<ApiDrink[] | ApiFood[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch products');
    }

    return result.data || [];
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};

// Fetch drinks with variants
export const fetchDrinks = async (category: 'coffee' | 'tea' | 'other'): Promise<ApiDrink[]> => {
  return fetchProductsByCategory(category, 'variant') as Promise<ApiDrink[]>;
};

// Fetch foods
export const fetchFoods = async (category: 'food' | 'snack'): Promise<ApiFood[]> => {
  return fetchProductsByCategory(category) as Promise<ApiFood[]>;
};

// Helper function to format price from API response
export const formatPrice = (price: number | string): number => {
  if (typeof price === 'number') return price;
  
  // Remove any currency symbols and commas, extract numbers
  const cleanPrice = price.toString().replace(/[^\d]/g, '');
  return parseInt(cleanPrice) || 0;
};

// Helper function to format currency for display
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Type guards for API response validation
type UnknownResponse = unknown;

interface DrinkVariant {
  id: number;
  price: number;
  size?: string;
}

interface DrinkItem {
  id: number;
  name: string;
  variants: {
    small: DrinkVariant;
    large: DrinkVariant;
  };
}

interface FoodItem {
  id: number;
  name: string;
  price: number | string;
}

interface CategoryItem {
  id: number;
  name: string;
}

// Helper function to check if object has required properties
const hasRequiredKeys = <T>(obj: UnknownResponse, keys: (keyof T)[]): obj is T => {
  if (!obj || typeof obj !== 'object') return false;
  const objKeys = Object.keys(obj as Record<string, unknown>);
  return keys.every(key => objKeys.includes(key as string));
};

// Validate API response structure
export const validateDrinkResponse = (data: UnknownResponse): data is ApiDrink[] => {
  if (!Array.isArray(data)) return false;
  
  return data.every((item: UnknownResponse): item is DrinkItem => {
    if (!hasRequiredKeys<DrinkItem>(item, ['id', 'name', 'variants'])) {
      return false;
    }
    
    const drinkItem = item as DrinkItem;
    
    return (
      typeof drinkItem.id === 'number' &&
      typeof drinkItem.name === 'string' &&
      drinkItem.variants &&
      typeof drinkItem.variants === 'object' &&
      drinkItem.variants.small &&
      drinkItem.variants.large &&
      typeof drinkItem.variants.small.id === 'number' &&
      typeof drinkItem.variants.small.price === 'number' &&
      typeof drinkItem.variants.large.id === 'number' &&
      typeof drinkItem.variants.large.price === 'number'
    );
  });
};

export const validateFoodResponse = (data: UnknownResponse): data is ApiFood[] => {
  if (!Array.isArray(data)) return false;
  
  return data.every((item: UnknownResponse): item is FoodItem => {
    if (!hasRequiredKeys<FoodItem>(item, ['id', 'name', 'price'])) {
      return false;
    }
    
    const foodItem = item as FoodItem;
    
    return (
      typeof foodItem.id === 'number' &&
      typeof foodItem.name === 'string' &&
      (typeof foodItem.price === 'number' || typeof foodItem.price === 'string')
    );
  });
};

export const validateCategoryResponse = (data: UnknownResponse): data is ApiCategory[] => {
  if (!Array.isArray(data)) return false;
  
  return data.every((item: UnknownResponse): item is CategoryItem => {
    if (!hasRequiredKeys<CategoryItem>(item, ['id', 'name'])) {
      return false;
    }
    
    const categoryItem = item as CategoryItem;
    
    return (
      typeof categoryItem.id === 'number' &&
      typeof categoryItem.name === 'string'
    );
  });
};