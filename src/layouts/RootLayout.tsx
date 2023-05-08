//react imports
import { Outlet } from "react-router-dom"
//component imports
import Footer from "../components/UI/Footer/Dark/Footer"
import Nav from "../components/UI/NavHeader/Nav"
import LandingPage from "../components/pages/Home/LandingPage/LandingPage"

const RootLayout = () => {

    return (
        <>
            <header id="header" className="bg-landing bg-center bg-cover min-h-screen">
                <a href="#main" className="inline-block absolute p-3 m-2 font-gordita text-lg rounded-md -left-full transition-all focus:bg-jobi-green-lime  focus:left-0">Skip to main</a>
                <Nav />
                <LandingPage />
            </header>
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout