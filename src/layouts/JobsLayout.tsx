//router imports
import { Outlet } from "react-router-dom"
//component imports
import Footer from "../components/UI/Footer/Light/Footer"
import Nav from "../components/UI/NavHeader/Nav"

const JobsLayout = () => {
    return (
        <>
            <header id="header" className="bg-jobi-green-dark">
                <a href="#main" className="inline-block absolute p-3 m-2 font-gordita text-lg rounded-md -left-full transition-all focus:bg-jobi-green-lime  focus:left-0">Skip to main</a>
                <Nav />
            </header>
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default JobsLayout