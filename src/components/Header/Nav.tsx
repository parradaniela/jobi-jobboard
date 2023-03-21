import Button from "../Global/Buttons/Button"
import ListItemLinks from "../Global/LILinks/ListItemLinks"
import LogoHorizontal from "../Logo/LogoHorizontal"

const Nav = () => {
    return (
        <nav className="flex items-center justify-evenly font-gordita bg-black text-white">
            <div>
                <LogoHorizontal alt={"Jobi Home Page"}>
                    <h1 className="sr-only">Jobi</h1>
                </LogoHorizontal>
            </div>

            <ul className="flex text-xs">
                <ListItemLinks url={'/'} text={'Home'} />
                <ListItemLinks url={'job-list'} text={'Jobs'} />
                <ListItemLinks url={'/'} text={'Explore'} />
                <ListItemLinks url={'/'} text={'Category'} />
                <ListItemLinks url={'/'} text={'Pages'} />
            </ul>

            <div>
                {/* <Link to="/">Login/Sign Up</Link> */}
                <Button style="outline" corners="rounded">Login/Sign Up</Button>
                <Button style="green" corners="rounded">Post a job</Button>
            </div>
        </nav>
    )
}

export default Nav