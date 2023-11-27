import { Button } from "@/components/actions/button";
import { Table } from "@/components/data_display/table";
import { Input } from "@/components/data_input/input";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";
import { LineContent } from "@/components/layout/line_content";
import { PageSection } from "@/components/layout/page_section";
import { Tab } from "@/components/layout/page_tab/style";

export function BiddingBudgetSpending() {
  return (
    <form>
      <PageSection title="Ficha">
        <LineContent>
          <LabelContainer title="Ficha" notNull width="w-52">
            <Input />
          </LabelContainer>

          <LabelContainer title="Elemento" notNull>
            <Input />
          </LabelContainer>
        </LineContent>

        <LineContent>
          <LabelContainer title="SubElemento" notNull>
            <Input />
          </LabelContainer>

          <Button.Root classbutton="primary">
            <Button.Title title="Localizar" />
          </Button.Root>
        </LineContent>

        <LineContent>
          <LabelContainer title="Programa:" notNull>
            <Input />
          </LabelContainer>

          <LabelContainer title="Função:" notNull>
            <Input />
          </LabelContainer>

          <LabelContainer title="SubFunção:" notNull>
            <Input />
          </LabelContainer>
        </LineContent>

        <LineContent>
          <LabelContainer title="Fonte:">
            <Input />
          </LabelContainer>

          <LabelContainer title="Ação:" notNull>
            <Input />
          </LabelContainer>
        </LineContent>

        <LineContent>
          <LabelContainer title="Valor:" notNull>
            <Input />
          </LabelContainer>

          <LabelContainer title="Valor a ser utilizado:" notNull>
            <Input />
          </LabelContainer>

          <LabelContainer title="Origem do Recurso:" notNull>
            <Input />
          </LabelContainer>
        </LineContent>

        <LineContent alignment="right">
          <Button.Root classbutton="primary">
            <Button.Title title="Salvar" />
          </Button.Root>

          <Button.Root classbutton="primary">
            <Button.Title title="Novo" />
          </Button.Root>

          <Button.Root classbutton="primary">
            <Button.Title title="Consultar Ficha" />
          </Button.Root>
        </LineContent>
      </PageSection>

      <PageSection title="Fichas">
        <LineContent>
          <Table.Container>
            <Table.Header>
              <Table.Row>
                <Table.Title value="Nº" />
                <Table.Title value="Ficha" />
                <Table.Title value="Elemento" />
                <Table.Title value="Sub Função" />
                <Table.Title value="Ação" />
                <Table.Title value="Programa" />
                <Table.Title value="Fonte" />
                <Table.Title value="Valor a ser utilizado" />
                <Table.Title value="Retirar" />
                <Table.Title value="Selecionar" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Value value="1" alignment="center" />
                <Table.Value value="0271.000" alignment="center" />
                <Table.Value
                  value="44905100 - Obras e Instalacoes"
                  alignment="center"
                />
                <Table.Value
                  value="452 - Servicos Urbanos"
                  alignment="center"
                />
                <Table.Value
                  value="Const.Ref.e Adequação de Cemiterios Publicos"
                  alignment="center"
                />
                <Table.Value value="Servicos Funerarios" alignment="center" />
                <Table.Value
                  value="Recursos Não Vinculados de Impostos"
                  alignment="center"
                />
                <Table.Value value="622.355,77" alignment="center" />
                <Table.Value value={<DeleteIcon />} alignment="center" />
                <Table.Value value={<EditIcon />} alignment="center" />
              </Table.Row>
            </Table.Body>
          </Table.Container>
        </LineContent>
      </PageSection>
    </form>
  );
}
