import { NavLink } from "react-router-dom"

type PropsType = {
    src: string,
    text: string,
    url: string,
    linkText: string
}

const StepCard = ({src, text, url, linkText}: PropsType) => {
    return (
        <li className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div>
                {/* Leaving alt text empty so the images are skipped by screen readers, they don't add anything */}
                <img src={src} alt="" />
            </div>
            <div>
                <p className="py-4">{text}</p>
                <NavLink to={url} className="uppercase text-jobi-green-bright pb-4">
                    {linkText}
                </NavLink>
            </div>
        </li>
    )
}

export default StepCard