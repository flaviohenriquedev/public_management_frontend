import * as S from "./style";

import { useRouter } from "next/navigation";

type ModuleMenuCardProps = {
    children: React.ReactNode;
};

export const ModuleMenuCard = ({ children }: ModuleMenuCardProps) => {
    return <S.Container id="module_card">{children}</S.Container>;
};
