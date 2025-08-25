export interface Dish {
    id: string;
    name: string;
    photoUrl: string;
    orders?: number;
    stock?: number
    availableAt?: string;
}

export type DishListVariant = 'ordered' | 'available';

export interface DishListProps {
    dishes: Dish[];
    variant: DishListVariant;
    className?: string;
}