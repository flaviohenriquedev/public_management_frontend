import {PageSection} from "@/components/layout/page_section";
import {LineContent} from "@/components/layout/line_content";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import Select from "@/components/data_input/select/Select";
import {TextArea} from "@/components/data_input/textarea/TextArea";
import {Tooltip} from "@/components/data_display/tooltip";
import {Button} from "@/components/actions/button";
import {AiOutlineClear} from "react-icons/ai";
import {Table} from "@/components/data_display/table";
import {MdOutlineCancel} from "react-icons/md";
import {IoSaveOutline} from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";


export function BiddingNatureObject() {
    return (
        <form>
            <PageSection title="Natureza do Objeto">
                <LineContent>
                    <LabelContainer title="Natureza do objeto detalhada:" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição:">
                        <TextArea/>
                    </LabelContainer>
                </LineContent>
                <LineContent alignment="right">
                    <Tooltip message="Salvar">
                        <Button.Root classbutton="primary">
                            <Button.Icon icon={<IoSaveOutline />}/>
                        </Button.Root>
                    </Tooltip>

                    <Tooltip message="Novo">
                        <Button.Root classbutton="warning">
                            <Button.Icon icon={<MdAutorenew />}/>
                        </Button.Root>
                    </Tooltip>
                </LineContent>
            </PageSection>

            <PageSection title="Lista de Natureza do Objeto Detalhada">
                <Table.Container>
                    <Table.Header>
                        <Table.Row>
                            <Table.Title value="Nº"/>
                            <Table.Title value="Natureza do objeto Detalhada"/>
                            <Table.Title value="Descrição"/>
                            <Table.Title value="Remover"/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Value value='1' alignment="center"/>
                            <Table.Value value="999999 - Outra natureza não listada (Descrever)" alignment="center"/>
                            <Table.Value value="aquisição de microtrator cortador de grama e de coletor de grama"
                                         alignment="center"/>
                            <Table.Value value={<MdOutlineCancel/>} alignment="center"/>
                        </Table.Row>
                    </Table.Body>
                </Table.Container>
            </PageSection>
        </form>
    )
}