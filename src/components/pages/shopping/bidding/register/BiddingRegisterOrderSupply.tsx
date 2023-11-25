import {PageSection} from "@/components/layout/page_section";
import {LineContent} from "@/components/layout/line_content";
import {Table} from "@/components/data_display/table";
import {FiDownload} from "react-icons/fi";
import DownloadIcon from "@/components/icons/DownloadIcon";

export function BiddingRegisterOrderSupply() {
    return (
        <form>
            <PageSection title="Ordens de Fornecimento">
                <LineContent>
                    <Table.Container>
                        <Table.Header>
                            <Table.Row>
                                <Table.Title value="Nº"/>
                                <Table.Title value="Código"/>
                                <Table.Title value="Dt. Aprov."/>
                                <Table.Title value="Status"/>
                                <Table.Title value="Fornecedor"/>
                                <Table.Title value="Departamento"/>
                                <Table.Title value="Vl. Item"/>
                                <Table.Title value="Desconto"/>
                                <Table.Title value="Acréscimo"/>
                                <Table.Title value="Baixar PDF"/>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Value value={1} alignment="center"/>
                                <Table.Value value="24014" alignment="center"/>
                                <Table.Value value="20/01/2023" alignment="center"/>
                                <Table.Value value="APROVADO" alignment="center"/>
                                <Table.Value value="FERNANDO COMEL & CIA LTDA - ME" alignment="center"/>
                                <Table.Value value="525 - SECRETARIA MUNICIPAL DE ESPORTES" alignment="center"/>
                                <Table.Value value="R$ 35.530,00" alignment="center"/>
                                <Table.Value value="R$ 0,00" alignment="center"/>
                                <Table.Value value="R$ 0,00" alignment="center"/>
                                <Table.Value value={<DownloadIcon/>} alignment="center"/>
                            </Table.Row>
                        </Table.Body>
                    </Table.Container>
                </LineContent>
            </PageSection>
        </form>
    )
}