import {
  AlertTriangle,
  Package,
  ShoppingCart,
  Tags,
  TrendingUp,
  Truck,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type {
  DashboardStats,
  TopProduct,
} from "../interfaces/DashboardStats.interface";

import { Breadcrumb } from "@/components/custom-breadcrumb";

// Dados mockados para exemplo
const mockStats: DashboardStats = {
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

const mockTopProducts: TopProduct[] = [
  { name: "Chocolate Trufado", quantity: 150, total: 7500 },
  { name: "Bolo de Chocolate", quantity: 120, total: 6000 },
  { name: "Cupcake", quantity: 100, total: 5000 },
  { name: "Brigadeiro", quantity: 80, total: 4000 },
  { name: "Pudim", quantity: 60, total: 3000 },
  { name: "Torta de Morango", quantity: 90, total: 4500 },
  { name: "Cheesecake", quantity: 70, total: 3500 },
  { name: "Brownie", quantity: 85, total: 4250 },
  { name: "Mousse de Chocolate", quantity: 75, total: 3750 },
  { name: "Tiramisu", quantity: 65, total: 3250 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);
};

export function HomeDashboard() {
  return (
    <div className="p-2 sm:p-3 pb-10 max-w-full overflow-x-hidden">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 w-full">
        {/* Resumo financeiro */}
        <div className="space-y-2 sm:space-y-3 w-full lg:w-1/2">
          <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Vendas no Mês */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Vendas no Mês
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold truncate">
                  {formatCurrency(mockStats.monthly_sales.total)}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {mockStats.monthly_sales.quantity} vendas realizadas
                </p>
              </CardContent>
            </Card>

            {/* Lucro Mensal */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Lucro Mensal
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold truncate">
                  {formatCurrency(mockStats.monthly_profit)}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  Lucro líquido do mês
                </p>
              </CardContent>
            </Card>

            {/* Produtos com Estoque Baixo */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Estoque Baixo
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold">
                  {mockStats.low_stock_products}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  Produtos com estoque crítico
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos */}
          <div className="grid gap-2 sm:gap-4">
            {/* Vendas por Mês */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  Vendas por Mês
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-hidden">
                <ChartContainer
                  config={{
                    desktop: {
                      label: "Desktop",
                      color: "hsl(var(--chart-1))",
                    },
                    mobile: {
                      label: "Mobile",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[16rem] sm:h-[20rem] lg:h-[25rem] w-full"
                >
                  <LineChart
                    data={mockStats.monthly_sales.sales}
                    accessibilityLayer
                    margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.substring(0, 3)}
                      tick={{ fontSize: 11 }}
                      interval={0}
                      minTickGap={20}
                    />
                    <YAxis
                      yAxisId="left"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => formatCurrency(value as number)}
                      tick={{ fontSize: 11 }}
                      width={60}
                      tickCount={5}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tick={{ fontSize: 11 }}
                      width={40}
                      tickCount={5}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => {
                        if (name === "Valor Total") {
                          return (
                            <div className="flex items-baseline gap-1">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <div className="flex gap-1">
                                <span>{name}:</span>
                                <span className="font-bold">
                                  {formatCurrency(value as number)}
                                </span>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-2 h-2 rounded-full bg-[#23B7E5]" />
                            <div className="flex gap-1">
                              <span>{name}:</span>
                              <span className="font-bold">{value}</span>
                            </div>
                          </div>
                        );
                      }}
                    />
                    <Line
                      yAxisId="left"
                      type="linear"
                      dataKey="total"
                      strokeWidth={2}
                      stroke="#9673E4"
                      name="Valor Total"
                      dot={false}
                    />
                    <Line
                      yAxisId="right"
                      type="linear"
                      dataKey="quantity"
                      stroke="#23B7E5"
                      strokeWidth={2}
                      name="Quantidade"
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resumo geral */}
        <div className="space-y-2 sm:space-y-3 w-full lg:w-1/2">
          <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total de Produtos */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Total de Produtos
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold">
                  {mockStats.total_products}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  Produtos ativos
                </p>
              </CardContent>
            </Card>

            {/* Categorias Cadastradas */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Categorias
                </CardTitle>
                <Tags className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold">
                  {mockStats.total_categories}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  Categorias cadastradas
                </p>
              </CardContent>
            </Card>

            {/* Fornecedores Ativos */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium truncate">
                  Fornecedores
                </CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl font-bold">
                  {mockStats.active_suppliers}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  Fornecedores ativos
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos */}
          <div>
            {/* Top 10 Produtos */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  Top 10 Produtos Mais Vendidos
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full overflow-x-hidden">
                <ChartContainer
                  config={{
                    desktop: {
                      label: "Desktop",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[16rem] sm:h-[20rem] lg:h-[25rem] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    data={mockTopProducts}
                    layout="vertical"
                    margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid horizontal={false} />
                    <XAxis
                      type="number"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value}
                      hide
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      hide
                      className="font-bold"
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                      labelFormatter={(label) => {
                        return (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="font-medium text-foreground">
                              {label}
                            </div>
                          </div>
                        );
                      }}
                      formatter={(value, name) => {
                        return (
                          <div className="flex items-center gap-1">
                            <span>{name}:</span>
                            <span className="font-bold">
                              {formatCurrency(value as number)}
                            </span>
                          </div>
                        );
                      }}
                    />
                    <Bar
                      dataKey="total"
                      name="Total"
                      radius={8}
                      fill="var(--primary)"
                    >
                      <LabelList
                        dataKey="name"
                        position="insideLeft"
                        offset={10}
                        className="fill-white font-medium text-xs sm:text-sm"
                        fontSize={11}
                      />
                      <LabelList
                        dataKey="quantity"
                        position="right"
                        offset={8}
                        className="fill-foreground text-xs sm:text-sm font-semibold text-foreground"
                        fontSize={11}
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
