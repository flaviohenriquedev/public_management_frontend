import {TButton} from '@/types/Global';
import * as S from './style'
import {HTMLAttributes, useState} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    classbutton: TButton
    render?: boolean
    heigth?: string
}

const ButtonRoot = ({id, children, classbutton, onClick, className, render = true, heigth}: ButtonProps) => {

    return (
        <>
            {render && (
                <S.Container id={id} classbutton={classbutton} onClick={onClick} className={className} height={heigth}>
                    {children}
                </S.Container>
            )}

        </>
    );
}

export default ButtonRoot;
