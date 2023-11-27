'use client'

import * as S from './style'
import {useState} from "react";
import {InfoContent} from "./style";

export function PageLayoutInfo() {
    const [opened, setOpened] = useState<boolean>(false)

    return (
        <>
            <S.InfoHeader onClick={() => setOpened(!opened)}><span>INFO</span></S.InfoHeader>
            <S.InfoContent opened={opened}>
                <div className="flex items-center w-auto gap-2 px-2 mt-2 text-[9pt]">
                    <label>Código: 10</label>
                    <label>Número: 1010</label>
                    <label>Data Realização: 10/10/2023</label>
                </div>
            </S.InfoContent>
        </>
    )
}