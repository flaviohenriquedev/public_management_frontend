"use client";

import {SideMenuContext} from "@/context/SideMenuContext";
import {TRoute} from "@/types/Global";
import {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import {SubMenu} from "./SubMenu";
import * as S from "./style";
import {Flyout} from "./Flyout";
import {MdExpandMore} from 'react-icons/md'

type MenuProps = {
    description: string;
    pageName?: string;
    icon?: JSX.Element;
    submenu?: TRoute[];
    href?: string;
};

export const Menu = ({
    description,
    pageName,
    icon,
    submenu,
    href,
}: MenuProps) => {
    const route = useRouter();
    const [menuListClosed, setMenuListClosed] = useState(true);
    const { expanded } = useContext(SideMenuContext);

    function renderSubMenuItem(submenuitems: TRoute[]) {
        return submenuitems.map((submenuitem) => (
            <SubMenu
                key={submenuitem.description}
                description={submenuitem.description}
                pageName={submenuitem.pageName}
                href={submenuitem.href}
            >
                {submenuitem.submenu && renderSubMenuItem(submenuitem.submenu)}
            </SubMenu>
        ));
    }

    function handleClick() {
        if (submenu) {
            setMenuListClosed(!menuListClosed);
        } else if (href) {
            route.push(
                href.startsWith("/") ? href : "/" + href
            );
        }
    }

    return (
        <S.SideMenuItem expanded={!menuListClosed} id="side_menu_item">
            <S.SideMenuItemHeader id="side_menu_item_header" onClick={() => handleClick()} expanded={!menuListClosed}>
                <div className="flex justify-between items-center">
                    <S.IconContainer id="side_menu_icon">{icon}</S.IconContainer>
                    <S.DescriptionContainer expanded={expanded}>
                        {description}
                    </S.DescriptionContainer>
                </div>
                {expanded && (
                    <S.ExpandIcon expanded={!menuListClosed}>
                        <MdExpandMore />
                    </S.ExpandIcon>
                )}

            </S.SideMenuItemHeader>

            {submenu && expanded ? (
                <S.SideMenuSubList closed={menuListClosed}>
                    {renderSubMenuItem(submenu)}
                </S.SideMenuSubList>
            ) : (
                <Flyout>
                    <S.DescriptionContainer expanded={!expanded}>
                        {description}
                    </S.DescriptionContainer>
                    {submenu && !expanded && renderSubMenuItem(submenu)}
                </Flyout>
            )}
        </S.SideMenuItem>
    );
};
