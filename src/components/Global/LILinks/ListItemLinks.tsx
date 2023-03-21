import { NavLink } from "react-router-dom"

type PropsType = {
    url: string,
    text: string,
    extraClasses?: string
}

const ListItemLinks = ({ url, text, extraClasses }: PropsType) => {
  return (
      <li className={`transition-all ${extraClasses ? extraClasses : ''}`}>
          <NavLink to={url}>
              {text}
          </NavLink>
      </li>
  )
}

export default ListItemLinks