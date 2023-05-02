//react imports
import { NavLink } from "react-router-dom"
//component imports
import HighlightArticle from "../../components/pages/Home/Blog/HighlightArticle"
//images
import articleImgOne from "../../assets/index/photos/photo-wfh-thought-catalog.jpg"
import articleImgTwo from "../../assets/index/photos/photo-businessman-taylor-grote.jpg"
import articleImgThree from "../../assets/index/photos/photo-laptop-corinne-kutz.jpg"

const BlogHighlights = () => {
  return (
    <section className="wrapper-sm md:wrapper font-gordita py-8">
      <div className="flex flex-col gap-4 items-center justify-between pb-8 md:flex-row">
        <h2 className="text-4xl md:text-6xl text-black">Jobi Guides</h2>
        <NavLink
          to="/"
          className="text-sm text-jobi-green-dark py-2 border-b-2 border-b-jobi-green-dark transition-all hover:text-black/50 hover:border-b-black/50 focus:text-black/50 focus:border-b-black/50"
        >
          Explore all posts &rsaquo;
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