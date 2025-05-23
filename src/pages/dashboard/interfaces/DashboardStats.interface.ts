export interface DashboardStats {
  total_products: number;
  total_categories: number;
  active_suppliers: number;
  low_stock_products: number;
  monthly_sales: {
    sales: MonthlySalesData[]
    total: number;
    quantity: number;
  };
  monthly_profit: number;
}

export interface MonthlySalesData {
  month: string;
  total: number;
  quantity: number;
}

export interface TopProduct {
  name: string;
  quantity: number;
  total: number;
}

export interface StockMovement {
  category: string;
  in: number;
  out: number;
  products: {
    name: string;
    in: number;
    out: number;
    lastUpdate: string;
  }[];
} 