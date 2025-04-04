"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";

type ModuleMenuDescriptionProps = {
    description: string;
    href: string;
    active?: boolean;
};

export const ModuleMenuDescription = ({
    description,
    href,
    active = false
}: ModuleMenuDescriptionProps) => {
    const router = useRouter();

    function handleClick(){
        active && router.push(href)
    }

    return (
        <S.DescriptionContainer id="module_card_description_container">
            <S.Description
                id="module_card_description"
                onClick={handleClick}
                onMouseEnter={() => router.prefetch(href)}
            >
                {description}
            </S.Description>
        </S.DescriptionContainer>
    );
};
