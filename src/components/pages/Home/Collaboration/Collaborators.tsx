import { NavLink } from "react-router-dom"


const Collaboration = () => {
    return (
        <section className="wrapper">
            <div>
                {/* Whatever the heck's going on in this img */}
            </div>
            <div>
                <h2>Collaboration with Top Brands</h2>
                <p>We collaborate with a number of top tier companies on imagining the future of work. Have a look.</p>
                <NavLink to="/">Learn more &rarr;</NavLink>
            </div>
        </section>
    )
}

export default Collaboration