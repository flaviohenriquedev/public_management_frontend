'use client'

import {PageSection} from "@/components/layout/page_section";
import {Button} from "@/components/actions/button";
import {PageFooter} from "@/components/layout/page_footer";
import {openModal} from "@/functions/functions";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Input} from "@/components/data_input/input";
import {LineContent} from "@/components/layout/line_content";
import {ChangeEvent} from "react";
import Select from "@/components/data_input/select/Select";
import {Checkbox} from "@/components/data_input/checkbox";

export function BiddingInitialPage() {
    return (
        <div>
            <PageSection id="basic_data" title="Dados Básicos">
                <LineContent>
                    <LabelContainer title="Código:">
                        <Input disabled type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Número:">
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Dt. Edital:" width="w-auto">
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
                    <LabelContainer title="Valor Estimado:" notNull={true}>
                        <Input type="text"/>
                    </LabelContainer>
                    <LabelContainer title="Processo:" notNull={true}>
                        <Input type="text"/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição" notNull={true}>
                        <textarea placeholder="Bio"
                                  className="textarea textarea-bordered textarea-md w-full"></textarea>
                    </LabelContainer>
                </LineContent>
            </PageSection>

            <PageFooter>
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
        </div>
    )
}