import * as S from './style'

interface ButtonTitleProps {
    title: string
}

const ButtonTitle = ({ title }: ButtonTitleProps) => {
    return (
        <S.Title>
            {title}
        </S.Title>
    );
}

export default ButtonTitle;
