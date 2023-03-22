import { NavLink } from "react-router-dom"

type PropsType = {
    src: string,
    text: string,
    url: string,
    linkText: string
}

const StepCard = ({src, text, url, linkText}: PropsType) => {
    return (
        <li className="flex">
            <div>
                <img src={src} alt="" />
            </div>
            <div>
                <p>{text}</p>
                <NavLink to={url} className="uppercase">{linkText}</NavLink>
            </div>
        </li>
    )
}

export default StepCard