import {Modal} from "@/components/modal";
import {LineContent} from "@/components/layout/line_content";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import Select from "@/components/data_input/select/Select";
import {Input} from "@/components/data_input/input";
import {ModalResults} from "@/components/modal/ModalResults";
import {Table} from "@/components/data_display/table";
import {Button} from "@/components/actions/button";
import {ChangeEvent, useEffect, useState} from "react";
import {Manager} from "@/types/entity/core/Manager";
import {ManagerFunction} from "@/types/entity/core/ManagerFunction";
import {TOption} from "@/types/Global";
import {closeModal} from "@/functions/functions";

interface ManagerSearchModalProps {
    setmanager: (manager: Manager) => void;
}

export function ManagerSearchModal({setmanager}: ManagerSearchModalProps) {
    const id: string = "manager_search_modal"
    const [loading, setLoading] = useState(false);

    const [resetSelect, setResetSelect] = useState<boolean>(false)

    const [managerFilter, setManagerFilter] = useState<Manager>({
        managerFunctionId: 0,
        name: '',
        cpf: '',
    })

    const [managerList, setManagerList] = useState<Manager[]>()
    const [managerFunctionList, setManagerFunctionList] = useState<ManagerFunction[]>([])
    const managerFunctions: TOption[] = Array.isArray(managerFunctionList)
        ?
        managerFunctionList?.map((managerFunction) => ({
            value: managerFunction.id !== undefined ? managerFunction.id : '',
            description: managerFunction.description !== undefined ? managerFunction.description : '',
        })) : [];

    function clearModal() {
        setManagerFilter({
            managerFunctionId: 0,
            name: '',
            cpf: '',
        })
        setManagerList(undefined)
        setResetSelect(!resetSelect)
    }

    function handleSelectManager(manager: Manager) {
        if (manager) {
            setmanager(manager)
            closeModal(id);

            setTimeout(() => {
                clearModal();
            }, 800);
        }
    }

    async function searchMeneger() {

        await fetch("http://localhost:9090/manager/find_by_params", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(managerFilter),
        })
            .then(res => res.json())
            .then(json => setManagerList(json))
    }

    useEffect(() => {
        fetch("http://localhost:9090/manager_function/findall")
            .then((response) => response.json())
            .then((result) => {
                setManagerFunctionList(result);
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados:', error);
            });
    }, []);

    function handleSelect(value: string) {
        if (value) {
            setManagerFilter({...managerFilter, managerFunctionId: parseInt(value)})
        }
    }

    return (
        <Modal.Root id={id} title="Consulta de Gestor" clearModal={clearModal} loading={loading}>
            <Modal.Content>
                <LineContent>
                    <LabelContainer title="Função" width="w-auto">
                        <Select onChange={
                            (e: ChangeEvent<HTMLSelectElement>) => setManagerFilter({
                                ...managerFilter,
                                managerFunctionId: parseInt(e.target.value)
                            })
                        }
                                options={managerFunctions}/>
                    </LabelContainer>

                    <LabelContainer title="Nome:">
                        <Input type="text"
                               className="w-80"
                               value={managerFilter?.name}
                               onChange={(e) => setManagerFilter({...managerFilter, name: e.target.value})}
                        />
                    </LabelContainer>

                    <LabelContainer title="CPF:">
                        <Input type="text"
                               value={managerFilter?.cpf}
                               onChange={(e) => setManagerFilter({...managerFilter, cpf: e.target.value})}/>
                    </LabelContainer>
                </LineContent>
            </Modal.Content>
            {managerList && managerList.length > 0 && (
                <ModalResults>
                    <Table.Container>
                        <Table.Header>
                            <Table.Row>
                                <Table.Title value="Nº"/>
                                <Table.Title value="Nome"/>
                                <Table.Title value="CPF"/>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {managerList.map((m, i) => (
                                <Table.Row key={m.id} onDoubleClick={() => handleSelectManager(m)}>
                                    <Table.Value value={i + 1} alignment="center"/>
                                    <Table.Value value={m.name}/>
                                    <Table.Value value={m.cpf} alignment="center"/>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Container>
                </ModalResults>
            )}

            <Modal.Footer>
                <Button.Root id="btn_search_manager" classbutton="primary" onClick={searchMeneger}>
                    <Button.Title title="Consultar"/>
                </Button.Root>
            </Modal.Footer>
        </Modal.Root>
    )
}