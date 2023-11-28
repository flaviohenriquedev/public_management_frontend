import {
  ShoppingRoutes,
  ShoppingRoutes as routes,
} from "@/data/routes/ShoppingRoutes";
import { ModuleLayout } from "@/components/layout/module";

export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModuleLayout.Container>
      <ModuleLayout.Header />
      <ModuleLayout.SideMenuAndContent>
        <ModuleLayout.Sidemenu routes={ShoppingRoutes} />
        <ModuleLayout.Content>{children}</ModuleLayout.Content>
      </ModuleLayout.SideMenuAndContent>
    </ModuleLayout.Container>
  );
}
