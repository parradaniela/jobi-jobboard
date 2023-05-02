import { ReactNode } from "react";

export type ContextChildren = { children: ReactNode }

export interface DatabaseContextInterface {
    jobData: JobData[];
}

export type FooterData = {
    url: string,
    text: string
}

export type JobData = {
    categories: string[],
    city: string,
    country: string,
    company: string,
    date: string,
    experience: string,
    id: string,
    salaryEnd: number,
    salaryStart: number,
    salaryType: string,
    title: string,
    type: string
}

export type TestimonialData = {
    heading: string,
    id: string,
    text: string,
    name: string,
    location: string,
    img: string,
    stars: number
}