"use client";

import { PageSection } from "@/components/layout/page_section";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import { Input } from "@/components/data_input/input";
import { Button } from "@/components/actions/button";
import { LineContent } from "@/components/layout/line_content";
import Select from "@/components/data_input/select/Select";
import { TextArea } from "@/components/data_input/textarea/TextArea";
import { Checkbox } from "@/components/data_input/checkbox";
import { Table } from "@/components/data_display/table";
import DownloadIcon from "@/components/icons/DownloadIcon";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

export function BiddingAssessment() {
  return (
    <form>
      <PageSection title="Responsável pelo Parecer">
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
        </LineContent>
      </PageSection>
      <PageSection title="Informações do Parecer">
        <LineContent>
          <LabelContainer title="Tipo de Parecer:" notNull>
            <Select options={[{ value: "TESTE", description: "TESTE" }]} />
          </LabelContainer>
          <LabelContainer title="Dt. Parecer:" notNull width="w-auto">
            <Input type="date" />
          </LabelContainer>
          <LabelContainer title="Registro Estadual:" notNull>
            <Input type="text" />
          </LabelContainer>
          <LabelContainer title="Estado" notNull>
            <Select options={[{ value: "TESTE", description: "TESTE" }]} />
          </LabelContainer>
        </LineContent>
        <LineContent>
          <LabelContainer title="Descrição">
            <TextArea />
          </LabelContainer>
        </LineContent>
        <LineContent>
          <LabelContainer title="Importar Documento do Parecer(formatos suportados: jpg, gif, png, bmp, doc, docx, pdf)(Tamanho Máximo 10MB):">
            <Checkbox title="Parecer da segunda fase:" />
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
          </LabelContainer>
          <Button.Root classbutton="primary">
            <Button.Title title="Salvar" />
          </Button.Root>
          <Button.Root classbutton="primary">
            <Button.Title title="Novo" />
          </Button.Root>
        </LineContent>
      </PageSection>
      <PageSection title="Pareceres">
        <LineContent>
          <Table.Container>
            <Table.Header>
              <Table.Row>
                <Table.Title value="Nº" />
                <Table.Title value="Responsável" />
                <Table.Title value="Tipo de Parecer" />
                <Table.Title value="Data Parecer" />
                <Table.Title value="Fase" />
                <Table.Title value="Download" />
                <Table.Title value="Selecionar" />
                <Table.Title value="Excluir" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Value value={1} alignment="center" />
                <Table.Value value="CELIA MARIA DE LIMA2" alignment="center" />
                <Table.Value value="Jurídico" alignment="center" />
                <Table.Value value="08/12/2022" alignment="center" />
                <Table.Value value="Primeira" alignment="center" />
                <Table.Value value={<DownloadIcon />} alignment="center" />
                <Table.Value value={<EditIcon />} alignment="center" />
                <Table.Value value={<DeleteIcon />} alignment="center" />
              </Table.Row>
            </Table.Body>
          </Table.Container>
        </LineContent>
      </PageSection>
    </form>
  );
}
