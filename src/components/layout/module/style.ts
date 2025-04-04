import tw from "tailwind-styled-components";

interface SideMenuInterface {
  $expanded: boolean;
  $entered?: boolean;
}

export const Container = tw.div`
    w-full
    z-0
`;

export const Content = tw.div<SideMenuInterface>`
    ${(p) => (p.$expanded ? "ml-[22rem]" : "ml-24")}
    w-full
    px-2
    py-1
    rounded-tl-md
    bg-header_bg_color
    shadow-lg
    duration-200
`;

export const Header = tw.header`
    flex
    justify-between
    items-center
    w-full
    h-8
    px-4
    gap-2
    bg-secondary
    overflow-hidden
`;

export const SidemenuAndContent = tw.div`
    flex
    gap-2
    w-full
`;

export const Sidemenu = tw.aside<SideMenuInterface>`

    ${(p) =>
      p.$expanded
        ? "w-[22rem]"
        : !p.$expanded && p.$entered
        ? "w-[22rem]"
        : "w-24"}
    fixed
    flex
    flex-col
    rounded-tr-md
    backdrop-blur-md
    bg-base-100/50
    shadow-md
    shadow-base-200
    duration-200
    pb-14
    z-20
    h-full
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
    h-full
    flex
    flex-col
    gap-2
    p-3
    rounded-md
    pb-[20rem]
`;

export const SideMenuHeader = tw.div<SideMenuInterface>`

    ${(p) => (p.$expanded ? "justify-between" : "justify-center")}

    flex
    relative
    pl-8
    py-1
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
