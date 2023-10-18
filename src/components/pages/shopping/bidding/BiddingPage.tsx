import {PageLayout} from "@/components/layout/page";
import {Button} from "@/components/actions/button";
import {PageTab} from "@/components/layout/page_tab/PageTab";
import {biddingTabs} from './biddingTabs'

export function BiddingPage() {
    return (
        <PageLayout.Container>
            <PageLayout.Content>
                <PageTab tabs={biddingTabs} />
            </PageLayout.Content>
            <PageLayout.Footer>
                <Button.Root classbutton="primary">
                    <Button.Title title="Consultar" />
                </Button.Root>
            </PageLayout.Footer>
        </PageLayout.Container>
    )
}