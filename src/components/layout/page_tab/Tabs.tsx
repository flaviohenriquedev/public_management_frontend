import {TPageTab} from "@/types/Global";
import React, {useState} from "react";
import {Submenu} from "@/components/layout/page_tab/Submenu";
import {useRouter} from "next/navigation";
import {IoIosArrowDown} from "react-icons/io";

interface TabsProps {
    tab: TPageTab;
}

export function Tabs({tab}: TabsProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false)

    const router = useRouter()

    function renderSubMenu(tab: TPageTab) {
        return tab.submenu?.map(sm => {
            return (
                <Submenu label={sm.label} tab={sm.submenu} showSubMenuProp={showSubMenu}
                         onClick={() => router.push(sm.href ? sm.href : "#")}>
                    {tab.submenu &&
                        <ul className="rounded-sm flex flex-col gap-1 absolute border border-secondary bg-primary w-52 p-2 h-auto left-full -top-2">{renderSubMenu(sm)}</ul>}
                </Submenu>
            )
        })
    }

    function handleClickTab() {
        tab.href ? router.push(tab.href) : ''
    }

    return (
        <li onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            onClick={handleClickTab}
            className="w-auto text-[9pt] px-2 bg-primary text-primary-content rounded-sm relative z-10 hover:cursor-pointer hover:bg-secondary hover:text-secondary-content">
            <div className="flex items-center flex-wrap w-full gap-2">
                <div>
                    {tab.label}
                </div>
                {tab.submenu &&
                    <div>
                        <IoIosArrowDown/>
                    </div>
                }
            </div>
            {tab.submenu && showMenu && (
                <ul className="rounded-tr-sm z-10 rounded-br-sm rounded-bl-sm flex flex-col gap-1 absolute bg-primary w-52 h-auto p-2 left-0 text-[9pt] text-primary-content border border-secondary">
                    {renderSubMenu(tab)}
                </ul>
            )}
        </li>
    )
}