import {Department} from "@/class/core/Department";
import {Institution} from "@/class/core/Institution";
import {User} from "@/class/core/User";

export class DepartmentInstitutionDTO {
    constructor(
        public department: Department = new Department(),
        public institution: Institution = new Institution(),
        public createUser: User = new User(),
        public updateUser: User = new User(),
    ) {
    }
}