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
        content: <BiddingFilesPage/>
    },
];
