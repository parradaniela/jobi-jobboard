//React imports
import { NavLink } from "react-router-dom";
//Components
import CategoryButtons from "../../components/pages/Home/Categories/CategoryButtons";


const Categories = () => {
    return (
        <section className="wrapper-sm md:wrapper pt-16 pb-8">
            <div className="flex flex-col text-center justify-between items-center gap-2 md:flex-row">
                <h2 className="font-circularStd text-2xl font-medium text-black md:text-4xl">Most Demanding Categories</h2>
                <NavLink to="/" className="font-gordita text-sm text-jobi-green-dark py-2 border-b-2 border-b-jobi-green-dark transition-all hover:text-black/50 hover:border-b-black/50 focus:text-black/50 focus:border-b-black/50">
                    Explore all fields &rsaquo;
                </NavLink>
            </div>
            <CategoryButtons />
        </section>
    )
}

export default Categories