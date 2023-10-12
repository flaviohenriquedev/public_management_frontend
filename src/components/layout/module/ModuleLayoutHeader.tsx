'use client'

import * as S from "./style";
import {useEffect, useRef} from "react";
import Link from "next/link";

interface ModuleLayoutHeaderProps {
    title: string
    homeRoute?: string
}

export const ModuleLayoutHeader = ({title, homeRoute = "#"}: ModuleLayoutHeaderProps) => {
    const pageTitle = useRef(title);

    useEffect(() => {
        pageTitle.current = title
    }, [title]);

    return <S.Header id="module_layout_header">
        <Link href={homeRoute}>{pageTitle.current}</Link>
    </S.Header>;
};
