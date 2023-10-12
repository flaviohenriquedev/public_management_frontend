export class DepartmentInstitution {
    constructor(
        public id: number = 0,
        public institutionId: number = 0,
        public departmentId: number = 0,
        public createUserId: number = 0,
        public createDate: Date = new Date(),
    ) {
    }
}