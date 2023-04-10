import { NavLink } from "react-router-dom"

type Props = {
    img: string,
    alt: string
}

const HighlightArticle = ({img, alt}: Props) => {
    return (
        <article className="w-1/4">
            <NavLink to="/" className="flex flex-col gap-4 p-4 transition-all hover:bg-jobi-green-light hover:-translate-y-4 group">
                <img src={img} alt={alt} />
                <p className="text-xs font-gorditaLight">22 July, 2022</p>
                <h3 className="text-lg font-medium text-jobi-green-dark">Challenge yourself and win the future</h3>
                {/* TODO: Create a function to truncate text properly */}
                <p className="text-base font-gorditaLight">This response is important for our ability to learn from mistakes, but words ...</p>
                <span className="sr-only">Click to read this blog post</span>
                <span className="group-hover:translate-x-[95%] group-hover:text-lg transition-all">&rarr;</span>
            </NavLink>
        </article>
    )
}

export default HighlightArticle