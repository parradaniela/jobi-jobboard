//react router imports
import { NavLink } from "react-router-dom"
//type imports
import { ListItemLinkProps } from "../../../types/button&LinkTypes"

const ListItemLinks = ({ url, text, extraClasses }: ListItemLinkProps) => {
    return (
        <li className={`transition-all ${extraClasses ? extraClasses : ''}`}>
            <NavLink to={url}>
                {text}
            </NavLink>
        </li>
    )
}

export default ListItemLinks