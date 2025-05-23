import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const routeMap: Record<string, string> = {
  dashboard: "Dashboard",
  products: "Produtos",
  categories: "Categorias",
  suppliers: "Fornecedores",
  sales: "Vendas",
  reports: "Relatórios",
  settings: "Configurações",
  home: "Visão Geral",
};

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const href = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      label: routeMap[value] || value,
      href,
    };
  });

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
      <Link
        to="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={breadcrumb.href} className="flex items-center gap-1">
            {isLast ? (
              <span className="text-foreground font-medium capitalize">
                {breadcrumb.label}
              </span>
            ) : (
              <>
                <Link
                  to={breadcrumb.href}
                  className="hover:text-foreground transition-colors capitalize"
                >
                  {breadcrumb.label}
                </Link>
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
