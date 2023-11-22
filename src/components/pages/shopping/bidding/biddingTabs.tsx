import {TPageTab} from "@/types/Global";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";

export const biddingTabs: TPageTab[] = [
    {
        label: "Cadastro",
        submenu: [
            {
                label: "Dados Básicos",
                href: "/manager/shopping/bidding/register",
            },
            {
                label: "Natureza Objeto",
                href: "/manager/shopping/bidding/register/nature_object",
            },
            {
                label: "Contratos",
                href: "/manager/shopping/bidding/register/contract",
            },
            {
                label: "O.F.",
                href: "/manager/shopping/bidding/register/order_supply",
            }
        ]
    },
    {
        label: "Arquivos",
        href: "#"
    },
    {
        label: "Parecer",
        href: "#"
    },
    {
        label: "Responsável",
        href: "#"
    },
    {
        label: "Solicitação",
        submenu: [
            {
                label: "Solicitações",
                href: "#"
            },
            {
                label: "Produtos Apurados",
                href: "#"
            }
        ]
    },
    {
        label: "Dotação",
        href: "#"
    },
    {
        label: "Hab. Cred.",
        submenu: [
            {
                label: "Informações Básicas",
                href: "#"
            },
            {
                label: "Informações Societários",
                href: "#"
            },
            {
                label: "Arquivos",
                href: "#"
            },
            {
                label: "Documentos",
                href: "#"
            },
            {
                label: "Credenciado",
                href: "#"
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
    {
        label: "Julgamento",
        submenu: [
            {
                label: "Julgamento",
                href: "#"
            },
            {
                label: "Atas",
                href: "#"
            }
        ]
    },
    {
        label: "Pendência",
        href: "#"
    },
    // {
    //     label: "Colare",
    //     submenu: [
    //         {
    //             label: "Colare Fase 1",
    //             href: "#"
    //         },
    //         {
    //             label: "Colare Fase 2",
    //             href: "#"
    //         },
    //         {
    //             label: "Colare Sit. Procedimento",
    //             href: "#"
    //         }
    //     ]
    // },
    // {
    //     label: "PNCP",
    //     href: "#"
    // },
];
