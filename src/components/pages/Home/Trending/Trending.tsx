// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    return (
        <section className="wrapper font-gordita">
            <h2 className="text-6xl text-jobi-black">Trending Jobs</h2>
            <ul className="flex justify-center items-center gap-4 my-16">
                <NavLink to="/">
                    <li className="bg-wp bg-cover bg-[5%] h-96 w-80 flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Wordpress Development
                        </h3>
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="bg-audio bg-cover bg-left h-96 w-80 flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Audio & Video Editing
                        </h3>
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="bg-branding bg-cover h-96 w-80 flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Product & Branding Design
                        </h3>
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="bg-support bg-cover bg-[30%] h-96 w-80 flex items-end">
                        <h3 className="text-lg text-white font-medium p-8 w-[73%]">
                            Admin & Customer Support
                        </h3>
                    </li>
                </NavLink>
            </ul>
        </section>
    )
}

export default Trending