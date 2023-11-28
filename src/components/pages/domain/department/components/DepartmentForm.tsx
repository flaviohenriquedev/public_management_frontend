'use client'

import {Input} from "@/components/data_input/input";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Select} from "@/components/data_input/select";
import {TOption} from "@/types/Global";
import {Button} from "@/components/actions/button";
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClear} from 'react-icons/ai'
import {Checkbox} from "@/components/data_input/checkbox";
import {PageSection} from "@/components/layout/page_section";
import {LineContent} from "@/components/layout/line_content";
import {openModal} from "@/functions/functions";
import {ManagerSearchModal} from "@/components/modal/core/ManagerSearchModal";
import {ChangeEvent, useEffect, useState} from "react";
import {Manager} from "@/types/entity/core/Manager";
import {Tooltip} from "@/components/data_display/tooltip";
import {DepartmentDTO} from "@/dto/core/DepartmentDTO";
import {CapacityType} from "@/class/core/CapacityType";
import {DepartmentType} from "@/class/core/DepartmentType";
import {TypeLocation} from "@/class/core/TypeLocation";
import {Department} from "@/class/core/Department";
import {Table} from "@/components/data_display/table";

interface DepartmentProps {
    department: DepartmentDTO;
    setDepartment: (department: DepartmentDTO) => void;
    cantEdit: boolean
}

const DepartmentForm = ({department, setDepartment, cantEdit = true}: DepartmentProps) => {

    const [manager, setManager] = useState<Manager>()

    const [topDepartmentsList, setTopDepartmentsList] = useState<Department[]>([])
    const topDepartments: TOption[] = Array.isArray(topDepartmentsList)
        ?
        topDepartmentsList?.map((topDepartment) => ({
            value: topDepartment.id,
            description: `${topDepartment.code} - ${topDepartment.name}`
        })) : [];

    const [capacityTypesList, setCapacityTypesList] = useState<CapacityType[]>([]);
    const capacityTypes: TOption[] = Array.isArray(capacityTypesList)
        ?
        capacityTypesList?.map((capacityType) => ({
            value: capacityType.id,
            description: capacityType.description
        })) : [];

    const [departmentTypeList, setDepartmentTypeList] = useState<DepartmentType[]>([])
    const departmentTypes: TOption[] = Array.isArray(departmentTypeList)
        ?
        departmentTypeList?.map((departmentType) => ({
            value: departmentType.id,
            description: departmentType.description
        })) : [];

    const [typeLocationList, setTypeLocationList] = useState<TypeLocation[]>([])
    const typeLocations: TOption[] = Array.isArray(typeLocationList)
        ?
        typeLocationList?.map((typeLocation) => ({
            value: typeLocation.key,
            description: typeLocation.value
        })) : [];

    useEffect(() => {
        fetch("http://localhost:9090/department/findall")
            .then(res => res.json())
            .then(data => setTopDepartmentsList(data))
            .catch(error => {
                console.error("Erro ao buscar departamentos superiores.")
            })
    }, []);

    useEffect(() => {
        try {
            fetch("http://localhost:9090/capacity_type/findall")
                .then(res => res.json())
                .then(data => setCapacityTypesList(data))
                .catch(error => {
                    console.error("Erro ao buscar departamentos superiores.")
                })
        } catch (error) {

        }
    }, []);

    useEffect(() => {
        try {
            fetch("http://localhost:9090/department_type/findall")
                .then(res => res.json())
                .then(data => setDepartmentTypeList(data))
                .catch(error => {
                    console.error("Erro ao buscar departamentos superiores.")
                })
        } catch (error) {

        }
    }, []);

    useEffect(() => {
        try {
            fetch("http://localhost:9090/type_location/findall")
                .then(res => res.json())
                .then(data => setTypeLocationList(data))
                .catch(error => {
                    console.error("Erro ao buscar departamentos superiores.")
                })
        } catch (error) {

        }
    }, []);

    return (
        <>
            <form id="department_form" className="flex flex-col gap-3 h-full" onSubmit={(e) => e.preventDefault()}>
                <PageSection id="departments" title="Informações Básicas">
                    <LineContent>
                        <LabelContainer title="Código:" width="w-36">
                            <Input disabled
                                   type="text"
                                   value={department.department.code}
                                   onChange={(e) => setDepartment({
                                       ...department,
                                       department: {
                                           ...department.department,
                                           code: e.target.value
                                       }
                                   })}
                            />
                        </LabelContainer>

                        <LabelContainer title="Código INEP:" width="w-36">
                            <Input disabled={cantEdit}
                                   type="text"
                                   value={department.department.inepCode}
                                   onChange={(e) => setDepartment({
                                       ...department,
                                       department: {...department.department, inepCode: e.target.value}
                                   })}/>
                        </LabelContainer>

                        <LabelContainer title="Prazo de Análise:" width="w-36">
                            <Input disabled={cantEdit}
                                   type="number"
                                   value={department.department.deadlineAnalysis}
                                   onChange={(e) => setDepartment({
                                       ...department,
                                       department: {
                                           ...department.department,
                                           deadlineAnalysis: parseInt(e.target.value, 10)
                                       }
                                   })}
                            />
                        </LabelContainer>

                        <LabelContainer title="Código Lotação" width="w-36">
                            <Input disabled={cantEdit}
                                   type="text"
                                   value={department.department.inepCode}
                                   onChange={(e) => setDepartment({
                                       ...department,
                                       department: {
                                           ...department.department,
                                           inepCode: e.target.value
                                       }
                                   })}/>
                        </LabelContainer>

                        <LabelContainer title="Nome:">
                            <Input disabled={cantEdit}
                                   type="text"
                                   value={department.department.name}
                                   onChange={(e) => setDepartment({
                                       ...department,
                                       department: {...department.department, name: e.target.value}
                                   })}/>
                        </LabelContainer>
                    </LineContent>
                    <LineContent>
                        <LabelContainer title="Profissional do Magistério">
                            <Select disabled={cantEdit}
                                    options={capacityTypes}
                                    value={department.capacityType.id}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setDepartment({
                                        ...department, capacityType: {
                                            ...department.capacityType,
                                            id: parseInt(e.target.value)
                                        }
                                    })}/>
                        </LabelContainer>
                        <LabelContainer title="Tipo de Departamento">
                            <Select disabled={cantEdit}
                                    options={departmentTypes}
                                    value={department.departmentType.id}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setDepartment({
                                        ...department, departmentType: {
                                            ...department.departmentType,
                                            id: parseInt(e.target.value)
                                        }
                                    })}/>
                        </LabelContainer>
                        <LabelContainer title="Tipo de Local">
                            <Select disabled={cantEdit}
                                    options={typeLocations}
                                    value={department.typeLocationDTO.key}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setDepartment({
                                        ...department, typeLocationDTO: {
                                            ...department.typeLocationDTO,
                                            value: e.target.value
                                        }
                                    })}
                            />
                        </LabelContainer>
                    </LineContent>
                    <LineContent>
                        <LabelContainer title="Departamento Superior">
                            <Select disabled={cantEdit}
                                    options={topDepartments}
                                    value={department.topDepartment.id}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                        setDepartment({
                                            ...department,
                                            topDepartment: {
                                                ...department.topDepartment,
                                                id: parseInt(e.target.value)
                                            }
                                        })
                                    }
                            />
                        </LabelContainer>
                    </LineContent>
                    <LineContent>
                        <LabelContainer title="Gestor">
                            <Input type="text" disabled value={manager?.name}/>
                        </LabelContainer>
                        <Tooltip message="Consultar Gestor">
                            <Button.Root id="open_manager_search_modal" classbutton="primary"
                                         onClick={() => openModal("manager_search_modal")}>
                                <Button.Icon icon={<BiSearch/>}/>
                            </Button.Root>
                        </Tooltip>

                        <Tooltip message="Limpar">
                            <Button.Root classbutton="warning" onClick={() => setManager({...manager, name: ''})}>
                                <Button.Icon icon={<AiOutlineClear/>}/>
                            </Button.Root>
                        </Tooltip>
                    </LineContent>

                    <LineContent>
                        <Checkbox title="Ouvidoria" value={department.department.ombudsman}/>
                        <Checkbox title="Permite Arquivamento" value={department.department.archivingAllowed}/>
                        <Checkbox title="Ativo" value={department.department.enable}/>
                        <Checkbox title="Exige Identif. Protocolo" value={department.department.identifyProcessUser}/>
                        <Checkbox title="Protocolo" value={department.department.isProtocol}/>
                    </LineContent>
                    <LineContent>
                        <Checkbox title="Patrimônio" value={department.department.patrimony}/>
                        <Checkbox title="Insalubre" value={department.department.unhealthy}/>
                        <Checkbox title="Módulo Folha" value={department.department.isHumanResource}/>
                        <Checkbox title="Módulo Frotas" value={department.department.isFleet}/>
                        <Checkbox title="Módulo Protocolo" value={department.department.isProtocol}/>
                    </LineContent>
                </PageSection>

                <PageSection title={`Usuários Responsáveis`}>

                </PageSection>
                <PageSection title={`Instituições Atendidas`}>
                    {department.departmentInstitutionList
                        && department.departmentInstitutionList[0]
                        && department.departmentInstitutionList[0].institution
                        && department.departmentInstitutionList[0].institution.id > 0 && (

                            <Table.Container>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.Title value="Nº"/>
                                        <Table.Title value="Código"/>
                                        <Table.Title value="Nome"/>
                                        <Table.Title value="CNPJ"/>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {department.departmentInstitutionList.map((di, i) => (
                                        <Table.Row key={di.institution.id}>
                                            <Table.Value value={i + 1} alignment="center"/>
                                            <Table.Value value={di.institution.code} alignment="center"/>
                                            <Table.Value value={di.institution.name} alignment="center"/>
                                            <Table.Value value={di.institution.cnpj} alignment="center"/>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Container>
                        )
                    }
                </PageSection>

                <PageSection title={`Assuntos Tratados`}>
                    {department.departmentSubjectProcessList
                        && department.departmentSubjectProcessList[0]
                        && department.departmentSubjectProcessList[0].departmentSubjectProcess
                        && department.departmentSubjectProcessList[0].departmentSubjectProcess.id > 0 && (
                            <Table.Container>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.Title value="Nº"/>
                                        <Table.Title value="Código"/>
                                        <Table.Title value="Assunto"/>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {department.departmentSubjectProcessList.map((dsp, i) => (
                                        <Table.Row key={dsp.departmentSubjectProcess.id}>
                                            <Table.Value value={i + 1} alignment="center"/>
                                            <Table.Value value={dsp.subjectProcess.code} alignment="center"/>
                                            <Table.Value value={dsp.subjectProcess.description} alignment="center"/>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Container>
                        )
                    }
                </PageSection>

                <PageSection title={`Unidade Orçamentária`}>

                </PageSection>
            </form>
            <ManagerSearchModal setmanager={setManager}/>
        </>
    );
}

export default DepartmentForm;
