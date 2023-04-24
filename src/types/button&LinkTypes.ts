import { ReactNode } from "react"

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

export type ListItemLinkProps = {
    url: string,
    text: string,
    extraClasses?: string
}
// HowItWorks component step-by-step cards
export type StepCardProps = {
    src: string,
    text: string,
    url: string,
    linkText: string,
    stepNumber: string
}