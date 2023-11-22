import {PageLayout} from "@/components/layout/page";
import {Button} from "@/components/actions/button";
import {BiddingInitialPage} from "@/components/pages/shopping/bidding/initial/BiddingInitialPage";

export function BiddingPage() {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                <BiddingInitialPage/>
            </PageLayout.Content>
            <PageLayout.Footer>
                <Button.Root classbutton="primary">
                    <Button.Title title="Consultar" />
                </Button.Root>
            </PageLayout.Footer>
        </PageLayout.Container>
    )
}