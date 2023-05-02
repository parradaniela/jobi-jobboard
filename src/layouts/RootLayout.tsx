//react imports
import { NavLink, Outlet } from "react-router-dom"
//component imports
import Footer from "../components/Footer/Footer"
import Header from "../components/pages/Home/Header/Header"

const RootLayout = () => {

    return (
        <>
            <header id="header" className="bg-landing bg-center bg-cover min-h-screen">
                <a href="#main" className="inline-block absolute p-3 m-2 font-gordita text-lg rounded-md -left-full transition-all focus:bg-jobi-green-lime  focus:left-0">Skip to main</a>
                <Header />
            </header>
            <main id="main" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout