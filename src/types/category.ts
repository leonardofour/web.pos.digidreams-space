export interface Package {
  id: number;
  name: string;
}

export interface Food {
  id: number;
  name: string;
  price: string
}

export interface Drink {
  id: number;
  name: string;
  variants: {
    small: {price: string}
    large: {price: string}
  }
  
}
