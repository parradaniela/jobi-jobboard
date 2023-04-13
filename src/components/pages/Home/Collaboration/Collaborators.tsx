import { NavLink } from "react-router-dom"
import shape from "../../../../assets/index/Images.png"

const Collaboration = () => {
    return (
        <section className="wrapper-sm lg:wrapper pt-4 pb-8 flex flex-col items-center text-center font-gordita lg:flex-row lg:justify-evenly lg:py-12 lg:text-left">
            <div>
                <img src={shape} alt="Brands love to collaborate with us and our network of candidates" />
            </div>
            <div className="lg:p-12 lg:w-1/3">
                <span className="uppercase text-gray-400 leading-loose">Top brand</span>
                <h2 className="text-4xl lg:text-6xl py-4">Collaboration with Top Brands</h2>
                <p className="text-base py-4 leading-loose">We collaborate with a number of top tier companies on imagining the future of work. Have a look.</p>
                <NavLink to="/" className="text-base text-jobi-green-dark font-bold hover:text-jobi-green-bright focus:text-jobi-green-bright transition-all">Learn more &rarr;</NavLink>
            </div>
        </section>
    )
}

export default Collaboration