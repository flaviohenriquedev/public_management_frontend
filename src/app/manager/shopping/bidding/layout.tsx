import React from "react";
import { PageLayout } from "@/components/layout/page";
import { PageTab } from "@/components/layout/page_tab/PageTab";
import { BiddingTabs } from "@/data/routes/ShoppingRoutes";

export default function ShoppingBiddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout.Container>
      <PageLayout.Info />
      <PageTab tabs={BiddingTabs} />
      <PageLayout.Container>{children}</PageLayout.Container>
    </PageLayout.Container>
  );
}
