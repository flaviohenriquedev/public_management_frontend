"use client";

import { createContext, useState } from "react";

type SidemenuContextProps = {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
};

export const SideMenuContext = createContext<SidemenuContextProps>({
    expanded: true,
    setExpanded: () => {},
});

export const SideMenuContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <SideMenuContext.Provider
            value={{
                expanded,
                setExpanded,
            }}
        >
            {children}
        </SideMenuContext.Provider>
    );
};
