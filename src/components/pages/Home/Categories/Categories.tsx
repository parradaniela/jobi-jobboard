import { NavLink } from "react-router-dom";
import CategoryButtons from "./CategoryButtons";

const Categories = () => {
    return (
        <section className="wrapper py-8">
            <div className="flex justify-between items-center">
                <h2 className="font-circularStd text-4xl font-medium text-jobi-black">Most Demanding Categories</h2>
                <NavLink to="/" className="font-gordita text-sm text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark">
                    Explore all fields &rsaquo;
                </NavLink>
            </div>
            <CategoryButtons />
        </section>
    )
}

export default Categories