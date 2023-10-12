import * as S from "./style";
import {Container} from "./style";

interface ModuleLayoutContainerProps {
    children: React.ReactNode;
};

export const ModuleLayoutContainer = ({ children }: ModuleLayoutContainerProps) => {
    return <S.Container>{children}</S.Container>;
};
