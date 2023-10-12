import * as S from "./style";

type LeftProps = {
    children: React.ReactNode;
};

export const HeaderLeftContent = ({ children }: LeftProps) => {
    return <S.LeftContainer id="header_left_content">{children}</S.LeftContainer>;
};
