import {PageLayout} from "@/components/layout/page";
import {Button} from "@/components/actions/button";

export function BiddingPage() {
    return (
        <PageLayout.Container>
            <PageLayout.Title title="Licitação" />
            <PageLayout.Content>
                FORMULARIO
            </PageLayout.Content>
            <PageLayout.Footer>
                <Button.Root classbutton="primary">
                    <Button.Title title="Consultar" />
                </Button.Root>
            </PageLayout.Footer>
        </PageLayout.Container>
    )
}