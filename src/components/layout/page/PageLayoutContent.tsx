import * as S from "./style";
import { ReactNode, useEffect } from "react";

interface PageLayoutContentProps {
  children: ReactNode;
}

export const PageLayoutContent = ({ children }: PageLayoutContentProps) => {
  return <S.Content>{children}</S.Content>;
};
