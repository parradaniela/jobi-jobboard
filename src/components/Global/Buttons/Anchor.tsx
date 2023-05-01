//router import
import { NavLink } from "react-router-dom"
//type imports
import { AnchorProps } from "../../../types/propTypes"

const Anchor = ({ children, style, corners, extraClasses, url, ariaLabel }: AnchorProps) => {
    return (
        <NavLink
            to={url}
            className={`
            flex justify-center items-center gap-3 border-2 px-4 py-1.5 transition-all w-full md:w-auto
            ${style} 
            ${corners} 
            ${extraClasses ? extraClasses : ''}
            `}
            aria-label={ariaLabel}
        >
            {children}
        </NavLink>
    )
}

export default Anchor