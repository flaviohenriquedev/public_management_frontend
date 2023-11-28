import {PageSection} from "@/components/layout/page_section";
import {Table} from "@/components/data_display/table";
import {LineContent} from "@/components/layout/line_content";
import {Input} from "@/components/data_input/input";

export function BiddingRequestPurchaseCalculation() {
    return (
        <form>
        <PageSection title="Produtos / Serviços Apurados">
        <LineContent>
            <Table.Container>
                <Table.Header>
                    <Table.Row>
                        <Table.Title value="Nº" />
                        <Table.Title value="Cod. Prod./Serv." />
                        <Table.Title value="Prod. / Serv." />
                        <Table.Title value="Un. Med." />
                        <Table.Title value="Referência" />
                        <Table.Title value="Quantidade" />
                        <Table.Title value="Valor Unitário" />
                        <Table.Title value="Valor" />
                        <Table.Title value="Nº Lote" />
                        <Table.Title value="Nº Item" />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Value value="1" alignment="center"/>
                        <Table.Value value="245573" alignment="center"/>
                        <Table.Value value="MICROTRATOR" alignment="center"/>
                        <Table.Value value="UND" alignment="center"/>
                        <Table.Value value="Cotação própria realizada no mercado" alignment="center"/>
                        <Table.Value value="1,0000000" alignment="center"/>
                        <Table.Value value="R$ 29.985,66" alignment="center"/>
                        <Table.Value value="R$ 29.985,66" alignment="center"/>
                        <Table.Value value={<Input className="h-6 w-10"/>} alignment="center"/>
                        <Table.Value value={<Input className="h-6 w-10"/>} alignment="center"/>
                    </Table.Row>
                </Table.Body>
            </Table.Container>
        </LineContent>
        </PageSection>
        </form>
    )
}