import {DepartmentSubjectProcess} from "@/class/protocol/DepartmentSubjectProcess";
import {SubjectProcess} from "@/class/protocol/SubjectProcess";
import {Department} from "@/class/core/Department";
import {User} from "@/class/core/User";

export class DepartmentSubjectProcessDTO {
    constructor(
        public departmentSubjectProcess: DepartmentSubjectProcess = new DepartmentSubjectProcess(),
        public subjectProcess: SubjectProcess = new SubjectProcess(),
        public department: Department = new Department(),
        public createUser: User = new User(),
        public createDate: Date = new Date(),
    ) {
    }
}