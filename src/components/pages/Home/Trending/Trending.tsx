// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    const trendingLabels = ['Wordpress Development', 'Audio & Video Editing', 'Product & Branding Design', 'Admin & Customer Support']
    return (
        <section className="wrapper font-gordita">
            <h2 className="text-6xl text-jobi-black">Trending Jobs</h2>
            <ul className="flex justify-center items-center gap-4 my-16">
                {
                    trendingLabels.map(label => {
                        return (
                            <NavLink to="/" key={label}>
                                <li className="bg-slate-400 h-96 w-80 flex items-end">
                                    <h3 className="text-lg text-white font-medium p-8 w-[73%]">{label}</h3>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Trending