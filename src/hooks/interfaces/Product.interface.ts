export interface Product {
    id: number;
    name: string;
    description: string;
    purchase_price: number;
    selling_price: number;
    stock: number;
    category: any;
    supplier: any;
    created_at: Date;
    updated_at: Date;
} 