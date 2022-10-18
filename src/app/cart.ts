export interface Cart {
    items: CartItem[]
}

export interface CartItem {
    name: string;
    id: number;
    quantity: number;
    basePrice: number;
    image: string;
}
