import { ButtonProps } from "../../../types/propTypes"

const Button = ({ children, style, corners, extraClasses }: ButtonProps) => {

    return (
        <button
            className={`
            flex justify-center items-center gap-3 border-2 px-4 py-4 transition-all w-full md:w-auto md:py-1.5
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