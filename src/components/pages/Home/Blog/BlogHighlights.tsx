import { NavLink } from "react-router-dom"
//component imports
import HighlightArticle from "./HighlightArticle"
//images
import articleImgOne from "../../../../assets/index/photos/photo-wfh-thought-catalog.jpg"
import articleImgTwo from "../../../../assets/index/photos/photo-businessman-taylor-grote.jpg"
import articleImgThree from "../../../../assets/index/photos/photo-laptop-corinne-kutz.jpg"


const BlogHighlights = () => {
  return (
    <section className="wrapper-sm md:wrapper font-gordita py-8">
      <div className="flex flex-col gap-4 items-center justify-between pb-8 md:flex-row">
        <h2 className="text-4xl md:text-6xl text-jobi-green-dark">Jobi Guides</h2>
        <NavLink
          to="/"
          className="text-sm text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark"
        >
          Explore More &rsaquo;
        </NavLink>
      </div>
      <div className="flex flex-wrap gap-4 py-8 lg:justify-evenly">
        <HighlightArticle img={articleImgOne} alt="Woman working at home from her laptop, sitting on the ground on top of a bright red carpet" />
        <HighlightArticle img={articleImgTwo} alt="A young businessman dressed in a suit walks down an alleyway, smiling and looking upwards" />
        <HighlightArticle img={articleImgThree} alt="Overhead angle of a woman typing on a laptop on top of a round white table. A small plant, a pair of glasses, two pencils and a face-down mobile phone are visible" />
      </div>
    </section>
  )
}

export default BlogHighlights