import {ReactNode} from "react";
import * as S from './style'

interface TableContainertProps {
    children: ReactNode
}
export function TableContainert({children} : TableContainertProps) {
    return (
        <S.Table>
            {children}
        </S.Table>
    )
}