"use client";

import * as S from "./style";

interface PageLayoutHeaderProps {
    title?: string
}

export const PageLayoutHeader = ({title} : PageLayoutHeaderProps) => {
    return <S.Title id="page_layout_title">{title}</S.Title>;
};
