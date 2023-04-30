//React imports
import { NavLink } from "react-router-dom"
//ionicons
import { IonIcon } from "@ionic/react"
import { arrowForwardOutline } from "ionicons/icons"
//types
import { HighlightArticleProps } from "../../../../types/propTypes"

const HighlightArticle = ({ img, alt }: HighlightArticleProps) => {
    return (
        <article className="lg:w-1/4">
            <NavLink to="/" className="flex flex-col gap-4 p-4 transition-all hover:bg-jobi-green-light hover:-translate-y-4 focus:bg-jobi-green-light focus:-translate-y-4 group sm:flex-row lg:flex-col" aria-label="Read the full blog post">
                <div className="sm:w-2/3 lg:w-full">
                    <img src={img} alt={alt} title="Blog image" />
                </div>
                <div className="flex flex-col justify-evenly gap-2">
                    <p className="text-xs font-gorditaLight">22 July, 2022</p>
                    <h3 className="text-lg font-medium text-jobi-green-dark">Challenge yourself and win the future</h3>
                    {/* TODO: Create a function to truncate text properly */}
                    <p className="text-base font-gorditaLight">This response is important for our ability to learn from mistakes, but words ...</p>
                    <span className="group-hover:translate-x-[95%] group-focus-within:translate-x-[95%] transition-all">
                        <IonIcon icon={arrowForwardOutline} />
                    </span>
                </div>
            </NavLink>
        </article>
    )
}

export default HighlightArticle