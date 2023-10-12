import {ReactNode} from "react";
import * as S from './style'

interface TableBodyProps {
    children: ReactNode
}

export function TableBody({children}: TableBodyProps) {
    return (
        <S.Body>
            {children}
        </S.Body>
    )
}