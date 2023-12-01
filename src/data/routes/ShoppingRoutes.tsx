import {TRoute} from "@/types/Global";
import {AiOutlineNotification} from "react-icons/ai";
import {BiPurchaseTag} from "react-icons/bi";
import {FaRegHandshake, FaSortAmountUp} from "react-icons/fa";
import {LuFileSpreadsheet, LuNewspaper} from "react-icons/lu";
import {MdOutlineRequestPage, MdOutlineWarehouse} from "react-icons/md";

import {BsHouses} from "react-icons/bs";

const iconSize: number | string = "1.2rem";

export const ShoppingRoutes: TRoute[] = [
    {
        icon: <LuNewspaper size={iconSize} />,
        description: "Administração",
        pageName: "Administração",
        href: "",
        submenu: [
            {
                description: "01 - Colare",
                pageName: "Colare",
                href: "",
            },
        ],
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Colare Compras",
        pageName: "Colare Compras",
        href: "/manager/shopping/construct",
        submenu: [
            {
                description: "01 - Integração",
                pageName: "Integração",
            },
            {
                description: "02 - Cadastro Manual",
                pageName: "Cadastro Manual",
            },
        ],
    },
    {
        icon: <AiOutlineNotification size={iconSize} />,
        description: "Envio de Notificação",
        pageName: "Envio de Notificação",
        submenu: [
            {
                description: "01 - Envio de Notificação entre Usuários",
                pageName: "Envio de Notificação entre Usuários",
            },
        ],
    },
    {
        icon: <FaSortAmountUp size={iconSize} />,
        description: "Controle de Saldo",
        pageName: "Controle de Saldo",
        submenu: [
            {
                description: "01 - Consolidação Saldo Almoxarifado",
                pageName: "Consolidação Saldo Almoxarifado",
            },
            {
                description: "O2 - Consolidação Saldo Licitação",
                pageName: "Consolidação Saldo Licitação",
            },
            {
                description: "03 - Inclusão de Saldo",
                pageName: "Inclusão de Saldo",
            },
        ],
    },
    {
        icon: <LuFileSpreadsheet size={iconSize}/>,
        description: "Licitação",
        pageName: "Licitação",
        submenu: [
            {
                description: "1 - Adesão Registro de Preço",
                pageName: "Adesão Registro de Preço",
            },
            {
                description: "2 - Dispensa Licitação",
                pageName: "Dispensa Licitação",
                href: "#",
            },
            {
                description: "3 - Licitação",
                pageName: "Licitação",
                breadcrumbLink: "bidding",
                href: "/manager/shopping/bidding/register/basic_data",
            },
            {
                description: "04 - Decreto Regulamentador",
                pageName: "Decreto Regulamentador",
            },
            {
                description: "05 - Consolidação Saldo Licitação",
                pageName: "Consolidação Saldo Licitação",
            },
        ],
    },
    {
        icon: <FaRegHandshake size={iconSize} />,
        description: "Contrato",
        pageName: "Contrato",
        submenu: [
            {
                description: "1 - Contrato",
                pageName: "Contrato",
                href: "/manager/shopping/contract/register"
            },
            {
                description: "2 - Aditivo",
                pageName: "Aditivo",
            },
            {
                description: "3 - Rescisão",
                pageName: "Rescisão",
            },
        ],
    },
    {
        icon: <MdOutlineRequestPage size={iconSize} />,
        description: "Requisição",
        pageName: "Requisição",
        submenu: [
            {
                description: "01 - Requisição",
                pageName: "Requisição",
                submenu: [
                    {
                        description: "1.01 - Requisição Produto / Serviço",
                        pageName: "Requisição Produto / Serviço",
                    },
                    {
                        description: "1.02 - Análise Requisição",
                        pageName: "Análise Requisição",
                    },
                ],
            },
            {
                description: "03 - Solic. Compra / Fornecimento",
                pageName: "Solic. Copra / Fornecimento.",
                submenu: [
                    {
                        description: "3.01 - Análise de itens por Requisição",
                        pageName: "Análise de itens por Requisição",
                    },
                    {
                        description: "3.02 - Solicitação de Compra",
                        pageName: "Solicitação de Compra",
                    },
                    {
                        description: "3.03 - Análise de Compra",
                        pageName: "Análise de Compra",
                    },
                    {
                        description: "3.04 - Correção Solicitação de Compra",
                        pageName: "Correção Solicitação de Compra",
                    },
                ],
            },
            {
                description: "04 - Cancelar O.F.",
                pageName: "Cancelar O.F.",
            },
            {
                description: "05 - Consultar O.F.",
                pageName: "Consultar O.F.",
            },
        ],
    },
    // {
    //     icon: <MdOutlineWarehouse size={iconSize} />,
    //     description: "Almoxarifado",
    //     pageName: "Almoxarifado",
    //     submenu: [
    //         {
    //             description: "01 - Consolidação do Almoxarifado",
    //             pageName: "Consolidação do Almoxarifado",
    //         },
    //         {
    //             description: "02 - Entrada",
    //             pageName: "Entrada",
    //             submenu: [
    //                 {
    //                     description:
    //                         "2.01 - Entrada de Produto / Serviço (OS / OF)",
    //                     pageName: "Entrada de Produto  / Serviço (OS / OF)",
    //                 },
    //                 {
    //                     description:
    //                         "2.02 - Entrada de Produto / Serviço (OS / OF) Parcial",
    //                     pageName:
    //                         "Entrada de Produto / Serviço (OS / OF) Parcial",
    //                 },
    //                 {
    //                     description: "2.03 - Entrada de Produtos / Serviços",
    //                     pageName: "Entrada de Produtos / Serviços",
    //                 },
    //             ],
    //         },
    //         {
    //             description: "03 - Saída",
    //             pageName: "Saída",
    //             submenu: [
    //                 {
    //                     description: "3.01 - Expurgo de Produto / Serviço",
    //                     pageName: "Expurgo de Produto / Serviço",
    //                 },
    //                 {
    //                     description: "3.02 - Saída de Produto / Serviço",
    //                     pageName: "Saída de Produto / Serviço",
    //                 },
    //             ],
    //         },
    //         {
    //             description: "04 - Transferência",
    //             pageName: "Transferência",
    //             submenu: [
    //                 {
    //                     description: "4.01 - Análise de Transferência",
    //                     pageName: "Análise de Transferência",
    //                 },
    //                 {
    //                     description: "4.02 - Transferência",
    //                     pageName: "Transferência",
    //                 },
    //             ],
    //         },
    //         {
    //             description: "05 - Requisição de Almoxarifado",
    //             pageName: "Requisição de Almoxarifado",
    //             submenu: [
    //                 {
    //                     description: "5.01 - Requisição Almoxarifado",
    //                     pageName: "Requisição Almoxarifado",
    //                 },
    //                 {
    //                     description:
    //                         "5.02 - Análise de Requisição Almoxarifado",
    //                     pageName: "Análise de Requisição Almoxarifado",
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     icon: <BsHouses size={iconSize} />,
    //     description: "Entidades",
    //     pageName: "Entidades",
    //     submenu: [
    //         {
    //             description: "01 - Departamento",
    //             pageName: "Departamento",
    //             breadcrumbLink: "department",
    //             href: "/manager/shopping/register/department",
    //         },
    //     ],
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Relatório",
    //     pageName: "Relatório",
    //     href: "/manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Configurações",
    //     pageName: "Configurações",
    //     href: "/manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Entidades",
    //     pageName: "Entidades",
    //     href: "/manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Fornecedor",
    //     pageName: "Fornecedor",
    //     href: "/manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Documentos",
    //     pageName: "Documentos",
    //     href: "/manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Usuário",
    //     pageName: "Usuário",
    //     href: "/manager/shopping/order_supply",
    // },
];

export const BiddingTabs: TRoute[] = [
    {
        description: "Cadastro",
        pageName: "Cadastro",
        submenu: [
            {
                description: "Dados Básicos",
                pageName: "Dados Básicos",
                breadcrumbLink: "basic_data",
                href: "/manager/shopping/bidding/register/basic_data",
            },
            {
                description: "Natureza Objeto",
                pageName: "Natureza Objeto",
                breadcrumbLink: "nature_object",
                href: "/manager/shopping/bidding/register/nature_object",
            },
            {
                description: "Contratos ",
                pageName: "Contratos",
                breadcrumbLink: "contract",
                href: "/manager/shopping/bidding/register/contract",
            },
            {
                description: "Ordem Fornecimento",
                pageName: "Ordem Fornecimento",
                breadcrumbLink: "order_supply",
                href: "/manager/shopping/bidding/register/order_supply",
            },
        ],
    },
    {
        description: "Arquivos",
        pageName: "Arquivos",
        breadcrumbLink: "files",
        href: "/manager/shopping/bidding/files"
    },
    {
        description: "Parecer",
        pageName: "Parecer",
        breadcrumbLink: "assessment",
        href: "/manager/shopping/bidding/assessment"
    },
    {
        description: "Responsável",
        pageName: "Responsável",
        breadcrumbLink: "responsible",
        href: "/manager/shopping/bidding/responsible"
    },
    {
        description: "Solicitação",
        pageName: "Solicitação",
        submenu: [
            {
                description: "Solicitações",
                pageName: "Solicitações",
                breadcrumbLink: "requests",
                href: "/manager/shopping/bidding/request_purchase/requests"
            },
            {
                description: "Produtos Apurados",
                pageName: "Produtos Apurados",
                breadcrumbLink: "calculation",
                href: "/manager/shopping/bidding/request_purchase/calculation"
            }
        ]
    },
    {
        description: "Dotação",
        pageName: "Dotação",
        breadcrumbLink: "budget_spending",
        href: "/manager/shopping/bidding/budget_spending"
    },
    {
        description: "Hab. Cred.",
        pageName: "Hab. Cred.",
        submenu: [
            {
                description: "Informações Básicas",
                pageName: "Informações Básicas",
                breadcrumbLink: "basic_information",
                href: "/manager/shopping/bidding/qualification_accreditation/basic_information"
            },
            {
                description: "Informações Societários",
                pageName: "Informações Societários",
                breadcrumbLink: "corporate_information",
                href: "/manager/shopping/bidding/qualification_accreditation/corporate_information"
            },
            {
                description: "Arquivos",
                pageName: "Arquivos",
                breadcrumbLink: "file",
                href: "/manager/shopping/bidding/qualification_accreditation/file"
            },
            {
                description: "Documentos",
                pageName: "Documentos",
                breadcrumbLink: "documents",
                href: "/manager/shopping/bidding/qualification_accreditation/documents"
            },
            {
                description: "Credenciado",
                pageName: "Credenciado",
                breadcrumbLink: "accredited",
                href: "/manager/shopping/bidding/qualification_accreditation/accredited"
            }
        ]
    },
    {
        description: "M. Preços",
        pageName: "M. Preços",
        breadcrumbLink: "map_price",
        submenu: [
            {
                description: "Proposta",
                pageName: "Proposta",
                breadcrumbLink: "proposal",
                href: "/manager/shopping/bidding/map_price/proposal"
            },
            {
                description: "Vencedores",
                pageName: "Vencedores",
                breadcrumbLink: "winner",
                href: "/manager/shopping/bidding/map_price/winner"
            },
            {
                description: "Importação/Exportação",
                pageName: "Importação/Exportação",
                breadcrumbLink: "import_export",
                submenu: [
                    {
                        description: "GPregões",
                        pageName: "GPregões",
                        breadcrumbLink: "gauction",
                        href: "/manager/shopping/bidding/map_price/import_export/gauction"
                    },
                    {
                        description: "LicitaNet",
                        pageName: "LicitaNet",
                        breadcrumbLink: "licitanet",
                        href: "/manager/shopping/bidding/map_price/import_export/licitanet"
                    },
                    {
                        description: "BLL / BNC",
                        pageName: "BLL / BNC",
                        breadcrumbLink: "bll_bnc",
                        href: "/manager/shopping/bidding/map_price/import_export/bll_bnc"
                    },
                    {
                        description: "PCP",
                        pageName: "PCP",
                        breadcrumbLink: "pcp",
                        href: "/manager/shopping/bidding/map_price/import_export/pcp"
                    },
                    {
                        description: "Saldo Por Planilha",
                        pageName: "Saldo Por Planilha",
                        breadcrumbLink: "balance_sheet",
                        href: "/manager/shopping/bidding/map_price/import_export/balance_sheet"
                    },
                    {
                        description: "Comprasnet",
                        pageName: "Comprasnet",
                        breadcrumbLink: "comprasnet",
                        href: "/manager/shopping/bidding/map_price/import_export/comprasnet"
                    },
                ]
            },
            {
                description: "Registro de Preço",
                pageName: "Registro de Preço",
                breadcrumbLink: "price_record",
                href: "/manager/shopping/bidding/map_price/price_record"
            },
            {
                description: "Ata de Registro de Preço",
                pageName: "Ata de Registro de Preço",
                breadcrumbLink: "minute_price_record",
                href: "/manager/shopping/bidding/map_price/minute_price_record"
            },
        ]
    },
    {
        description: "Julgamento",
        pageName: "Julgamento",
        submenu: [
            {
                description: "Julgamento",
                pageName: "Julgamento",
                href: "#"
            },
            {
                description: "Atas",
                pageName: "Atas",
                href: "#"
            }
        ]
    },
    {
        description: "Pendência",
        pageName: "Pendência",
        href: "#"
    },
    {
        description: "Colare",
        pageName: "Colare",
        submenu: [
            {
                description: "Colare Fase 1",
                pageName: "Colare Fase 1",
                href: "#"
            },
            {
                description: "Colare Fase 2",
                pageName: "Colare Fase 2",
                href: "#"
            },
            {
                description: "Colare Sit. Procedimento",
                pageName: "Colare Sit. Procedimento",
                href: "#"
            }
        ]
    },
    {
        description: "PNCP",
        pageName: "PNCP",
        href: "#"
    },
];


// export const ContractTabs: TPageTab[] = [
//     {
//         label: "Cadastro",
//         href: "/manager/shopping/contract/register"
//     },
//     {
//         label: "Termos",
//     },
//     {
//         label: "Arquivos",
//     },
//     {
//         label: "Saldo",
//     },
//     {
//         label: "Publicação",
//     },
//     {
//         label: "Empenho",
//     },
//     {
//         label: "Obra",
//     },
//     {
//         label: "Colare",
//     },
//     {
//         label: "O.F.",
//     },
//     {
//         label: "PNCP",
//     },
// ];