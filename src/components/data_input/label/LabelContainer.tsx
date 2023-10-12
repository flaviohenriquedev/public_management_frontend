import * as S from './style'
import {HTMLAttributes} from "react";

interface LabelContainerProps extends HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode
    title: string
    width?: string
}

const LabelContainer = ({ children, title, width, className }: LabelContainerProps) => {
    return (
        <S.Container width={width}>
            <S.Label>
                <S.LabelSpan className={className}>{title}</S.LabelSpan>
            </S.Label>
            {children}
        </S.Container>
    );
}

export default LabelContainer;
