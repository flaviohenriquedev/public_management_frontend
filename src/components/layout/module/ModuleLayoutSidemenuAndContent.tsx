import React from "react";
import * as S from "./style";

export function ModuleLayoutSidemenuAndContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.SidemenuAndContent>{children}</S.SidemenuAndContent>;
}
