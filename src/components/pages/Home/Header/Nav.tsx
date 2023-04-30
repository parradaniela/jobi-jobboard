//react imports
import { useState } from "react"
//component imports
import Button from "../../../Global/Buttons/Button"
import ListItemLinks from "../../../Global/LILinks/ListItemLinks"
import LogoHorizontal from "../../../Logo/LogoHorizontal"
//ionicons
import { IonIcon } from "@ionic/react"
import { closeCircleOutline, menuOutline } from "ionicons/icons"

const Nav = () => {
    const [open, setOpen] = useState(false)

    const toggleMobileMenu = () => setOpen(!open)
    return (
        <>
            <button className="ml-[80%] mt-4 text-white text-6xl transition-all border-transparent rounded-lg p-1 border-2 hover:border-white focus:border-white md:hidden " onClick={toggleMobileMenu} aria-label="Open navigation menu">
                <IonIcon icon={menuOutline} />
            </button>
            <nav
                className={
                    open
                        ? `fixed top-0 left-0 transition-all duration-500 flex flex-col justify-evenly items-center gap-8 font-gordita min-h-screen w-full text-white bg-jobi-black py-6 
                        md:static md:flex-row md:min-h-fit md:gap-0 md:bg-transparent`
                        : `fixed top-0 left-full transition-all duration-500 flex flex-col justify-evenly items-center gap-8 font-gordita min-h-screen w-full invisible text-white bg-jobi-black py-6 
                        md:static md:flex-row md:min-h-fit md:gap-0 md:bg-transparent md:visible`
                }
            >
                <div className="flex justify-evenly items-center w-full md:w-auto">
                    <LogoHorizontal alt="Jobi Home Page">
                        <h1 className="sr-only">Jobi</h1>
                    </LogoHorizontal>
                    <button className="text-white text-6xl transition-all border-transparent rounded-lg p-1 border-2 hover:text-jobi-green-lime focus:text-jobi-green-lime md:hidden" onClick={toggleMobileMenu} aria-label="Close navigation menu">
                        <IonIcon icon={closeCircleOutline} />
                    </button>
                </div>

                <ul className="flex flex-col text-2xl text-center gap-8 md:flex-row md:text-base md:text-left" onClick={toggleMobileMenu}>
                    <ListItemLinks url="/" text="Home" extraClasses="hover:text-jobi-green-lime focus-within:text-jobi-green-lime" />
                    <ListItemLinks url="job-list" text="Jobs" extraClasses="hover:text-jobi-green-lime focus-within:text-jobi-green-lime" />
                    <ListItemLinks url="/" text="Explore" extraClasses="hover:text-jobi-green-lime focus-within:text-jobi-green-lime" />
                    <ListItemLinks url="/" text="Category" extraClasses="hover:text-jobi-green-lime focus-within:text-jobi-green-lime" />
                    <ListItemLinks url="/" text="Pages" extraClasses="hover:text-jobi-green-lime focus-within:text-jobi-green-lime" />
                </ul>

                <div className="flex flex-col gap-8 md:flex-row">
                    <Button style="btn-outline" corners="rounded-full">Login/Sign Up</Button>
                    <Button style="btn-lime" corners="rounded-full">Post a job</Button>
                </div>
            </nav>
        </>
    )
}

export default Nav