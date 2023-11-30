import * as S from "./style";
import React from "react";

interface PageLayoutContainerProps {
    children: React.ReactNode;
}

export const PageLayoutContainer = ({children}: PageLayoutContainerProps) => {
    return <S.Container id="page_layout_container">{children}</S.Container>;
};
