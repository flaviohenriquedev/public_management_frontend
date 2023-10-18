'use client'

import * as S from "./style";
import {usePathname} from "next/navigation";
import {TRoute} from "@/types/Global";
import {useEffect, useState} from "react";
import {ShoppingRoutes} from "@/data/routes/ShoppingRoutes";
import {ModuleRoutes} from "@/data/routes/ModuleRoutes";
import Link from "next/link";

interface ModuleLayoutHeaderProps {
    title: string;
    homeRoute?: string;
}

export const ModuleLayoutHeader = ({title, homeRoute = "#"}: ModuleLayoutHeaderProps) => {
    const pathName = usePathname();
    const pathNameSplit: string[] = pathName.split("/");
    const [routes, setRoutes] = useState<TRoute[]>([]);

    useEffect(() => {
        setRoutes([...ShoppingRoutes, ...ModuleRoutes]);
    }, []);

    function getRouteRecursively(routesToSearch: TRoute[] = routes) {
        const matchingRoutes: TRoute[] = [];

        pathNameSplit.map(value => {
            routesToSearch.forEach((route) => {
                if (route.breadcrumbLink === value) {
                    matchingRoutes.push(route);
                }
                if (route.submenu) {
                    // Verifique as rotas no submenu atual
                    const submenuMatch = route.submenu.find((submenuRoute) => submenuRoute.breadcrumbLink === value);
                    if (submenuMatch) {
                        matchingRoutes.push(submenuMatch);
                    }
                }
            });
        })

        return matchingRoutes;
    }

    return (
        <S.Header id="module_layout_header">
            <ul>
                {getRouteRecursively().map((routeItem, routeIndex) => (
                    <li key={routeIndex}>
                        <Link href={routeItem.href !== undefined ? routeItem.href : "#"}>{routeItem.pageName}</Link>
                    </li>
                ))}
            </ul>
        </S.Header>
    );
};

