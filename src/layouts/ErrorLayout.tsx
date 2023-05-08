//router imports
import { Outlet } from "react-router-dom"
//component imports
import Nav from "../components/UI/NavHeader/Nav"
import Error from "../views/Error/Error"

const ErrorLayout = () => {
    return (
        <>
            <header id="header" className="bg-black">
                <Nav />
            </header>
            <main id="main">
                <Error />
            </main>
        </>
    )
}

export default ErrorLayout