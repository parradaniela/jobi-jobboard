import { ButtonProps } from "../../../types/button&LinkTypes"

const Button = ({ children, style, corners, extraClasses }: ButtonProps) => {

    return (
        <button
            className={`
            flex justify-center items-center gap-3 border-2 px-4 py-1.5 transition-colors
            ${style} 
            ${corners} 
            ${extraClasses ? extraClasses : ''}
            `}
        >
            {children}
        </button>
    )
}

export default Button