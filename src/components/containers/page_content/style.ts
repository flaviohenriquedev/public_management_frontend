import tw from "tailwind-styled-components";

export const Root = tw.div`
    flex
    flex-col
    gap-2    
    h-full
`;

export const Title = tw.div`
    flex
    items-center
    px-2
    rounded-bl-md
    rounded-tl-md
    h-10
    bg-header_bg_color
    shadow-md
    shadow-base-200
`;

export const Children = tw.div`
    h-full
    rounded-tl-md
    p-2
    bg-header_bg_color
    shadow-lg
`;

