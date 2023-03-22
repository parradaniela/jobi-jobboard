import { ReactNode } from "react"

type PropsType = {
    children?: string | ReactNode,
    style: 'green' | 'outline',
    corners: 'rounded' | 'square',
    extraClasses?: string
}

type ButtonVariantsType = {
    green: string,
    outline: string,
    rounded: string,
    square: string
}

const Button = ({ children, style, corners, extraClasses }: PropsType) => {

    const buttonVariants: ButtonVariantsType = {
        green: "bg-jobi-green-bright border-jobi-green-bright text-white hover:bg-jobi-green-light hover:border-jobi-green-light hover:text-jobi-green-dark focus:bg-jobi-green-light focus:border-jobi-green-light focus:text-jobi-green-dark",
        outline: "bg-transparent border-white text-white hover:border-jobi-green-bright hover:text-jobi-green-bright focus:border-jobi-green-bright focus:text-jobi-green-bright",
        rounded: "rounded-full",
        square: "rounded"
    }

    return (
        <button
            className={`
            flex gap-3 border-2 px-4 py-1.5 transition-colors
            ${buttonVariants[style as keyof ButtonVariantsType]} 
            ${buttonVariants[corners as keyof ButtonVariantsType]} 
            ${extraClasses ? extraClasses : ''}
            `}
        >
            {children}
        </button>
    )
}

export default Button