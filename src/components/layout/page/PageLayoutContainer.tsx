import * as S from "./style";
import {Container} from "./style";

interface PageLayoutContainerProps {
    children: React.ReactNode;
};

export const PageLayoutContainer = ({ children }: PageLayoutContainerProps) => {
    return <S.Container id="page_layout_container">{children}</S.Container>;
};
