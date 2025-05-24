import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { formatCurrency } from "@/utils/format-currency";

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  value: number | string;
  description: string;
}

export default function StatsCard({
  title,
  icon,
  value,
  description,
}: StatsCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium ">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-lg sm:text-xl font-bold ">{value}</div>
        <p className="text-xs text-muted-foreground ">{description}</p>
      </CardContent>
    </Card>
  );
}
