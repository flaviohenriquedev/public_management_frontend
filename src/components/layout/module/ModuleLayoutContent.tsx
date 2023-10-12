import * as S from "./style";

interface ModuleLayoutContentProps {
    children: React.ReactNode;
};

export const ModuleLayoutContent = ({ children }: ModuleLayoutContentProps) => {
    return <S.Content>{children}</S.Content>;
};
