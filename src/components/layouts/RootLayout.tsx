import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const RootLayout = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout