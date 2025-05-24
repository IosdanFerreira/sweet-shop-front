import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { ShoppingCart } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function CardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Skeleton className="h-4 w-[100px]" />
        </CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </CardHeader>
      <CardContent>
        <div className="text-lg sm:text-xl font-bold">
          <Skeleton className="h-4 w-[100px]" />
        </div>
        <p className="text-xs text-muted-foreground">
          <Skeleton className="h-4 w-[100px]" />
        </p>
      </CardContent>
    </Card>
  );
}
