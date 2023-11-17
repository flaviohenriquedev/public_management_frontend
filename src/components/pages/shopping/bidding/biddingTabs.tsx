import {TPageTab} from "@/types/Global";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";
import {BiddingFilesPage} from "@/components/pages/shopping/bidding/files/BiddingFilesPage";

export const biddingTabs: TPageTab[] = [
    {
        label: "Abertura",
        content: <BiddingInitialPage/>,
        breadcrumbs: [
            {
                href: "#basic_data",
                title: "Dados Básicos"
            },
            {
                href: "#object_nature",
                title: "Natureza Objeto"
            },
        ]
    },
    {
        label: "Arquivos",
        content: <BiddingFilesPage/>,
        breadcrumbs: [
            {
                href: "#basic_data",
                title: "TESTE"
            },
            {
                href: "#object_nature",
                title: "TESTE2"
            },
        ]
    },
    {
        label: "Parecer",
        content: <h1>PARECER</h1>,
    },
    {
        label: "Responsável",
        content: <h1>RESPONSÁVEL</h1>,
    },
    {
        label: "Solicitação",
        content: <h1>SOLICITAÇÃO</h1>,
    },
    {
        label: "Dotação",
        content: <h1>DOTAÇÃO</h1>,
    },
    {
        label: "Hab. Cred.",
        content: <h1>Hab. Cred.</h1>,
    },
];
