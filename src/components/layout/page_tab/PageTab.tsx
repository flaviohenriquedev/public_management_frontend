'use client'

import {useEffect, useState} from "react";
import {TPageTab} from "@/types/Global";
import {Tabs} from "@/components/layout/page_tab/Tabs";

interface PageTabProps {
    tabs: TPageTab[]
}

export function PageTab({tabs = []}: PageTabProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [actualTab, setActualTab] = useState<TPageTab>();
    const [showBreadcrumb, setShowBreadcrumb] = useState<boolean>(false);

    useEffect(() => {
        setActualTab(tabs[0])
    }, []);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
        setActualTab(tabs[tabIndex])
        setShowBreadcrumb(!showBreadcrumb)
    };

    function renderTabs() {
        return tabs.map((tab, index) => (
            <Tabs tab={tab} />
        ))
    }

    return (
        <div>
            <ul className="flex gap-1 relative">
                {renderTabs()}
            </ul>
        </div>
    );
}