import tw from "tailwind-styled-components";

interface Props {
  showChildren?: boolean;
}

export const Section = tw.section<Props>`
    flex
    flex-col
    gap-3
    
    rounded-md
`;

export const Title = tw.h1`
    flex
    items-center
    gap-4
    h-auto
    bg-secondary
    text-[10pt]
    text-bold
    text-secondary-content
    py-1
    px-2
    rounded-md
    
    hover:cursor-pointer
    hover:bg-secondary-focus
`;

export const Children = tw.div<Props>`
    ${(p) => (p.showChildren ? "visible mb-[2rem]" : "invisible h-0")}
`;
