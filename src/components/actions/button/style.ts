import { TButton } from "@/types/Global";
import tw from "tailwind-styled-components";

interface ButtonProps {
  classbutton: TButton;
  height?: string;
}

export const Container = tw.button<ButtonProps>`

    ${(p) =>
      p.classbutton === "primary"
        ? "btn-info text-info-content"
        : p.classbutton === "success"
        ? "btn-success text-succes-content"
        : p.classbutton === "warning"
        ? "btn-warning text-warning-content"
        : p.classbutton === "danger"
        ? "btn-error text-error-content"
        : "btn-info text-info-content"}
                
    ${(p) =>
      p.height && p.height.length > 0 ? `${p.height}` : "max-h-[1.6rem]"}

    flex
    justify-center
    items-center
    w-auto
    px-3
    min-w-[6rem]
    min-h-[2rem]
    rounded-md
    btn    
    text-[10pt]

    transition-all
    duration-100
    
    active:scale-95
`;
export const Title = tw.p``;

export const Icon = tw.div``;
