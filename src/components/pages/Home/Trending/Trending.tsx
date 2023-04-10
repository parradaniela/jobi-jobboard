// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    return (
        <section className="wrapper font-gordita">
            <h2 className="text-6xl text-jobi-black">Trending Jobs</h2>
            <ul className="flex justify-center items-center gap-4 my-16">
                <li className="bg-wp bg-cover bg-[5%] h-96 w-80 group">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Wordpress Development
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-audio bg-cover bg-left h-96 w-80 group">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Audio & Video Editing
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-branding bg-cover h-96 w-80 group">
                    <NavLink to="/" className="h-full w-full flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%] transition-all group-hover:text-3xl group-hover:w-full group-focus-within:text-3xl group-focus-within:w-full">
                            Product & Branding Design
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-support bg-cover bg-[30%] h-96 w-80 group">
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