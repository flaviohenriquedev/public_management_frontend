import {Modal} from "@/components/modal";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Input} from "@/components/data_input/input";
import {LineContent} from "@/components/layout/line_content";
import {useState} from "react";
import {Checkbox} from "@/components/data_input/checkbox";
import {Container} from "@/components/containers/container";
import {Button} from "@/components/actions/button";
import {DepartmentDTO} from "@/dto/core/DepartmentDTO";
import {ModalResults} from "@/components/modal/ModalResults";
import {Table} from "@/components/data_display/table";
import {closeModal} from "@/functions/functions";

interface DepartmentSearchModalProps {
    setDepartment: (department: DepartmentDTO) => void
}

export function DepartmentSearchModal({setDepartment}: DepartmentSearchModalProps) {

    const id = 'department_search_modal'

    const [departmentFilter, setDepartmentFilter] = useState<DepartmentDTO>(new DepartmentDTO())

    const departmentInitialValue = new DepartmentDTO();
    const [departmentList, setDepartmentList] = useState<DepartmentDTO[]>([departmentInitialValue])

    async function searchDepartment() {
        const response = await fetch("http://localhost:9090/department/find_by_params", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(departmentFilter)
        })
        console.log("RESPONSE", JSON.stringify(departmentFilter))
        const data = await response.json();
        if (data)
            console.log(data)
            setDepartmentList(data)
    }

    function clearModal() {
        setDepartmentList([departmentInitialValue])
        setDepartmentFilter(new DepartmentDTO())
    }

    function handleSelectManager(department: DepartmentDTO) {
        if (department) {
            setDepartment(department)
            closeModal(id);

            setTimeout(() => {
                clearModal();
            }, 800);
        }
    }

    return (
        <Modal.Root id={id} title="Consulta de Departamento" clearModal={clearModal}>
            <Modal.Content>
                <Container>
                    <LineContent>
                        <LabelContainer title="Código:">
                            <Input type="text"
                                   className="w-auto"
                                   value={departmentFilter.department.code}
                                   onChange={(e) => setDepartmentFilter({
                                       ...departmentFilter,
                                       department: {
                                           ...departmentFilter.department,
                                           code: e.target.value
                                       }
                                   })}
                            />
                        </LabelContainer>

                        <LabelContainer title="Departamento:">
                            <Input type="text"
                                   className="w-auto"
                                   value={departmentFilter.department.name}
                                   onChange={(e) => setDepartmentFilter({
                                       ...departmentFilter,
                                       department: {
                                           ...departmentFilter.department,
                                           name: e.target.value
                                       }
                                   })}
                            />
                        </LabelContainer>

                        <LabelContainer title="Gestor:">
                            <Input type="text"
                                   className="w-auto"
                            />
                        </LabelContainer>
                    </LineContent>
                    <LineContent>
                        <Checkbox title="Somente ativos"/>
                    </LineContent>
                </Container>
            </Modal.Content>
            {departmentList && departmentList[0] && departmentList[0].department && departmentList[0].department.id > 0 && (
                <ModalResults>
                    <Table.Container>
                        <Table.Header>
                            <Table.Row>
                                <Table.Title value="Nº"/>
                                <Table.Title value="Código"/>
                                <Table.Title value="Nome"/>
                                <Table.Title value="Tipo Departamento" />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {departmentList.map((m, i) => (
                                <Table.Row key={m.department.id} onDoubleClick={() => handleSelectManager(m)}>
                                    <Table.Value value={i + 1} alignment="center"/>
                                    <Table.Value value={m.department.code} alignment="center"/>
                                    <Table.Value value={m.department.name}/>
                                    <Table.Value value={m.departmentType.description} alignment="center"/>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Container>
                </ModalResults>
            )}
            <Modal.Footer>
                <Button.Root id="btn_search_manager" classbutton="primary" onClick={searchDepartment}>
                    <Button.Title title="Consultar"/>
                </Button.Root>
            </Modal.Footer>
        </Modal.Root>
    )
}