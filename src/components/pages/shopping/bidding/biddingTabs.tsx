import {TPageTab} from "@/types/Global";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";

export const biddingTabs: TPageTab[] = [
    {
        label: "Cadastro",
        submenu: [
            {
                label: "Dados Básicos",
                href: "/manager/shopping/bidding/register/basic_data",
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
        href: "/manager/shopping/bidding/files"
    },
    {
        label: "Parecer",
        href: "/manager/shopping/bidding/assessment"
    },
    {
        label: "Responsável",
        href: "/manager/shopping/bidding/responsible"
    },
    {
        label: "Solicitação",
        submenu: [
            {
                label: "Solicitações",
                href: "/manager/shopping/bidding/request_purchase"
            },
            {
                label: "Produtos Apurados",
                href: "/manager/shopping/bidding/calculation"
            }
        ]
    },
    {
        label: "Dotação",
        href: "/manager/shopping/bidding/budget_spending"
    },
    {
        label: "Hab. Cred.",
        submenu: [
            {
                label: "Informações Básicas",
                href: "/manager/shopping/bidding/qualification_accreditation/basic_information"
            },
            {
                label: "Informações Societários",
                href: "/manager/shopping/bidding/qualification_accreditation/corporate_information"
            },
            {
                label: "Arquivos",
                href: "/manager/shopping/bidding/qualification_accreditation/file"
            },
            {
                label: "Documentos",
                href: "/manager/shopping/bidding/qualification_accreditation/documents"
            },
            {
                label: "Credenciado",
                href: "/manager/shopping/bidding/qualification_accreditation/accredited"
            }
        ]
    },
    {
        label: "M. Preços",
        submenu: [
            {
                label: "Proposta",
                href: "/manager/shopping/bidding/map_price/proposal"
            },
            {
                label: "Vencedores",
                href: "/manager/shopping/bidding/map_price/winner"
            },
            {
                label: "Importação/Exportação",
                submenu: [
                    {
                        label: "GPregões",
                        href: "/manager/shopping/bidding/map_price/import_export/gauction"
                    },
                    {
                        label: "LicitaNet",
                        href: "/manager/shopping/bidding/map_price/import_export/licitanet"
                    },
                    {
                        label: "BLL / BNC",
                        href: "/manager/shopping/bidding/map_price/import_export/bll_bnc"
                    },
                    {
                        label: "PCP",
                        href: "/manager/shopping/bidding/map_price/import_export/pcp"
                    },
                    {
                        label: "Saldo Por Planilha",
                        href: "/manager/shopping/bidding/map_price/import_export/balance_sheet"
                    },
                    {
                        label: "Comprasnet",
                        href: "/manager/shopping/bidding/map_price/import_export/comprasnet"
                    },
                ]
            },
            {
                label: "Registro de Preço",
                href: "/manager/shopping/bidding/map_price/price_record"
            },
            {
                label: "Ata de Registro de Preço",
                href: "/manager/shopping/bidding/map_price/minute_price_record"
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
    {
        label: "Colare",
        submenu: [
            {
                label: "Colare Fase 1",
                href: "#"
            },
            {
                label: "Colare Fase 2",
                href: "#"
            },
            {
                label: "Colare Sit. Procedimento",
                href: "#"
            }
        ]
    },
    {
        label: "PNCP",
        href: "#"
    },
];
