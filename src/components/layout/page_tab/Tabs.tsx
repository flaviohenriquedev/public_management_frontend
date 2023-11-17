import {TPageTab} from "@/types/Global";
import {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";

interface TabsProps {
    tab: TPageTab;
}

export function Tabs({tab}: TabsProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false)

    function renderSubMenu(tab: TPageTab) {
        return tab.submenu?.map(sm => {
            return (
                <li key={sm.label}>
                    <div onClick={() => setShowSubMenu(!showSubMenu)}
                         className="flex items-center justify-between w-full py-1 px-2 hover:bg-base-200 hover:cursor-pointer rounded-lg">{sm.label}
                        {sm.submenu && <IoIosArrowDown/>}
                    </div>

                    {sm.submenu && showSubMenu &&
                        <ul className="ml-4 bg-base-200 rounded-br-lg rounded-bl-lg">{renderSubMenu(sm)}</ul>}
                </li>
            )
        })
    }

    return (
        <li
            className="w-auto text-[10pt] px-2 bg-primary rounded-sm relative hover:cursor-pointer">
            <div onClick={() => setShowMenu(!showMenu)}>{tab.label}</div>
            {tab.submenu && showMenu && (
                <ul className="rounded-tr-lg rounded-br-lg rounded-bl-lg flex flex-col gap-1 absolute bg-base-300 w-52 h-auto p-2 left-0 text-[9pt]">
                    {renderSubMenu(tab)}
                </ul>
            )}
        </li>
    )
}