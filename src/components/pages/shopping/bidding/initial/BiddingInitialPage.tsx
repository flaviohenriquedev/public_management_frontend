'use client'

import {PageSection} from "@/components/layout/page_section";
import {Button} from "@/components/actions/button";
import {PageFooter} from "@/components/layout/page_footer";
import {openModal} from "@/functions/functions";

export function BiddingInitialPage() {
    return (
        <div>
            <PageSection id="basic_data" title="Dados Básicos">
                <h1>Dados Básicos</h1>
            </PageSection>

            <PageSection id="object_nature" title="Natureza do Objeto">
                <h1>Natureza do Objeto</h1>
            </PageSection>
            <PageFooter>
                <Button.Root classbutton="primary" onClick={() => openModal("department_search_modal")}>
                    <Button.Title title="Consultar"/>
                </Button.Root>

                <Button.Root classbutton="success">
                    <Button.Title title="Novo Cadastro" />
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