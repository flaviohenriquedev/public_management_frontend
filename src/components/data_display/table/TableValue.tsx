import * as S from './style'
import {HTMLAttributes} from "react";

interface TableValueProps {
    value: string | number | boolean | JSX.Element | undefined | null
    alignment?: "left" | "center" | "right"
}

export function TableValue({value, alignment = "left"}: TableValueProps) {
    return (
        <S.Value alignment={alignment}>
            {value}
        </S.Value>
    )
}