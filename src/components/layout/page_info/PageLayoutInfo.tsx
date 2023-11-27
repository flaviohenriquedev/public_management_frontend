"use client";

import * as S from "./style";
import { useState } from "react";
import Information from "@/components/layout/page_info/Information";

export function PageLayoutInfo() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <S.InfoHeader onClick={() => setOpened(!opened)}>
        <span>INFO</span>
      </S.InfoHeader>
      <S.InfoContent opened={opened}>
        <S.InfoLine>
          <Information title="Colare Fase 1" />
          <Information title="Código" description="202020" />
          <Information title="Status" description="Homologado" />
        </S.InfoLine>
        <S.InfoLine>
          <Information title="Colare Fase 2" />
          <Information title="Código" description="202020" />
          <Information title="Status" description="Não Homologado" />
        </S.InfoLine>
        <S.InfoLine>
          <Information title="Código" description="10" />
          <Information title="Número" description="1010" />
          <Information title="Data Realização" description="10/10/2023" />
        </S.InfoLine>
        <S.InfoLine>
          <Information
            title="Usuário de Criação"
            description="FLÁVIO HENRIQUE"
          />
          <Information title="Data de Criação" description="27/11/2023" />
        </S.InfoLine>
        <S.InfoLine>
          <Information
            title="Usuário de Alteração"
            description="FLÁVIO HENRIQUE"
          />
          <Information title="Data de Alteração" description="27/11/2023" />
        </S.InfoLine>
      </S.InfoContent>
    </>
  );
}
