import tw from "tailwind-styled-components";

interface Props {
    opened?:boolean
}

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
    bg-base-100
    shadow-md
    shadow-base-200
`;

export const Content = tw.div`
    w-full
    h-auto
    min-h-screen
    max-h-screen
    rounded-tl-md
    p-2
    bg-base-100
    shadow-lg
    overflow-y-scroll
    scrollbar-thin
    scrollbar-thumb-secondary
    pb-[20rem]
`;

export const Info = tw.div<Props>`
    ${p => p.opened ? "visible" : "invisible h-0"}
`