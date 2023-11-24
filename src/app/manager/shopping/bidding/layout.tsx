import React from "react";
import {PageLayout} from "@/components/layout/page";
import {PageTab} from "@/components/layout/page_tab/PageTab";
import {biddingTabs} from "@/components/pages/shopping/bidding/biddingTabs";

export default function BiddingLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            {/*<div className="flex items-center w-auto gap-2 px-2 mt-2 text-[9pt]">*/}
            {/*    <label>Código: 10</label>*/}
            {/*    <label>Número: 1010</label>*/}
            {/*    <label>Data Realização: 10/10/2023</label>*/}
            {/*</div>*/}
            <PageTab tabs={biddingTabs}/>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}