import type { DashboardStats } from "../../interfaces/DashboardStats.interface";

export const mockStats: DashboardStats = {
    total_products: 45,
    total_categories: 25,
    active_suppliers: 30,
    low_stock_products: 12,
    monthly_sales: {
      sales: [
        { month: "Janeiro", total: 15000, quantity: 12 },
        { month: "Fevereiro", total: 18000, quantity: 15 },
        { month: "Março", total: 22000, quantity: 18 },
        { month: "Abril", total: 19000, quantity: 16 },
        { month: "Maio", total: 25000, quantity: 20 },
        { month: "Junho", total: 28000, quantity: 22 },
        { month: "Julho", total: 26000, quantity: 21 },
        { month: "Agosto", total: 24000, quantity: 19 },
        { month: "Setembro", total: 27000, quantity: 21 },
        { month: "Outubro", total: 30000, quantity: 24 },
        { month: "Novembro", total: 32000, quantity: 26 },
        { month: "Dezembro", total: 35000, quantity: 28 },
      ],
      total: 250000,
      quantity: 180,
    },
    monthly_profit: 85000,
  };