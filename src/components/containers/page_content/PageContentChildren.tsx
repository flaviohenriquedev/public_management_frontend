import * as S from "./style";

type PageContentChildrenProps = {
    children: React.ReactNode;
};

export const PageContentChildren = ({ children }: PageContentChildrenProps) => {
    return <S.Children>{children}</S.Children>;
};
