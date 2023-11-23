import * as S from "./style";

import {TRoute} from "@/types/Global";
import {ModuleLayoutContent} from "./ModuleLayoutContent";
import {ModuleLayoutHeader} from "./ModuleLayoutHeader";
import {ModuleLayoutContainer} from "./ModuleLayoutContainer";
import {ModuleLayoutSidemenu} from "./ModuleLayoutSidemenu";
import {ReactNode} from "react";
import {ModuleLayoutConfig} from "@/components/layout/module/ModuleLayoutConfig";

type PageLayoutProps = {
    routes: TRoute[];
    pageTitle: string;
    children: ReactNode;
};

export const ModuleLayout = ({
                                 children,
                                 pageTitle,
                                 routes
                             }: PageLayoutProps) => {
    return (
        <ModuleLayoutContainer>
            <ModuleLayoutHeader title={pageTitle}/>
            <S.SidemenuAndContent id="side_menu_content">
                <ModuleLayoutSidemenu routes={routes}/>
                <ModuleLayoutContent>{children}</ModuleLayoutContent>
            </S.SidemenuAndContent>
        </ModuleLayoutContainer>
    );
};
