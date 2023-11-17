import {TPageTab} from "@/types/Global";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";
import {BiddingFilesPage} from "@/components/pages/shopping/bidding/files/BiddingFilesPage";

export const biddingTabs: TPageTab[] = [
    {
        label: "Abertura",
        children: <BiddingInitialPage/>,
        submenu: [
            {
                label: "Dados Básicos",
                href: "#basic_data",
            },
            {
                label: "Natureza Objeto",
                href: "#basic_data",
            },
            {
                label: "Contratos",
                href: "#basic_data",
            },
            {
                label: "O.F.",
                href: "#basic_data",
            }
        ]
    },
    {
        label: "M. Preços",
        submenu: [
            {
                label: "Proposta"
            },
            {
                label: "Vencedores"
            },
            {
                label: "Importação/Exportação",
                submenu: [
                    {
                        label: "GPregões"
                    },
                    {
                        label: "LicitaNet"
                    },
                    {
                        label: "PCP"
                    },
                    {
                        label: "Saldo Por Planilha"
                    },
                    {
                        label: "Comprasnet"
                    },
                ]
            },
            {
                label: "Registro de Preço"
            },
            {
                label: "Ata de Registro de Preço"
            },
        ]
    },
];
