'use client'

import * as S from "./style";
import {usePathname} from "next/navigation";
import {TRoute} from "@/types/Global";
import {useEffect, useState} from "react";
import {ShoppingRoutes} from "@/data/routes/ShoppingRoutes";
import {ModuleRoutes} from "@/data/routes/ModuleRoutes";
import {useFetcher} from "react-router-dom";
import Link from "next/link";

interface ModuleLayoutHeaderProps {
    title: string;
    homeRoute?: string;
}

export const ModuleLayoutHeader = ({title, homeRoute = "#"}: ModuleLayoutHeaderProps) => {
    const pathName = usePathname();
    const pathNameArray = pathName.split("/").filter(pt => pt !== '')
    const [routes, setRoutes] = useState<TRoute[]>([]);
    const [routesFiltered, setRoutesFiltered] = useState<TRoute[]>([]);

    useEffect(() => {
        setRoutes([...ShoppingRoutes, ...ModuleRoutes])
    }, []);

    useEffect(() => {
        pathNameArray && pathNameArray.map(pt => {
            setRoutesFiltered(routes.filter(r => r.description === pt))
        })
    }, [pathNameArray]);

    return (
        <S.Header id="module_layout_header">
            <div className="flex flex-col">
                {routesFiltered && routesFiltered.map(r => (
                    <label key={r.description}>{r.description}</label>
                ))}
            </div>
        </S.Header>
    );
};
