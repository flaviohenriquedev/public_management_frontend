import {ReactNode} from "react";

export type TRoute = {
    icon?: JSX.Element;
    description: string;
    pageName: string;
    breadcrumbLink?: string;
    href?: string;
    submenu?: TRoute[];
};

export type Theme = { value: string, description: string }

export type TButton = 'primary' | 'success' | 'warning' | 'danger'

export type TOption = { value: string | number, description: string }

export type TPageTab = {
    label: string;
    content: ReactNode;
};
