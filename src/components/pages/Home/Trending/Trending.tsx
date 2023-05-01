// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    return (
        <section className="wrapper-sm md:wrapper font-gordita ">
            <h2 className="transition-all text-4xl text-center md:text-left md:text-6xl text-black">Trending Jobs</h2>
            <ul className="transition-all grid grid-flow-row my-8 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:my-16">
                <li className="transition-all bg-wp bg-cover bg-[5%] h-72 w-full group sm:h-96 xl:hover:-translate-y-3 xl:focus:-translate-x-3">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Wordpress Development
                        </h3>
                    </NavLink>
                </li>
                <li className="transition-all bg-audio bg-cover bg-left h-72 w-full group sm:h-96 xl:hover:-translate-y-3 xl:focus:-translate-x-3">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Audio & Video Editing
                        </h3>
                    </NavLink>
                </li>
                <li className="transition-all bg-branding bg-cover h-72 w-full group sm:h-96 xl:hover:-translate-y-3 xl:focus:-translate-x-3">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Product & Branding Design
                        </h3>
                    </NavLink>
                </li>
                <li className="transition-all bg-support bg-cover bg-[30%] h-72 w-full group sm:h-96 xl:hover:-translate-y-3 xl:focus:-translate-x-3">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Admin & Customer Support
                        </h3>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Trending