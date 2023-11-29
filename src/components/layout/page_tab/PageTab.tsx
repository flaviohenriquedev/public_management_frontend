'use client'

import {useEffect, useState} from "react";
import {TPageTab, TRoute} from "@/types/Global";
import {Tabs} from "@/components/layout/page_tab/Tabs";

interface PageTabProps {
    tabs: TRoute[]
}

export function PageTab({tabs = []}: PageTabProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [showBreadcrumb, setShowBreadcrumb] = useState<boolean>(false);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
        setShowBreadcrumb(!showBreadcrumb)
    };

    function renderTabs() {
        return tabs.map((tab, index) => (
            <Tabs tab={tab} />
        ))
    }

    return (
        <div className="p-2 border-b border-b-primary">
            <ul className="flex flex-wrap gap-1 relative z-0">
                {renderTabs()}
            </ul>
        </div>
    );
}