'use client'

import {PageSection} from "@/components/layout/page_section";
import {Button} from "@/components/actions/button";
import {PageFooter} from "@/components/layout/page_footer";
import {openModal} from "@/functions/functions";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Input} from "@/components/data_input/input";
import {LineContent} from "@/components/layout/line_content";
import Select from "@/components/data_input/select/Select";
import {Checkbox} from "@/components/data_input/checkbox";
import {Table} from "@/components/data_display/table";
import { MdOutlineCancel } from "react-icons/md";
import {TextArea} from "@/components/data_input/textarea/TextArea";


export function BiddingBasicData() {
    return (
        <form>
            <PageSection id="basic_data" title="Dados Básicos">
                <LineContent>
                    <LabelContainer title="Código:" width="w-28">
                        <Input disabled type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Número:" width="w-28">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Edital:">
                        <Input type="date"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Publicação:" width="w-auto">
                        <Input type="date"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Abertura:" width="w-auto">
                        <Input type="date"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Realização:" width="w-auto">
                        <Input type="date"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Vencimento:" width="w-auto">
                        <Input type="date"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Status Licitação">
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                    <LabelContainer title="N° Processo Administrativo:">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Ano Processo Administrativo">
                        <Input type="number"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <Checkbox title="Desempate ME/EPP:"/>
                    <Checkbox title="Destinado ME/EPP:"/>
                    <Checkbox title="Subcontratação ME/EPP:"/>
                    <Checkbox title="Limite % para ME/EPP:"/>
                    <Checkbox title="Serviço Continuo:"/>
                    <Checkbox title="Processo por Lote:"/>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Nº Mod. Exercício:">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Valor Estimado:" notNull>
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Processo:" notNull>
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição" notNull>
                        <textarea className="textarea textarea-bordered textarea-md w-full"></textarea>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Assunto da Aquisição:" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                    <LabelContainer title="Und.Prazo:" notNull width="w-40">
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                    <LabelContainer title="Prazo Entrega:" width="w-40">
                        <Input type="number"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Modalidade Licitação:" notNull>
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Tipo Licitação:" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                    <LabelContainer title="Número Convidados:">
                        <Input type="number"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Objeto:" notNull>
                        <TextArea />
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição Natureza Objeto:">
                        <TextArea />
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Observações:">
                        <TextArea />
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Cláusula Prorrogação:">
                        <TextArea />
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Forma de Pagamento:" notNull>
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Critério de Aceitabilidade:">
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Prêmio Remuneração Concurso:">
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="CPF:">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Gestor ARP:">
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="CPF:">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Gestor ARP (opcional):">
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Usuário Criação">
                        <Input type="text" disabled/>
                    </LabelContainer>
                </LineContent>
            </PageSection>
            <PageSection title="Instituições Licitantes">
                <LineContent>
                    <LabelContainer title="Instituições" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                    <LabelContainer title="Unidade Orçamentária" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <Checkbox title="Instituição Gestora:"/>
                </LineContent>

                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title value="Nº"/>
                            <Table.Title value="Instituição"/>
                            <Table.Title value="Unidade"/>
                            <Table.Title value="Excluir"/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Value value={1} alignment="center"/>
                            <Table.Value value="PREFEITURA MUNICIPAL DE INHUMAS" alignment="center"/>
                            <Table.Value value="SECRETARIA DE ESPORTES E TURISMO" alignment="center"/>
                            <Table.Value value={<MdOutlineCancel />} alignment="center"/>
                        </Table.Row>
                    </Table.Body>
                </Table.Container>

                <LineContent>
                    <Checkbox title="Portal:"/>
                </LineContent>

            </PageSection>
            <PageFooter>
                <Button.Root classbutton="success">
                    <Button.Title title="PDF"/>
                </Button.Root>
                <Button.Root classbutton="success">
                    <Button.Title title="XLS"/>
                </Button.Root>
                <Button.Root classbutton="success">
                    <Button.Title title="CAPA"/>
                </Button.Root>
                <Button.Root classbutton="primary" onClick={() => openModal("department_search_modal")}>
                    <Button.Title title="Consultar"/>
                </Button.Root>
                <Button.Root classbutton="success">
                    <Button.Title title="Novo Cadastro"/>
                </Button.Root>
                <Button.Root classbutton="warning">
                    <Button.Title title="Editar"/>
                </Button.Root>
                <Button.Root classbutton="danger">
                    <Button.Title title="Excluir"/>
                </Button.Root>
                <Button.Root classbutton="primary">
                    <Button.Title title="Salvar"/>
                </Button.Root>
            </PageFooter>
        </form>
    )
}