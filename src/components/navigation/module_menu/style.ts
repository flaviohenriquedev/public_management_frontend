import tw from "tailwind-styled-components";

type Props = {
    active: boolean
}

export const Container = tw.div<Props>`

    ${(p) => p.active ? "bg-secondary hover:text-secondary-content " : "bg-secondary/40 " }     

    group
    
    flex
    items-center
    w-60
    h-24
    rounded-lg
    text-base-100
    shadow-lg
    relative
`;

export const Icon = tw.div`

    flex
    justify-start
    items-center
    h-full
    w-full
    rounded-tl-lg
    rounded-bl-lg
    py-3
    px-4
`;

export const DescriptionContainer = tw.div`
    flex
    items-center
    justify-end
    h-full
    w-full
`;

export const Description = tw.div`

    flex
    items-center
    h-full
    w-48
    pl-4
    shadow-xl
    rounded-lg
    backdrop-brightness-110
    backdrop-blur-sm
    bg-secondary/30
    absolute
    text-xl
    active:-scale-1
`;
