import { NavLink } from "react-router-dom"
import HighlightArticle from "./HighlightArticle"


const BlogHighlights = () => {
  return (
    <section className="wrapper font-gordita py-8">
      <div className="flex items-center justify-between pb-8">
        <h2 className="text-6xl text-jobi-green-dark">Jobi Guides</h2>
        <NavLink
          to="/"
          className="text-sm text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark"
        >
          Explore More &rsaquo;
        </NavLink>
      </div>
      <div className="flex justify-evenly gap-8">
        <HighlightArticle />
        <HighlightArticle />
        <HighlightArticle />
      </div>
    </section>
  )
}

export default BlogHighlights