import {TPageTab} from "@/types/Global";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";
import {BiddingFilesPage} from "@/components/pages/shopping/bidding/files/BiddingFilesPage";

export const biddingTabs: TPageTab[] = [
    {
        label: "Abertura",
        content: <BiddingInitialPage />
    },
    {
        label: "Arquivos",
        content: <BiddingFilesPage />
    },
];