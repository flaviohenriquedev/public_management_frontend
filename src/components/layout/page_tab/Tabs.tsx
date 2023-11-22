import {TPageTab} from "@/types/Global";
import React, {useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import {Submenu} from "@/components/layout/page_tab/Submenu";


interface TabsProps {
    tab: TPageTab;
}

export function Tabs({tab}: TabsProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false)

    function renderSubMenu(tab: TPageTab) {
        return tab.submenu?.map(sm => {
            return (
                <Submenu label={sm.label} tab={sm.submenu} showSubMenuProp={showSubMenu}>
                    {tab.submenu &&
                        <ul className="rounded-lg flex flex-col gap-1 absolute bg-base-300 w-52 h-auto left-full top-0">{renderSubMenu(sm)}</ul>}
                </Submenu>
            )
        })
    }

    return (
        <li onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className="w-auto text-[10pt] px-2 bg-primary rounded-sm relative hover:cursor-pointer">
            <div>{tab.label}</div>
            {tab.submenu && showMenu && (
                <ul className="rounded-tr-lg rounded-br-lg rounded-bl-lg flex flex-col gap-1 absolute bg-base-300 w-52 h-auto p-2 left-0 text-[9pt]">
                    {renderSubMenu(tab)}
                </ul>
            )}
        </li>
    )
}