import React from "react";
import {PageLayout} from "@/components/layout/page";
import {PageTab} from "@/components/layout/page_tab/PageTab";
import {ContractTabs} from "@/data/routes/ShoppingRoutes";


export default function ShoppingContractLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            <PageLayout.Info/>
            <PageTab tabs={ContractTabs}/>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}