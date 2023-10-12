import * as S from './style'

interface ButtonIconProps {
    icon: JSX.Element
}

const ButtonIcon = ({ icon }: ButtonIconProps) => {
    return (
        <S.Icon>
            {icon}
        </S.Icon>
    );
}

export default ButtonIcon;
