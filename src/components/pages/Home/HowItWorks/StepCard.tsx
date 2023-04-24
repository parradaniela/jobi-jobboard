//react imports
import { NavLink } from "react-router-dom"
//type imports
import { StepCardProps } from "../../../../types/button&LinkTypes"

const StepCard = ({src, text, url, linkText, stepNumber}: StepCardProps) => {
    return (
        <li className="flex gap-4 p-8 bg-slate-50 rounded-lg group transition-all w-full md:w-2/3 justify-center hover:scale-105 focus-within:scale-105 md:hover:scale-110 md:focus-within:scale-110 xl:justify-start xl:w-[30%]">
            <div className="w-12">
                <img src={src} alt={`Step ${stepNumber}`} />
            </div>
            <div>
                <p className="mb-4">{text}</p>
                <NavLink to={url} className="uppercase text-jobi-green-dark transition-all group-hover:text-jobi-green-dark group-hover:underline group-focus-within:text-jobi-green-dark group-focus-within:underline">
                    {linkText}
                </NavLink>
            </div>
        </li>
    )
}

export default StepCard