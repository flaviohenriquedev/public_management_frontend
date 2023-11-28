import {TPageTab, TRoute} from "@/types/Global";
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
        icon: <LuFileSpreadsheet size={iconSize} />,
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
    {
        icon: <MdOutlineWarehouse size={iconSize} />,
        description: "Almoxarifado",
        pageName: "Almoxarifado",
        submenu: [
            {
                description: "01 - Consolidação do Almoxarifado",
                pageName: "Consolidação do Almoxarifado",
            },
            {
                description: "02 - Entrada",
                pageName: "Entrada",
                submenu: [
                    {
                        description:
                            "2.01 - Entrada de Produto / Serviço (OS / OF)",
                        pageName: "Entrada de Produto  / Serviço (OS / OF)",
                    },
                    {
                        description:
                            "2.02 - Entrada de Produto / Serviço (OS / OF) Parcial",
                        pageName:
                            "Entrada de Produto / Serviço (OS / OF) Parcial",
                    },
                    {
                        description: "2.03 - Entrada de Produtos / Serviços",
                        pageName: "Entrada de Produtos / Serviços",
                    },
                ],
            },
            {
                description: "03 - Saída",
                pageName: "Saída",
                submenu: [
                    {
                        description: "3.01 - Expurgo de Produto / Serviço",
                        pageName: "Expurgo de Produto / Serviço",
                    },
                    {
                        description: "3.02 - Saída de Produto / Serviço",
                        pageName: "Saída de Produto / Serviço",
                    },
                ],
            },
            {
                description: "04 - Transferência",
                pageName: "Transferência",
                submenu: [
                    {
                        description: "4.01 - Análise de Transferência",
                        pageName: "Análise de Transferência",
                    },
                    {
                        description: "4.02 - Transferência",
                        pageName: "Transferência",
                    },
                ],
            },
            {
                description: "05 - Requisição de Almoxarifado",
                pageName: "Requisição de Almoxarifado",
                submenu: [
                    {
                        description: "5.01 - Requisição Almoxarifado",
                        pageName: "Requisição Almoxarifado",
                    },
                    {
                        description:
                            "5.02 - Análise de Requisição Almoxarifado",
                        pageName: "Análise de Requisição Almoxarifado",
                    },
                ],
            },
        ],
    },
    {
        icon: <BsHouses size={iconSize} />,
        description: "Entidades",
        pageName: "Entidades",
        submenu: [
            {
                description: "01 - Departamento",
                pageName: "Departamento",
                breadcrumbLink: "department",
                href: "/manager/shopping/register/department",
            },
        ],
    },
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

export const BiddingTabs: TPageTab[] = [
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
                label: "Ordem de Fornecimento",
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
                href: "/manager/shopping/bidding/request_purchase/requests"
            },
            {
                label: "Produtos Apurados",
                href: "/manager/shopping/bidding/request_purchase/calculation"
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


export const ContractTabs: TPageTab[] = [
    {
        label: "Cadastro",
        href: "/manager/shopping/contract/register"
    },
    {
        label: "Termos",
    },
    {
        label: "Arquivos",
    },
    {
        label: "Saldo",
    },
    {
        label: "Publicação",
    },
    {
        label: "Empenho",
    },
    {
        label: "Obra",
    },
    {
        label: "Colare",
    },
    {
        label: "O.F.",
    },
    {
        label: "PNCP",
    },
];