import { NavLink } from "react-router-dom"
import jobiLogo from "../../../../assets/index/logos/logo-jobi-2.png";

const Collaboration = () => {
    return (
        <section className="wrapper py-8 flex justify-center font-gordita">
            <div className="w-1/2 border-1 border-b-gray-300 rounded-[50%] flex items-center justify-center">
                <div className="border-1 border-b-gray-300 w-3/4 h-3/4 rounded-[50%] flex justify-center items-center">
                    <img src={jobiLogo} alt="" />
                    {/* What the heck's going on here - revisit later */}
                </div>
            </div>
            <div className="p-12 w-1/3">
                <span className="uppercase text-gray-400 leading-loose">Top brand</span>
                <h2 className="text-6xl py-4">Collaboration with Top Brands</h2>
                <p className="text-base py-4 leading-loose">We collaborate with a number of top tier companies on imagining the future of work. Have a look.</p>
                <NavLink to="/" className="text-base text-jobi-green-dark font-bold hover:text-jobi-green-bright focus:text-jobi-green-bright transition-all">Learn more &rarr;</NavLink>
            </div>
        </section>
    )
}

export default Collaboration