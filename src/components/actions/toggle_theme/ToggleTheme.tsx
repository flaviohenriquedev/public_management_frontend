'use client'

import {useTheme} from "next-themes";
import {Themes} from "@/data/theme/Theme";
import * as S from './style'
import {useState} from "react";
import {BiSolidDownArrow} from 'react-icons/bi'

const ToggleTheme = () => {
    const {setTheme, theme} = useTheme();
    const [openList, setOpenList] = useState<boolean>(false)

    return (
        <S.Container>
            <div className="flex items-center" onClick={() => setOpenList(!openList)}>
                <S.Span>Temas</S.Span>
                <BiSolidDownArrow/>
            </div>

            <S.List openList={openList} className="w-56">
                {Themes && Themes.map((tm, i) => (
                    <li key={i} className="flex items-center gap-3 hover:cursor-pointer bg-base-100 p-2 rounded-lg"
                        data-theme={tm.value} onClick={() => setTheme(tm.value)}>
                        <div className="flex gap-1">
                            <div className="bg-primary w-2 h-2 rounded-full"/>
                            <div className="bg-secondary w-2 h-2 rounded-lg" data-theme={tm.value}/>
                            <div className="bg-accent w-2 h-2 rounded-lg" data-theme={tm.value}/>
                        </div>

                        <div className="flex justify-between items-center grow">
                            {tm.description}
                            {theme && tm.value === theme && (
                                <div className="w-3 h-3 bg-green-500 rounded-full"/>
                            )}
                        </div>
                    </li>
                ))}
            </S.List>
        </S.Container>
    )
}

export default ToggleTheme;
