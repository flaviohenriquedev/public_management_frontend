import tw from "tailwind-styled-components";

export const Container = tw.header`
    flex
    items-center
    justify-between
    pl-4
    pr-4
    bg-base-100
    shadow-md
    text-neutral-content
    z-40
    w-full
    top-0
    min-h-[3rem]
`;

export const ClientContainer = tw.div`
    font-bold
    text-font_header_color
`;

export const AvatarContainer = tw.div`
    avatar
    placeholder
    online
`;

export const AvatarContent = tw.div`
    bg-neutral-focus
    text-neutral-content
    rounded-full
    w-10
`;
