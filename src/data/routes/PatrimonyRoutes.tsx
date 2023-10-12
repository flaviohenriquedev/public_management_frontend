import { MenuItem } from "@/types/Global";
import { BsHouses, BsPerson } from "react-icons/bs";
import {MdOutlineWarehouse} from 'react-icons/md';

const iconSize: number | string = "1.2rem";

export const PatrimonyRoutes: MenuItem[] = [
    {
        icon: <BsHouses size={iconSize} />,
        description: "Entidades",
        pageName: "Entidades",
        submenu: [
            {
                description: "01 - Departamento",
                pageName: "Departamento",
                href: "manager/patrimony/register/department",
            },
            {
                description: "02 - Instituição",
                pageName: "Instituição",
                href: "manager/patrimony/register/institution",
            },
            {
                description: "03 - Local do Bem",
                pageName: "Local do Bem",
                href: "manager/patrimony/register/patrimony_location",
            },
        ],

    },
    {
        icon: <BsPerson size={iconSize} />,
        description: "Fornecedores",
        pageName: "Fornecedores",
        submenu: [
            {
                description: "01 - Pessoa",
                pageName: "Cadastro de Pessoa",
            },
        ],

    },
    {
        icon: <MdOutlineWarehouse size={iconSize} />,
        description: "Bens Patrimoniais",
        pageName: "Bens Patrimoniais",
        submenu: [
            {
                description: "01 - Patrimônio",
                pageName: "Patrimônio",
            },
            {
                description: "02 - Movimentação",
                pageName: "Movimentação",
            },
            {
                description: "03 - Baixa",
                pageName: "Baixa",
            },
            {
                description: "04 - Alteração",
                pageName: "Alteração",
            },
            {
                description: "05 - Alteração em Massa",
                pageName: "Alteração em Massa",
            },
        ],

    },
];
