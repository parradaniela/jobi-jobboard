// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    return (
        <section className="wrapper font-gordita">
            <h2 className="text-6xl text-jobi-black">Trending Jobs</h2>
            <ul className="flex justify-center items-center gap-4 my-16">
                <li className="bg-wp bg-cover bg-[5%] h-96 w-80 transition-all hover:bg-gradient-to-b from-slate-200 to-slate-700">
                    <NavLink to="/" className="h-full w-full flex items-end transition-all hover:items-center hover:justify-center hover:text-center">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Wordpress Development
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-audio bg-cover bg-left h-96 w-80 transition-all hover:bg-gradient-to-b from-slate-200 to-slate-700">
                    <NavLink to="/" className="h-full w-full flex items-end transition-all hover:items-center hover:justify-center hover:text-center">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Audio & Video Editing
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-branding bg-cover h-96 w-80 transition-all hover:bg-gradient-to-b from-slate-200 to-slate-700">
                    <NavLink to="/" className="h-full w-full flex items-end transition-all hover:items-center hover:justify-center hover:text-center">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Product & Branding Design
                        </h3>
                    </NavLink>
                </li>
                <li className="bg-support bg-cover bg-[30%] h-96 w-80 transition-all hover:bg-gradient-to-b from-slate-300 to-slate-700">
                    <NavLink to="/" className="h-full w-full flex items-end transition-all hover:items-center hover:justify-center hover:text-center">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Admin & Customer Support
                        </h3>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Trending