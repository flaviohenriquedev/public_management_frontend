import * as S from "./style";

interface ModuleLayoutContainerProps {
    children: React.ReactNode;
};

export const ModuleLayoutContainer = ({ children }: ModuleLayoutContainerProps) => {
    return <S.Container>{children}</S.Container>;
};
