export class DepartmentType {
    constructor(
        public id: number = 0,
        public code: number = 0,
        public description: string = '',
        public createUserId: number = 0,
        public createDate: Date = new Date(),
        public updateUserId: number = 0,
        public updateDate: Date = new Date(),
        public enable: boolean = false,
        public topDepartmentTypeId: number = 0,
    ) {
    }
}