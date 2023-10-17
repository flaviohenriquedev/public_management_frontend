'use client'

import {useState} from "react";
import {TPageTab} from "@/types/Global";
import * as S from './style'

interface PageTabProps {
    tabs: TPageTab[]
}

export function PageTab({tabs} : PageTabProps) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <S.Tab active={activeTab === index} onClick={() => handleTabClick(index)}>{tab.label}</S.Tab>
                ))}
            </div>
            <div>{tabs[activeTab].content}</div>
        </div>
    );
}