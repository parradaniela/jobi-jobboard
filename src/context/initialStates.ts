import { DatabaseContextInterface, JobData } from "../types/databaseTypes"

export const initJobDataState: JobData[] = [
    {
        categories: [''],
        city: '',
        country: '',
        date: '',
        company: '',
        experience: '',
        salaryEnd: 0,
        salaryStart: 0,
        salaryType: '',
        title: '',
        type: ''
    }
]

export const initDatabaseContextState: DatabaseContextInterface = {jobData: initJobDataState}