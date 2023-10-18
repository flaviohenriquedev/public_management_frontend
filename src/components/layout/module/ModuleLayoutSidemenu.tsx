"use client";

import {Menu} from "@/components/navigation/route_menu/Menu";
import {SideMenuContext} from "@/context/SideMenuContext";
import {TRoute} from "@/types/Global";
import {useContext, useEffect, useState} from "react";
import {RiExpandLeftLine, RiExpandRightLine} from "react-icons/ri";
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc';
import * as S from "./style";

interface ModuleLayoutSidemenuProps {
    routes: TRoute[];
};
export const ModuleLayoutSidemenu = ({routes}: ModuleLayoutSidemenuProps) => {
    const {expanded, setExpanded} = useContext(SideMenuContext);

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<TRoute[]>(routes);

    function renderMenuItem() {
        return filteredData.map((route) => {
            return (
                <Menu
                    key={route.description}
                    description={route.description && route.description}
                    pageName={route.pageName && route.pageName}
                    icon={route.icon}
                    submenu={route.submenu}
                    href={route.href}
                />
            );
        });
    }

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: TRoute } = {};

            if (routes) {
                routes.forEach((d) => {
                    const filteredMenu: TRoute = {...d};
                    if (
                        d.description
                            .toLowerCase()
                            .includes(searchMenu.toLowerCase()) ||
                        (d.submenu &&
                            d.submenu.some((sub) =>
                                sub.description
                                    .toLowerCase()
                                    .includes(searchMenu.toLowerCase())
                            ))
                    ) {
                        filteredMap[d.description] = filteredMenu;
                    }

                    if (d.submenu) {
                        const filteredSubmenu = d.submenu.filter((sub) =>
                            sub.description
                                .toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        );
                        if (filteredSubmenu.length > 0) {
                            filteredMenu.submenu = filteredSubmenu;
                            filteredMap[d.description] = filteredMenu;
                        }
                    }
                });
            }

            const filtered: TRoute[] = Object.values(filteredMap);
            setFilteredData(filtered);
        };

        filterMenu();
    }, [routes, searchMenu]);

    return (
        <S.Sidemenu $expanded={expanded} id="side_menu_container">
            <S.SideMenuHeader $expanded={expanded} id="side_menu_header">
                <S.SearchMenu
                    id="search_menu"
                    $expanded={expanded}
                    placeholder="Buscar Menu"
                    value={searchMenu}
                    onChange={(e) => setSearchMenu(e.target.value)}
                />
                <S.ToggleSideMenuButton id="toggle_side_menu_button" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <RiExpandLeftLine size={16} enableBackground={0}/>
                    ) : (
                        <RiExpandRightLine size={16} enableBackground={0}/>
                    )}
                </S.ToggleSideMenuButton>
            </S.SideMenuHeader>
            <S.SideMenuList id="side_menu_list" className="overflow-y-scroll">
                <div className="flex justify-end w-full px-2 py-4 gap-2">
                    <div className="hover:cursor-pointer">
                        <VscExpandAll />
                    </div>
                    <div className="hover:cursor-pointer">
                        <VscCollapseAll />
                    </div>
                </div>
                {renderMenuItem()}
            </S.SideMenuList>
        </S.Sidemenu>
    );
};
