import {ModuleLayout} from "@/components/layout/module";
import {ShoppingRoutes} from "@/data/routes/ShoppingRoutes";
import React from "react";

export default function ShoppingLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <ModuleLayout.Container>
            <ModuleLayout.Header/>
            <ModuleLayout.SideMenuAndContent>
                <ModuleLayout.Sidemenu routes={ShoppingRoutes}/>
                <ModuleLayout.Content>{children}</ModuleLayout.Content>
            </ModuleLayout.SideMenuAndContent>
        </ModuleLayout.Container>
    );
}
