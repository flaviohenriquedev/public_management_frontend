import tw from "tailwind-styled-components";

interface SideMenuInterface {
    $expanded: boolean;
}


export const Container = tw.div`
    relative
    mt-[4rem]
    w-full
    h-screen
    z-0
`;

export const SidemenuAndContent = tw.div`
    flex
    gap-2
    w-full
    h-auto
    min-h-full
    pt-[3rem]
`;

export const Content = tw.div`
    w-full
    h-auto
    min-h-full
`;

export const Header = tw.header`
    flex
    items-center
    w-full
    h-8
    px-2
    fixed
    bg-secondary
    text-secondary-content
    z-10
`;

export const Sidemenu = tw.aside<SideMenuInterface>`

    ${(p) => (p.$expanded ? "w-[30rem]" : "w-20")}
    
    flex
    flex-col
    flex-nowrap
    rounded-tr-md
    bg-header_bg_color
    shadow-md
    shadow-base-200
    duration-200
    pb-14
`;

export const SideMenuSearch = tw.div`
    flex
    items-center
    h-10
    mb-2
    px-2
    rounded-md
`;

export const SideMenuList = tw.ul`
    flex
    flex-col
    gap-2
    p-3
    rounded-md
`;

export const SideMenuHeader = tw.div<SideMenuInterface>`

    ${(p) => (p.$expanded ? "justify-between" : "justify-center")}

    flex
    relative
    
    p-1
`;

export const SearchMenu = tw.input<SideMenuInterface>`

    ${(p) => (p.$expanded ? "" : "hidden")}

    w-72
    pl-2
    text-[10pt]
    outline-none
    border
    border-solid
    rounded-md
`;

export const ToggleSideMenuButton = tw.button`
    flex
    justify-center
    items-center
    w-6
    h-6
    rounded-full
    bg-secondary
    shadow-md
    text-accent-content
    
    hover:bg-accent-focus
`;
