import { ReactNode } from "react"

export interface ButtonProps {
    children?: ReactNode,
    style: 'btn-green' | 'btn-outline',
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