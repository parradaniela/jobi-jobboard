import { NavLink } from "react-router-dom"
import HighlightArticle from "./HighlightArticle"


const BlogHighlights = () => {
  return (
    <section className="wrapper">
      <div>
        <h2>Jobi Guides</h2>
        <NavLink to="error">Explore More &rsaquo;</NavLink>
      </div>
      <div className="flex justify-evenly">
        <HighlightArticle />
        <HighlightArticle />
        <HighlightArticle />
      </div>
    </section>
  )
}

export default BlogHighlights