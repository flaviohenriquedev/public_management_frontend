import * as S from './style'
import {ReactNode} from "react";

interface ModalResultsProps {
    children: ReactNode
}
export function ModalResults({children} : ModalResultsProps) {
    return (
        <S.Result>
            {children}
        </S.Result>
    )
}