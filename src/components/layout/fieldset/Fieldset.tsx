import * as S from './style'
import React from "react";

interface FieldsetPros {
    legend?: string
    children: React.ReactNode
}

export function Fieldset({legend, children}: FieldsetPros) {
    return (
        <S.Container>
            {legend && <S.Legend>{legend}</S.Legend>}
            {children}
        </S.Container>
    )
}