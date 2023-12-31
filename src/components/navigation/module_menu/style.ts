import tw from "tailwind-styled-components";

export const Container = tw.div`
    group
    
    flex
    items-center
    bg-secondary
    w-60
    h-24
    rounded-lg
    text-base-100
    shadow-lg
    relative

    hover:text-secondary-content
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
    
    transition-all
    duration-300
    group-hover:-translate-x-2
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
    hover:cursor-pointer
    active:-scale-1
`;
