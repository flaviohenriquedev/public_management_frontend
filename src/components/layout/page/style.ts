import tw from "tailwind-styled-components";

export const Container = tw.section`
    flex
    flex-col
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
    rounded-tl-md
    p-2
    bg-base-100
    shadow-lg
    overflow-y-scroll
    scrollbar-thin
    scrollbar-thumb-secondary
    pb-[20rem]
`;
