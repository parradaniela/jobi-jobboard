//router import
import { NavLink } from "react-router-dom"
//type imports
import { AnchorProps } from "../../../types/buttonTypes"

const Anchor = ({ children, style, corners, extraClasses, url }: AnchorProps) => {
    return (
        <NavLink
            to={url}   
            className={`
            flex gap-3 border-2 px-4 py-1.5 transition-colors
            ${style} 
            ${corners} 
            ${extraClasses ? extraClasses : ''}
            `}
        >
            {children}
        </NavLink>
    )
}

export default Anchor