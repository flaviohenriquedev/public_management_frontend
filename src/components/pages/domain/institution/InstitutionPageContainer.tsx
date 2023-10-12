import {PageLayout} from "@/components/layout/page";
import {Button} from "@/components/actions/button";

export function InstitutionPageContainer() {
    return (
        <PageLayout.Container>
            <PageLayout.Title title={`Instituição`} />
            <PageLayout.Content>
                <h1>CRUD INSTITUIÇÃO</h1>
            </PageLayout.Content>
            <PageLayout.Footer>
                <Button.Root classbutton="primary">
                    <Button.Title title={`Consultar`} />
                </Button.Root>
            </PageLayout.Footer>
        </PageLayout.Container>
    )
}