import * as S from "./style";
import { ReactNode } from "react";

interface LineContentProps {
  children: ReactNode;
  alignment?: "left" | "center" | "right";
}
export function LineContent({ children, alignment }: LineContentProps) {
  return <S.Container alignment={alignment}>{children}</S.Container>;
}
