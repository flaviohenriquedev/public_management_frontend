"use client";

import {ThemeProvider} from "next-themes";
import {SideMenuContextProvider} from "@/context/app/SideMenuContext";
import {UserContextProvider} from "@/context/system/core/UserContext";

type ProvidersProps = {
    children: React.ReactNode;
};
export const Providers = ({children}: ProvidersProps) => {
    return (
        <UserContextProvider>
            <ThemeProvider defaultTheme="corporate">
                <SideMenuContextProvider>
                    {children}
                </SideMenuContextProvider>
            </ThemeProvider>
        </UserContextProvider>
    );
};
