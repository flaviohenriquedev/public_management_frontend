import * as S from "./style";

interface FlyoutProps {
    children: React.ReactNode;
}

export const Flyout = ({ children }: FlyoutProps) => {
    return <S.Flyout className="z-50">{children}</S.Flyout>;
};
