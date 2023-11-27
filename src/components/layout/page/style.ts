import tw from "tailwind-styled-components";

interface Props {
    opened?:boolean
}

export const Container = tw.div`
    flex
    flex-col
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
    hover:bg-accent-focus
`

export const InfoLine = tw.div`
    flex
    text-[9pt]
    gap-4
`

export const InfoContent = tw.div<Props>`
    ${p => p.opened ? "visible gap-1 p-2" : "invisible h-0"}
    
    flex
    flex-col
    justify-center
    w-auto
`