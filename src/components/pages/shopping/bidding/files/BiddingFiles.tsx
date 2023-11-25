'use client'

import {PageSection} from "@/components/layout/page_section";
import Select from "@/components/data_input/select/Select";
import {LineContent} from "@/components/layout/line_content";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Input} from "@/components/data_input/input";
import {TextArea} from "@/components/data_input/textarea/TextArea";
import {Checkbox} from "@/components/data_input/checkbox";
import {Button} from "@/components/actions/button";
import {Table} from "@/components/data_display/table";
import {MdOutlineCancel} from "react-icons/md";
import DownloadIcon from "@/components/icons/DownloadIcon";
import EditIcon from "@/components/icons/EditIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

export function BiddingFiles() {
    return (
        <form>
            <PageSection title="Cadastro de Arquivos">
                <LineContent>
                    <LabelContainer title="Tipo de Arquivo:" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Data:" notNull width="w-auto">
                        <Input type="date"/>
                    </LabelContainer>

                    <LabelContainer title="Tipo Veículo de Publicação:">
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Observação:" notNull>
                        <TextArea/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição Publicação:" notNull>
                        <TextArea/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <Checkbox title="Não enviar para o Colare"/>
                    <Checkbox title="Não publicar no Portal da Transparência - Anexos Edital"/>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Tamanho Máximo 5MB: Apenas arquivos no formato de PDF, vão ser considerados nos envios paras o COLARE!" notNull>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help" id="file_input" type="file"/>
                    </LabelContainer>

                    <Button.Root classbutton="primary">
                        <Button.Title title="Publicação"/>
                    </Button.Root>
                    <Button.Root classbutton="primary">
                        <Button.Title title="Salvar"/>
                    </Button.Root>
                    <Button.Root classbutton="success">
                        <Button.Title title="Novo"/>
                    </Button.Root>
                </LineContent>
            </PageSection>
            <PageSection title="Arquivos Cadastrados">
                <LineContent>
                    <Table.Container>
                        <Table.Header>
                            <Table.Row>
                                <Table.Title value="Nº"/>
                                <Table.Title value="Data Publicação"/>
                                <Table.Title value="Tipo de Arquivo"/>
                                <Table.Title value="Observação"/>
                                <Table.Title value="Recibo"/>
                                <Table.Title value="Download"/>
                                <Table.Title value="Editar"/>
                                <Table.Title value="Excluir"/>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Value value={1} alignment="center"/>
                                <Table.Value value="20/12/2022" alignment="center"/>
                                <Table.Value value="PUBLICAÇÃO" alignment="center"/>
                                <Table.Value value="COMPROVANTE DE PUBLICAÇÃO - JGC" alignment="center"/>
                                <Table.Value value="37e9f75c-f4c0-40b4-bfe4-795c8e4d6e80" alignment="center"/>
                                <Table.Value value={<DownloadIcon/>} alignment="center"/>
                                <Table.Value value={<EditIcon/>} alignment="center"/>
                                <Table.Value value={<DeleteIcon/>} alignment="center"/>
                            </Table.Row>
                        </Table.Body>
                    </Table.Container>
                </LineContent>
            </PageSection>
        </form>
    )
}