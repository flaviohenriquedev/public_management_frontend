import * as S from './style'
import {ReactNode} from "react";

export function Container({ children } : { children: ReactNode }) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}