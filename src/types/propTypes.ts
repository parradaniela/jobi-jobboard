import { ReactNode } from "react"

export type AccordionItemProps = {
    children: ReactNode,
    heading: string,
    index: number
}

type ButtonColorClasses = 'btn-green' | 'btn-outline' | 'btn-lime' | 'btn-blue' | 'btn-cream' | 'btn-pink' | 'btn-lightgreen' | 'btn-lavender' | 'btn-orange'

export interface ButtonProps {
    children?: ReactNode,
    style: ButtonColorClasses,
    corners: 'rounded-full' | 'rounded',
    extraClasses?: string,
}

export interface AnchorProps extends ButtonProps {
    url: string
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
    linkText: string,
    stepNumber: string
}


export type TestimonialCarouselProps = {
    heading: string,
    text: string,
    name: string,
    location: string,
    img: string
}