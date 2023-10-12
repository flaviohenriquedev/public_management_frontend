"use client";

import * as S from "./style";

interface PageContentTitleProps {
    title: string
}

export const PageContentTitle = ({title} : PageContentTitleProps) => {

    return <S.Title>{title}</S.Title>;
};
