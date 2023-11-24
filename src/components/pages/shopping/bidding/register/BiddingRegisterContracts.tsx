import {PageSection} from "@/components/layout/page_section";
import {Table} from "@/components/data_display/table";
import {MdOutlineCancel} from "react-icons/md";
import { VscGoToFile } from "react-icons/vsc";
import {LineContent} from "@/components/layout/line_content";

export function BiddingRegisterContracts() {
    return (
        <PageSection title="Contratos">
            <LineContent>
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title value="Nº"/>
                            <Table.Title value="Fornecedor"/>
                            <Table.Title value="Documento"/>
                            <Table.Title value="Número"/>
                            <Table.Title value="Vig. Inicial"/>
                            <Table.Title value="Vig. Final"/>
                            <Table.Title value="Ver Contrato"/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Value value={1} alignment="center"/>
                            <Table.Value value="FERNANDO COMEL & CIA LTDA - ME	" alignment="center"/>
                            <Table.Value value="09.540.813/0001-49" alignment="center"/>
                            <Table.Value value="9" alignment="center" />
                            <Table.Value value="09/01/2023" alignment="center"/>
                            <Table.Value value="09/05/2023" alignment="center" />
                            <Table.Value value={<VscGoToFile/>} alignment="center"/>
                        </Table.Row>
                    </Table.Body>
                </Table.Container>
            </LineContent>
        </PageSection>
    )
}