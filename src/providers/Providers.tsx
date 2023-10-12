"use client";

import {ThemeProvider, useTheme} from "next-themes";
import { SideMenuContextProvider } from "@/context/SideMenuContext";
import {useEffect} from "react";

type ProvidersProps = {
    children: React.ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider defaultTheme="corporate">
            <SideMenuContextProvider>
                {children}
            </SideMenuContextProvider>
        </ThemeProvider>
    );
};
