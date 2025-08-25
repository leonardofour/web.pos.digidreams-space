export type OrderState = 'ready' | 'in-progress' | 'completed';

export interface OrderStateProps {
    status: OrderState
    subtext: string
}