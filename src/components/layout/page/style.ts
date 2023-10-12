import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex
    flex-col
    gap-2    
    min-h-full
`;

export const Title = tw.div`
    flex
    items-center
    px-2
    rounded-bl-md
    rounded-tl-md
    min-h-[3rem]
    bg-header_bg_color
    shadow-md
    shadow-base-200
`;

export const Content = tw.div`
    w-full
    h-auto
    min-h-screen
    rounded-tl-md
    p-2
    bg-header_bg_color
    shadow-lg
`;

export const Footer = tw.div`
    flex
    justify-end
    items-center
    w-auto
    h-14
    gap-4
    px-4
    rounded-lg
    bg-base-300

    fixed
    bottom-0
    right-0
`