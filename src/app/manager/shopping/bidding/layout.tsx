import React from "react";
import {PageLayout} from "@/components/layout/page";
import {PageTab} from "@/components/layout/page_tab/PageTab";
import {biddingTabs} from "@/components/pages/shopping/bidding/biddingTabs";

export default function BiddingLayout({children}: { children: React.ReactNode }) {
    return (
        <PageLayout.Container>
            {/*<PageLayout.Info />*/}
            <PageTab tabs={biddingTabs}/>
            <PageLayout.Content>
                {children}
            </PageLayout.Content>
        </PageLayout.Container>
    )
}