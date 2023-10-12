"use client";

import * as S from "./style";

interface PageLayoutTitleProps {
    title: string
}

export const PageLayoutTitle = ({title} : PageLayoutTitleProps) => {

    return <S.Title id="page_layout_title">{title}</S.Title>;
};
