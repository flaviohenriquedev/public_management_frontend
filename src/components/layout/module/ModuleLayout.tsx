import * as S from "./style";

import {MenuItem} from "@/types/Global";
import {ModuleLayoutContent} from "./ModuleLayoutContent";
import {ModuleLayoutHeader} from "./ModuleLayoutHeader";
import {ModuleLayoutContainer} from "./ModuleLayoutContainer";
import {ModuleLayoutSidemenu} from "./ModuleLayoutSidemenu";
import {ReactNode} from "react";

type PageLayoutProps = {
    routes: MenuItem[];
    pageTitle: string;
    children: ReactNode;
    homeRoute?: string
};

export const ModuleLayout = ({
                                 children,
                                 pageTitle,
                                 routes,
                                 homeRoute
                             }: PageLayoutProps) => {
    return (
        <ModuleLayoutContainer>
            <ModuleLayoutHeader title={pageTitle} homeRoute={homeRoute}/>
            <S.SidemenuAndContent id="side_menu_content">
                <ModuleLayoutSidemenu routes={routes}/>
                <ModuleLayoutContent>{children}</ModuleLayoutContent>
            </S.SidemenuAndContent>
        </ModuleLayoutContainer>
    );
};
