import tw from "tailwind-styled-components";

interface SideMenuInterface {
    $expanded: boolean;
    $entered?: boolean;
}


export const Container = tw.div`
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

export const Content = tw.div<SideMenuInterface>`
    ${(p) => (p.$expanded ? "pl-[30rem]" : "pl-24")}
    
    fixed

    w-full
    h-full
    min-h-full
    duration-200
`;

export const Header = tw.header`
    flex
    items-center
    w-full
    h-9
    px-4
    gap-2
    fixed
    bg-secondary
    text-secondary-content
    text-lg
    breadcrumbs
    z-10
`;

export const Sidemenu = tw.aside<SideMenuInterface>`

    ${(p) => (p.$expanded ? "w-[30rem]" : !p.$expanded && p.$entered ? "w-[30rem]" : "w-24")}
    
    fixed
     
    scrollbar
    scrollbar-thumb-gray-900
    scrollbar-track-gray-100
    flex
    flex-col
    flex-nowrap
    rounded-tr-md
    h-full
    bg-base-100
    shadow-md
    shadow-base-200
    duration-200
    pb-14
    z-20
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
    h-full
    p-3
    rounded-md
    pb-[20rem]
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
