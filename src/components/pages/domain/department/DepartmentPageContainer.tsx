'use client'

import {DepartmentComponent} from "./components";
import {useState} from "react";
import {DepartmentDTO} from "@/dto/core/DepartmentDTO";
import {DepartmentSearchModal} from "@/components/modal/core/DepartmentSearchModal";
import {PageLayout} from "@/components/layout/page";
import {Button} from "@/components/actions/button";
import {openModal} from "@/functions/functions";
import {PageFooter} from "@/components/layout/page_footer";

export default function DepartmentPageContainer() {
    const [department, setDepartment] = useState<DepartmentDTO>(new DepartmentDTO())
    const [cantEdit, setCantEdit] = useState<boolean>(false)

    function handleSelectDepartment(department: DepartmentDTO) {
        setDepartment(department)
        setCantEdit(true)
    }

    function handleNewRegister() {
        setDepartment(new DepartmentDTO())
        setCantEdit(false)
    }

    return (
        <PageLayout.Container>
            <PageLayout.Content>
                <DepartmentComponent.Form department={department} setDepartment={setDepartment} cantEdit={cantEdit}/>
            </PageLayout.Content>
            <PageFooter>
                <Button.Root classbutton="primary" onClick={() => openModal("department_search_modal")}>
                    <Button.Title title="Consultar"/>
                </Button.Root>

                <Button.Root classbutton="success" onClick={handleNewRegister}>
                    <Button.Title title="Novo Cadastro" />
                </Button.Root>

                <Button.Root classbutton="warning" onClick={() => setCantEdit(false)} render={cantEdit}>
                    <Button.Title title="Editar"/>
                </Button.Root>

                <Button.Root classbutton="danger" render={department.department.id > 0}>
                    <Button.Title title="Excluir"/>
                </Button.Root>

                <Button.Root classbutton="primary" render={!cantEdit}>
                    <Button.Title title="Salvar"/>
                </Button.Root>
            </PageFooter>
            <DepartmentSearchModal setDepartment={handleSelectDepartment}/>
        </PageLayout.Container>
    )
}