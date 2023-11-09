'use client'

import {useEffect, useState} from "react";
import {TPageTab} from "@/types/Global";

interface PageTabProps {
    tabs: TPageTab[]
}

export function PageTab({tabs = []}: PageTabProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [actualTab, setActualTab] = useState<TPageTab>();

    useEffect(() => {
        setActualTab(tabs[0])
    }, []);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
        setActualTab(tabs[tabIndex])
    };

    function renderBreadCrumb() {
        if (actualTab && actualTab.breadcrumbs)
            return actualTab.breadcrumbs.map((pt, index) => {
                return (
                    <li key={index}><a href={pt.href}>{pt.title}</a></li>
                )
            })
    }

    return (
        <div className="w-full">
            <div className="flex-none bg-red-800">
                <ul className="flex">
                    {tabs.map((tab, index) => (
                        <li>
                            <label onClick={() => handleTabClick(index)}>
                                {tab.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-full min-h-full w-full">{tabs[activeTab].content}</div>
        </div>
    );
}