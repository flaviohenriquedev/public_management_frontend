import {IoIosArrowForward} from "react-icons/io";
import React, {HTMLAttributes, useState} from "react";
import {TPageTab, TRoute} from "@/types/Global";

interface SubmenuProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    tab: TRoute[] | undefined;
    children?: React.ReactNode;
    showSubMenuProp?: boolean;
}

export function Submenu({
                            label,
                            tab,
                            children,
                            showSubMenuProp = false,
                            onClick,
                        }: SubmenuProps) {
    const [showSubMenu, setShowSubMenu] = useState<boolean>(showSubMenuProp);

    return (
        <li
            key={label}
            className="relative"
            onMouseEnter={tab ? () => setShowSubMenu(true) : () => {
            }}
            onMouseLeave={() => setShowSubMenu(false)}
        >
            <div
                onClick={onClick}
                className="flex items-center justify-between w-full py-1 px-2 hover:bg-primary-focus hover:cursor-pointer rounded-sm"
            >
                {label}
                {tab && <IoIosArrowForward/>}
            </div>
            {showSubMenu && children}
        </li>
    );
}
