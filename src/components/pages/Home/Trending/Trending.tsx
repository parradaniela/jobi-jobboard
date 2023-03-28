// router imports
import { NavLink } from "react-router-dom"

const Trending = () => {
    const trendingLabels = ['Wordpress Development', 'Audio & Video Editing', 'Product & Branding Design', 'Admin & Customer Support']
    return (
        <section className="wrapper">
            <h2>Trending Jobs</h2>
            <ul className="flex justify-center items-center gap-4">
                {
                    trendingLabels.map(label => {
                        return (
                            <NavLink to="/" key={label}>
                                <li>
                                    <h3>{label}</h3>
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