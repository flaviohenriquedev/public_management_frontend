import {IoIosArrowForward} from "react-icons/io";
import React, {useState} from "react";
import {TPageTab} from "@/types/Global";

interface SubmenuProps {
    label: string
    tab: TPageTab[] | undefined
    children?: React.ReactNode
    showSubMenuProp?: boolean
}

export function Submenu({label, tab, children, showSubMenuProp = false}: SubmenuProps) {
    const [showSubMenu, setShowSubMenu] = useState<boolean>(showSubMenuProp)

    return (
        <li key={label} className="relative"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}>
            <div
                className="flex items-center justify-between w-full py-1 px-2 hover:bg-base-100 hover:cursor-pointer rounded-lg">{label}
                {tab && <IoIosArrowForward/>}
            </div>
            {showSubMenu && children}
        </li>
    )
}