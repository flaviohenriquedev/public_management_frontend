import { TOption } from "@/types/Global";
import * as S from "./style";
import { opt } from "ts-interface-checker";
import {
  AllHTMLAttributes,
  ChangeEvent,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";

interface SelectProps extends AllHTMLAttributes<HTMLSelectElement> {
  defaultOption?: string;
  options: TOption[];
  width?: string;
  value?: any;
}

const Select = ({
  defaultOption = "SELECIONE",
  options,
  width,
  value,
  onChange,
  disabled,
  className,
}: SelectProps) => {
  function renderOptions() {
    return options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.description}
        </option>
      );
    });
  }

  return (
    <S.Select
      onChange={onChange}
      defaultValue={defaultOption}
      value={value}
      disabled={disabled}
      className={className}
    >
      <option disabled value="1">
        {defaultOption}
      </option>
      {renderOptions()}
    </S.Select>
  );
};

export default Select;
