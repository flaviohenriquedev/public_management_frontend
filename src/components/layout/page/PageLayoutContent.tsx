import * as S from "./style";
import {ReactNode} from "react";

interface PageLayoutContentProps {
    children: ReactNode;
};

export const PageLayoutContent = ({ children }: PageLayoutContentProps) => {
    return <S.Content id="page_layout_content">{children}</S.Content>;
};
