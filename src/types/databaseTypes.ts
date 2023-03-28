import { ReactNode } from "react";

export type JobData = {
    categories: string[],
    city: string,
    country: string,
    company: string,
    date: string,
    experience: string,
    salaryEnd: number,
    salaryStart: number,
    salaryType: string,
    title: string,
    type: string
}

export type ContextChildren = { children: ReactNode }

export interface DatabaseContextInterface {
    jobData: JobData[];
}