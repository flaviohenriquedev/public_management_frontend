import * as S from './style'
import {HTMLAttributes, ReactNode} from "react";

interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    children?: ReactNode;
}

export function PageSection({title, id, children}: PageSectionProps) {
    return (
        <S.Section id={id}>
            {title && (
                <S.Title>
                    {title}
                </S.Title>
            )}
            {children}
        </S.Section>
    )
}