"use client";

import { Button } from "@/components/actions/button";
import { Table } from "@/components/data_display/table";
import { Input } from "@/components/data_input/input";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import Select from "@/components/data_input/select/Select";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { LineContent } from "@/components/layout/line_content";
import { PageSection } from "@/components/layout/page_section";

export function BiddingResponsible() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <PageSection title="Adicionar Responsáveis">
        <LineContent>
          <LabelContainer title="CPF, CNPJ ou CCP:" width="w-52">
            <Input />
          </LabelContainer>
          <Button.Root classbutton="primary">
            <Button.Title title="Carregar" />
          </Button.Root>
          <Button.Root classbutton="primary">
            <Button.Title title="Consultar" />
          </Button.Root>
          <Button.Root classbutton="primary">
            <Button.Title title="Novo" />
          </Button.Root>
          <LabelContainer title="Tipo Responsabilidade" notNull>
            <Select options={[{ value: "TESTE", description: "TESTE" }]} />
          </LabelContainer>
        </LineContent>
        <LineContent alignment="right">
          <Button.Root classbutton="primary">
            <Button.Title title="Adicionar" />
          </Button.Root>
        </LineContent>
      </PageSection>
      <PageSection title="Responsáveis Adicionados">
        <LineContent>
          <Table.Container>
            <Table.Header>
              <Table.Row>
                <Table.Title value="Nº" />
                <Table.Title value="Responsável" />
                <Table.Title value="CPF" />
                <Table.Title value="Tipo Responsabilidade" />
                <Table.Title value="Excluir" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Value value={1} alignment="center" />
                <Table.Value
                  value="HUMBERTO DE FREITAS MACHADO"
                  alignment="center"
                />
                <Table.Value value="341.665.801-91" alignment="center" />
                <Table.Value
                  value="Fase 1 - Autorização para abertura do procedimento licitatório"
                  alignment="center"
                />
                <Table.Value value={<DeleteIcon />} alignment="center" />
              </Table.Row>
            </Table.Body>
          </Table.Container>
        </LineContent>
      </PageSection>
      <PageSection title="Comissão Licitação">
        <LineContent>
          <Table.Container>
            <Table.Header>
              <Table.Row>
                <Table.Title value="Nº" />
                <Table.Title value="Membro" />
                <Table.Title value="CPF" />
                <Table.Title value="Atribuição" />
                <Table.Title value="Origem Cargo" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Value value={1} alignment="center" />
                <Table.Value
                  value="ISABELA DA SILVA BREDA"
                  alignment="center"
                />
                <Table.Value value="462.921.698-71" alignment="center" />
                <Table.Value value="Pregoeiro" alignment="center" />
                <Table.Value value="Cargo em Comissão" alignment="center" />
              </Table.Row>
            </Table.Body>
          </Table.Container>
        </LineContent>
        <LineContent alignment="right">
          <Button.Root classbutton="danger">
            <Button.Title title="Excluir" />
          </Button.Root>
        </LineContent>
      </PageSection>
    </form>
  );
}
