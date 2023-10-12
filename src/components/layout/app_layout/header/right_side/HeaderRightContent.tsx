import * as S from "./style";

type RightProps = {
    children: React.ReactNode;
};
export const HeaderRightContent = ({ children }: RightProps) => {
    return <S.RightContainer id="header_right_content">{children}</S.RightContainer>;
};
