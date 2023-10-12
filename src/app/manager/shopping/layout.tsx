import {ShoppingRoutes as routes} from "@/data/routes/ShoppingRoutes";
import {ModuleLayout} from "@/components/layout/module";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ModuleLayout pageTitle="Compras" routes={routes}>
            {children}
        </ModuleLayout>
    );
}
