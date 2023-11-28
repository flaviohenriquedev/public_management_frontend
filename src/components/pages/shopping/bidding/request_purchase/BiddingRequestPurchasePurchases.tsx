import { PageSection } from "@/components/layout/page_section";
import { LineContent } from "@/components/layout/line_content";
import { Table } from "@/components/data_display/table";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { PageLayout } from "@/components/layout/page";

export function BiddingRequestPurchasePurchases() {
  return (
    <PageLayout.Content>
      <form>
        <PageSection title="Solicitações de Compra">
          <LineContent>
            <Table.Container>
              <Table.Header>
                <Table.Row>
                  <Table.Title value="Nº" />
                  <Table.Title value="Código Sol. Compra" />
                  <Table.Title value="Data" />
                  <Table.Title value="Instituição" />
                  <Table.Title value="Departamento" />
                  <Table.Title value="Excluir" />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Value value="1" />
                  <Table.Value value="164186" />
                  <Table.Value value="19/12/2022" />
                  <Table.Value value="PREFEITURA MUNICIPAL DE JATAÍ" />
                  <Table.Value value="SECRETARIA DE ESPORTES E TURISMO" />
                  <Table.Value value={<DeleteIcon />} />
                </Table.Row>
              </Table.Body>
            </Table.Container>
          </LineContent>
        </PageSection>
      </form>
    </PageLayout.Content>
  );
}
