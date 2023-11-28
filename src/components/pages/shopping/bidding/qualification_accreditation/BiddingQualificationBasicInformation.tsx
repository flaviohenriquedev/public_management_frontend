"use client";

import { PageSection } from "@/components/layout/page_section";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import { Input } from "@/components/data_input/input";
import { Button } from "@/components/actions/button";
import { LineContent } from "@/components/layout/line_content";
import { Fieldset } from "@/components/layout/fieldset/Fieldset";
import { Select } from "@/components/data_input/select";
import { Checkbox } from "@/components/data_input/checkbox";
import { Table } from "@/components/data_display/table";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { PageLayout } from "@/components/layout/page";

export function BiddingQualificationBasicInformation() {
  return (
    <PageLayout.Content>
      <form>
        <PageSection title="Informações do Participante">
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

          <Fieldset legend="Dados Pessoais">
            <LineContent>
              <LabelContainer title="Código:" width="w-36">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Documento:" width="w-52">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Nome:">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Contato:" width="w-36">
                <Input disabled />
              </LabelContainer>
            </LineContent>
          </Fieldset>

          <Fieldset legend="Endereço">
            <LineContent>
              <LabelContainer title="Rua:">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Quadra:" width="w-20">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Lote:" width="w-20">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Número:" width="w-20">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Bairro:">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Cidade:">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="Estado:" width="w-20">
                <Input disabled />
              </LabelContainer>
            </LineContent>
            <LineContent>
              <LabelContainer title="Complemento:">
                <Input disabled />
              </LabelContainer>
              <LabelContainer title="CEP:" width="w-44">
                <Input disabled />
              </LabelContainer>
            </LineContent>
          </Fieldset>
          <Fieldset legend="Certidões">
            <LineContent>
              <LabelContainer title="Órgão Resp. Registro:" width="w-52">
                <Select options={[{ value: "TESTE", description: "TESTE" }]} />
              </LabelContainer>
              <LabelContainer title="Numero Registro:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Dt. Registro:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Nº Registro CVM:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Dt. Registro CVM:">
                <Input />
              </LabelContainer>
            </LineContent>
            <LineContent>
              <LabelContainer title="Inscrição Municipal:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Inscrição Estadual:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Estado:">
                <Select options={[{ value: "TESTE", description: "TESTE" }]} />
              </LabelContainer>
            </LineContent>
            <LineContent>
              <LabelContainer title="Nº Registro INSS:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Dt. Registro INSS:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Dt. Vcto Registro INSS:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Nº Registro FGTS:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Dt. Registro FGTS:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Dt. Vcto Registro FGTS:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
            </LineContent>
            <LineContent>
              <LabelContainer title="Nº Registro CNDT:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Dt. Registro CNDT:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Dt. Vcto Registro CNDT:" width="w-auto">
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Nº Inscrição CREA:">
                <Input />
              </LabelContainer>
              <LabelContainer title="Estado Inscrição CREA:">
                <Select options={[{ value: "TESTE", description: "TESTE" }]} />
              </LabelContainer>
              <LabelContainer title="Porte Empresa:">
                <Select options={[{ value: "TESTE", description: "TESTE" }]} />
              </LabelContainer>
            </LineContent>
            <LineContent>
              <LabelContainer title="Dt. Habilitação:" width="w-auto" notNull>
                <Input type="date" />
              </LabelContainer>
              <LabelContainer title="Status Habilitação:" notNull>
                <Select options={[{ value: "TESTE", description: "TESTE" }]} />
              </LabelContainer>
            </LineContent>
            <LineContent className="justify-between" alignmentItem="center">
              <Checkbox title="Capital Aberto:" />
              <Checkbox title="ME ou EPP:" />
              <Checkbox title="Presença Registrada:" />
              <Checkbox title="Renúncia:" />
              <Checkbox title="Credenciamento:" />
              <Button.Root classbutton="primary">
                <Button.Title title="Salvar" />
              </Button.Root>
            </LineContent>
          </Fieldset>
        </PageSection>

        <PageSection title="Habilitações Credenciadas">
          <LineContent>
            <Table.Container>
              <Table.Header>
                <Table.Row>
                  <Table.Title value="Nº" />
                  <Table.Title value="Participante" />
                  <Table.Title value="CPF/CNPJ" />
                  <Table.Title value="Pres.Registrada" />
                  <Table.Title value="Renúncia" />
                  <Table.Title value="Credenciamento" />
                  <Table.Title value="Status" />
                  <Table.Title value="Editar" />
                  <Table.Title value="Excluir" />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Value value="1" />
                  <Table.Value value="FERNANDO COMEL & CIA LTDA - ME" />
                  <Table.Value value="09.540.813/0001-49" />
                  <Table.Value value="SIM" />
                  <Table.Value value="SIM" />
                  <Table.Value value="SIM" />
                  <Table.Value value="Habilitado" />
                  <Table.Value value={<EditIcon />} />
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
