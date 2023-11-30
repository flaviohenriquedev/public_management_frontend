'use client'

import * as S from "./style";
import {ReactNode, useContext} from "react";
import {SideMenuContext} from "@/context/app/SideMenuContext";

interface ModuleLayoutContentProps {
    children: ReactNode;
};

export const ModuleLayoutContent = ({ children }: ModuleLayoutContentProps) => {
    const {expanded, setExpanded} = useContext(SideMenuContext);

    return <S.Content $expanded={expanded}>{children}</S.Content>;
};
