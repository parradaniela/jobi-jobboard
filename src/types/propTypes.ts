//React imports
import { ReactNode } from "react"
//Type imports
import { FooterData, TestimonialData } from "./dataTypes"

export type AccordionItemProps = {
    children: ReactNode,
    heading: string,
    index: number
}
export interface AnchorProps extends ButtonProps {
    url: string
}

export interface ButtonProps {
    children?: ReactNode,
    style: ButtonColorClasses,
    corners: 'rounded-full' | 'rounded',
    extraClasses?: string,
    ariaLabel: string
}

type ButtonColorClasses = 'btn-green' | 'btn-outline' | 'btn-lime' | 'btn-blue' | 'btn-cream' | 'btn-pink' | 'btn-lightgreen' | 'btn-lavender' | 'btn-orange'

export type FooterProps = {
    heading: string,
    navLinks: FooterData[]
}

export type HighlightArticleProps = {
    img: string,
    alt: string
}

export type ListItemLinkProps = {
    url: string,
    text: string,
    extraClasses?: string
}

export type StepCardProps = {
    src: string,
    text: string,
    url: string,
    linkText: string
}

export type TestimonialCarouselProps = {
    slideData: TestimonialData[],
    slideNum: number,
    current: number
}

export type TestimonialSlideContentProps = {
    heading: string,
    text: string,
    name: string,
    location: string,
    img: string,
    stars: number
}