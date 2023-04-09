import Button from "../../../../Global/Buttons/Button"
import magnifyingGlass from "../../../../../assets/index/icons/icon-eyeglass.svg"

const AboutSearchForm = () => {
    return (
        <form action="submit" className="absolute top-[20%] right-0 flex items-center gap-4 w-3/4 text-lg font-gordita">
            <label htmlFor="aboutSearch" className="sr-only">Search for a designer, brand or logo</label>
            <input type="text" id="aboutSearch" placeholder="Designer, Brand, Logo" className="shadow-3xl p-6 rounded w-4/5" />
            <Button style="btn-green" corners="rounded" extraClasses="shadow-3xl self-stretch px-8">
                <img src={magnifyingGlass} alt="Search" />
            </Button>
        </form>
    )
}

export default AboutSearchForm