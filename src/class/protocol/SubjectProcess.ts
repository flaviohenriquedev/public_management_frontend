export class SubjectProcess {
    constructor(
        public id: number = 0,
        public description: string = '',
        public code: string = '',
        public deadlineAnalysis: number = 0,
        public graphicPrefix: string = '',
        public createUserId: number = 0,
        public createDate: Date = new Date(),
        public updateUserId: number = 0,
        public updateDate: Date = new Date(),
        public enabled: boolean = false,
        public displayMobileDevice: boolean = false,
        public humanResourceSubject: boolean = false,
        public humanResourceInformation: string = '',
        public legalTerms: string = '',
        public permitHealthRequest: boolean = false,
        public propertyRequired: boolean = false,
        public companyRequired: boolean = false,
        public enabledPortal: boolean = false,
        public technicalManager: boolean = false,
        public tfd: boolean = false,
    ) {
    }
}