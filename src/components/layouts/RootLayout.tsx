//react imports
import { NavLink, Outlet } from "react-router-dom"
//component imports
import Footer from "../Footer/Footer"
import Header from "../pages/Home/Header/Header"

const RootLayout = () => {
    
    return (
        <>
            <a href="#jobList" className="inline-block absolute p-3 m-2 font-gordita text-lg rounded-md -left-full transition-all focus:bg-jobi-green-lime  focus:left-0">Skip to Job List</a>
            <header id="header" className="bg-landing bg-center bg-cover min-h-screen">
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout