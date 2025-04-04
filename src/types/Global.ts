import {ReactNode} from "react";

export type TRoute = {
    icon?: JSX.Element;
    description: string;
    pageName: string;
    breadcrumbLink?: string;
    href?: string;
    submenu?: TRoute[];
    active?: boolean
};

export type GroupTheme = 'dark' | 'light'

export type Theme = { value: string, description: string, group: GroupTheme }

export type TButton = 'primary' | 'success' | 'warning' | 'danger'

export type TOption = { value: string | number, description: string }

export type TPageTab = {
    label: string;
    children?: ReactNode;
    href?: string;
    submenu?: TPageTab[]
};
