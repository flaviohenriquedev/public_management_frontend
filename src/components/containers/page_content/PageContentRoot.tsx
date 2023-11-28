import * as S from "./style";

type PageContentRootProps = {
  children: React.ReactNode;
};

export const PageContentRoot = ({ children }: PageContentRootProps) => {
  return <S.Container>{children}</S.Container>;
};
