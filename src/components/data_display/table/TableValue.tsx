import * as S from './style'
import {HTMLAttributes} from "react";
import {ValueContent} from "./style";

interface TableValueProps {
    value: string | number | boolean | JSX.Element | undefined | null
    alignment?: "left" | "center" | "right"
}

export function TableValue({value, alignment = "left"}: TableValueProps) {
    return (
        <S.Value>
            <S.ValueContent alignment={alignment}>
                {value}
            </S.ValueContent>
        </S.Value>
    )
}