//react imports
import { Outlet } from "react-router-dom"
//component imports
import Footer from "../Footer/Footer"
import Header from "../pages/Home/Header/Header"

const RootLayout = () => {
    
    return (
        <>
            <header className="bg-landing bg-center bg-cover min-h-screen">
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