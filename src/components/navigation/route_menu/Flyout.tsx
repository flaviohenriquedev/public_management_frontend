import { useState } from "react";
import * as S from "./style";

interface FlyoutProps {
    children: React.ReactNode;
}

export const Flyout = ({ children }: FlyoutProps) => {
    const [subMenuListClosed, setSubMenuListClosed] = useState(true);

    return <S.Flyout>{children}</S.Flyout>;
};
