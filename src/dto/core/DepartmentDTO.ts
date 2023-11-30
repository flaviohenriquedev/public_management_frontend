import {Department} from "@/class/core/Department";
import {User} from "@/class/core/User";
import {DepartmentType} from "@/class/core/DepartmentType";
import {CapacityType} from "@/class/core/CapacityType";
import {TypeLocation} from "@/class/core/TypeLocation";
import {DepartmentInstitutionDTO} from "@/dto/core/DepartmentInstitutionDTO";
import {DepartmentSubjectProcessDTO} from "@/class/protocol/dto/DepartmentSubjectProcessDTO";

export class DepartmentDTO {
    constructor(
        public department: Department = new Department(),
        public createUser: User = new User(),
        public updateUser: User = new User(),
        public topDepartment: Department = new Department(),
        public departmentType: DepartmentType = new DepartmentType(),
        public capacityType: CapacityType = new CapacityType(),
        public typeLocationDTO: TypeLocation = new TypeLocation(),
        public departmentInstitutionList : DepartmentInstitutionDTO[] = [],
        public departmentSubjectProcessList: DepartmentSubjectProcessDTO[] = []
    ) {
    }
}