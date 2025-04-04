import * as S from "./style";

import { useRouter } from "next/navigation";

type ModuleMenuCardProps = {
    children: React.ReactNode;
    active?: boolean;
};

export const ModuleMenuCard = ({ children, active = false }: ModuleMenuCardProps) => {
    return <S.Container active={active} id="module_card">{children}</S.Container>;
};
