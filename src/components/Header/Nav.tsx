import Button from "../Global/Buttons/Button"
import ListItemLinks from "../Global/LILinks/ListItemLinks"
import LogoHorizontal from "../Logo/LogoHorizontal"

const Nav = () => {
    return (
        <nav className="flex items-center justify-evenly font-gordita text-white py-6">
            <div>
                <LogoHorizontal alt={"Jobi Home Page"}>
                    <h1 className="sr-only">Jobi</h1>
                </LogoHorizontal>
            </div>

            <ul className="flex text-sm gap-8 ">
                <ListItemLinks url="/" text="Home" extraClasses="hover:text-jobi-green-bright focus:text-jobi-green-bright"/>
                <ListItemLinks url="job-list" text="Jobs" extraClasses="hover:text-jobi-green-bright focus:text-jobi-green-bright"/>
                <ListItemLinks url="/" text="Explore" extraClasses="hover:text-jobi-green-bright focus:text-jobi-green-bright"/>
                <ListItemLinks url="/" text="Category" extraClasses="hover:text-jobi-green-bright focus:text-jobi-green-bright"/>
                <ListItemLinks url="/" text="Pages" extraClasses="hover:text-jobi-green-bright focus:text-jobi-green-bright"/>
            </ul>

            <div className="flex gap-8">
                {/* <Link to="/">Login/Sign Up</Link> */}
                <Button style="btn-outline" corners="rounded-full">Login/Sign Up</Button>
                <Button style="btn-green" corners="rounded-full">Post a job</Button>
            </div>
        </nav>
    )
}

export default Nav