export class Department {
    constructor(
        public id: number = 0,
        public name: string = '',
        public code: string = '',
        public createUserId: number = 0,
        public createDate: Date = new Date(),
        public updateUserId: number = 0,
        public updateDate: Date = new Date(),
        public enable: boolean = false,
        public deadlineAnalysis: number = 0,
        public institutionUnidId: number = 0,
        public topDepartmentId: number = 0,
        public capacityTypeId: number = 0,
        public ombudsman: boolean = false,
        public reportName: string = '',
        public archivingAllowed: boolean = false,
        public departmentTypeId: number = 0,
        public isHumanResource: boolean = false,
        public localType: number = 0,
        public identifyProcessUser: boolean = false,
        public managerId: number = 0,
        public patrimony: boolean = false,
        public inepCode: string = '',
        public departmentCapacityCode: string = '',
        public unhealthy: boolean = false,
        public unhealthyInformation: string = '',
        public isFleet: boolean = false,
        public isProtocol: boolean = false
    ) {
    }
}