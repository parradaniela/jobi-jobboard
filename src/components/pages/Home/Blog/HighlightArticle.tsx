import { NavLink } from "react-router-dom"


const HighlightArticle = () => {
    return (
        <article className="flex flex-col gap-4">
            <img src="" alt="articleimg" />
            <p className="text-xs font-gorditaLight">22 July, 2022</p>
            <h3 className="text-lg font-medium text-jobi-green-dark">Challenge yourself and win the future</h3>
            {/* TODO: find the property that lets you compress text with a real ... */}
            <p className="text-base font-gorditaLight">This response is important for our ability to learn from mistakes, but words ...</p>
            <NavLink to="/">&rarr;</NavLink>
        </article>
    )
}

export default HighlightArticle