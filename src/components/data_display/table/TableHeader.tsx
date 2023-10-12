import {ReactNode} from "react";
import * as S from './style'

interface TableHeadProps {
    children: ReactNode
}

export function TableHeader({children}: TableHeadProps) {
    return (
        <S.Header>
            {children}
        </S.Header>
    )
}