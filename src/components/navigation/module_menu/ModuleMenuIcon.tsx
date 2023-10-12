import * as S from "./style";

type ModuleMenuIconProps = {
    icon: JSX.Element;
};

export const ModuleMenuIcon = ({ icon }: ModuleMenuIconProps) => {
    return <S.Icon id="module_card_item">{icon}</S.Icon>;
};
