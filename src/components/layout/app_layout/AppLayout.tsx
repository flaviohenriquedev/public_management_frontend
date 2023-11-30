import { CgMenuGridO } from "react-icons/cg";

import Header from "./header";
import * as S from "./style";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const clientName = "Prefeitura Municipal de Inhumas";

  return (
    <S.Container>
      <Header.Container>
        <Header.LeftContent>
          <Header.ModulesMenu icon={<CgMenuGridO size={25} />} />
          <Header.Client clientName={clientName} />
        </Header.LeftContent>
        <Header.RightContent>
          <Header.Themes />
          <Header.Avatar />
        </Header.RightContent>
      </Header.Container>
      {children}
    </S.Container>
  );
};
