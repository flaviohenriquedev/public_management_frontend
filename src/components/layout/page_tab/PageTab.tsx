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
            <div className="border-l border-b text-sm breadcrumbs w-full sticky top-[6rem] bg-base-100 shadow-lg shadow-base-200 py-1 px-3 rounded-bl-md mb-4">
                <ul className="text-[8.5pt]">
                    <li><a href="#basic_data">Dados Básicos</a></li>
                    <li><a href="#object_nature">Natureza Objeto</a></li>
                    <li>Add Document</li>
                </ul>
            </div>

            <div>{tabs[activeTab].content}</div>
        </div>
    );
}