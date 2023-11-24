'use client'

import * as S from './style'
import {HTMLAttributes, ReactNode, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    children?: ReactNode;
}

export function PageSection({title, id, children, className}: PageSectionProps) {
    const [showChildren, setShowChildren] = useState<boolean>(true)
    return (
        <S.Section id={id} className={className}>
            {title && (
                <S.Title onClick={() => setShowChildren(!showChildren)}>
                    {<div>{showChildren ? <IoIosArrowDown/> : <IoIosArrowUp/>}</div>}
                    {title}
                </S.Title>
            )}
            <S.Children showChildren={showChildren}>
                {children}
            </S.Children>
        </S.Section>
    )
}