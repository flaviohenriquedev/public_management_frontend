import { PatrimonyRoutes as routes } from "@/data/routes/PatrimonyRoutes";
import { ModuleLayout } from "@/components/layout/module";

export default function PatrimonyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>teste</div>
    // <ModuleLayout pageTitle="Patrimônio" routes={routes}>
    //     {children}
    // </ModuleLayout>
  );
}
