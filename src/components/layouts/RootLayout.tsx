//react imports
import { Outlet } from "react-router-dom"
//component imports
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
//image imports
import background from "../../assets/index/photos/photo-group-mapbox.jpg";


const RootLayout = () => {
    console.log(background)
    return (
        <>
            <header className="bg-landing bg-center bg-cover">
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