export class DepartmentSubjectProcess {
    constructor(
        public id: number = 0,
        public subjectProcessId: number = 0,
        public departmentId: number = 0,
        public createUserId: number = 0,
        public createDate: Date = new Date(),
    ) {
    }
}