'use client'

import * as S from "./style";
import {usePathname} from "next/navigation";
import {TOption, TRoute} from "@/types/Global";
import {useEffect, useState} from "react";
import {ShoppingRoutes} from "@/data/routes/ShoppingRoutes";
import {ModuleRoutes} from "@/data/routes/ModuleRoutes";
import Link from "next/link";
import Select from "@/components/data_input/select/Select";
import {Input} from "@/components/data_input/input";

interface ModuleLayoutHeaderProps {
    title: string;
    homeRoute?: string;
}

const institutions: TOption[] = [
    {
        value: "1",
        description: "PREFEITURA MUNICIPAL DE INHUMAS"
    }
]

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
            <div id="breadcrumbs" className="breadcrumbs">
                <ul>
                    {getRouteRecursively().map((routeItem, routeIndex) => (
                        <li key={routeIndex}>
                            <Link href={routeItem.href !== undefined ? routeItem.href : "#"}>{routeItem.pageName}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-10">
                <div>
                    <Select options={institutions} className="h-8 w-[30rem] text-[10pt]"/>
                </div>
                <div>
                    <Input type="date"/>
                </div>
            </div>
        </S.Header>
    );
};

