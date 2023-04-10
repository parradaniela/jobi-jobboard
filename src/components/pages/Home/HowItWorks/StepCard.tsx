//react imports
import { NavLink } from "react-router-dom"
//type imports
import { StepCardProps } from "../../../../types/button&LinkTypes"

const StepCard = ({src, text, url, linkText}: StepCardProps) => {
    return (
        <li className="flex gap-4 p-8 bg-slate-50 rounded-lg group transition-all hover:scale-110 focus:scale-110">
            <div className="w-12">
                {/* Leaving alt text empty so the images are skipped by screen readers, they don't add anything */}
                <img src={src} alt="" />
            </div>
            <div>
                <p className="mb-4">{text}</p>
                <NavLink to={url} className="uppercase text-jobi-green-bright transition-all group-hover:text-jobi-green-dark group-hover:underline group-focus-within:text-jobi-green-dark group-focus-within:underline">
                    {linkText}
                </NavLink>
            </div>
        </li>
    )
}

export default StepCard