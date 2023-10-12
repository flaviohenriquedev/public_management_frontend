import {ReactNode} from "react";
import * as S from './style'

interface TableFooterProps {
    children: ReactNode
}

export function TableFooter({children}: TableFooterProps) {
    return (
        <S.Footer>
        {children}
        </S.Footer>
    )
}