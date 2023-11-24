import * as S from "./style";

type HeaderContainerProps = {
    children: React.ReactNode;
};

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return <S.Container id="header_container">{children}</S.Container>;
};
