import * as S from './style'
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = ({placeholder, type, name, className, disabled, value, onChange}: InputProps) => {
    return (
        <S.Input placeholder={placeholder}
                 type={type}
                 name={name}
                 className={className}
                 disabled={disabled}
                 value={value}
                 onChange={onChange}/>
    );
}
