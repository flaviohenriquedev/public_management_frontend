import {TRoute} from "@/types/Global";
import {BiPurchaseTag} from "react-icons/bi";
import {MdOutlineRealEstateAgent} from "react-icons/md";
import {FaPeopleGroup} from "react-icons/fa6";
const sizeIcon = 70;
export const ModuleRoutes: TRoute[] = [
    {
        icon: <BiPurchaseTag size={sizeIcon}/>,
        description: "Compras",
        pageName: "Compras",
        breadcrumbLink: "shopping",
        href: "/manager/shopping",
        active: true
    },
    {
        icon: <MdOutlineRealEstateAgent size={sizeIcon}/>,
        description: "Patrimônio",
        pageName: "Patrimônio",
        breadcrumbLink: "patrimony",
        href: "/manager/patrimony",
        active: false
    },
    {
        icon: <FaPeopleGroup size={sizeIcon}/>,
        description: "Gestão de RH",
        pageName: "Gestão de RH",
        href: "/manager/patrimony",
        active: false
    },
];