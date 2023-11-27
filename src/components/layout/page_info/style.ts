import tw from "tailwind-styled-components";

interface Props {
  opened?: boolean;
}

export const InfoHeader = tw.div`
    flex
    justify-center
    items-center
    w-full
    bg-secondary
    text-[8pt]
    text-secondary-content
    font-bold
    rounded-sm
    mx-2
    
    hover:cursor-pointer
    hover:bg-secondary-focus
`;

export const InfoLine = tw.div`
    flex
    text-[9pt]
    gap-4
`;

export const InfoContent = tw.div<Props>`
    ${(p) => (p.opened ? "visible gap-1 p-2" : "invisible h-0")}
    
    flex
    flex-col
    justify-center
    w-auto
`;
