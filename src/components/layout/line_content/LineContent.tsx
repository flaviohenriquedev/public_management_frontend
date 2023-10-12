import * as S from './style'
import {ReactNode} from "react";

interface LineContentProps {
    children: ReactNode
}
export function LineContent({children} : LineContentProps) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}