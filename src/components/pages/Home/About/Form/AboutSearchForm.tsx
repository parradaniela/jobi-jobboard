import Button from "../../../../Global/Buttons/Button"
import magnifyingGlass from "../../../../../assets/index/icons/icon-eyeglass.svg"

const AboutSearchForm = () => {
    return (
        <form action="submit" className="flex flex-col items-center gap-4 text-lg font-gordita w-full lg:flex-row lg:absolute lg:top-[20%] lg:right-0 lg:w-3/4">
            <label htmlFor="aboutSearch" className="text-jobi-green-dark lg:sr-only">Search for a designer, brand or logo</label>
            <input type="text" id="aboutSearch" placeholder="Designer, Brand, Logo" className="border-2 border-jobi-grey shadow-3xl p-6 rounded w-full lg:border-none lg:w-4/5" />
            <div className="w-full md:w-1/2 lg:self-stretch lg:w-auto">
                <Button style="btn-green" corners="rounded" extraClasses="shadow-3xl  px-8 group md:w-full h-full">
                    <img src={magnifyingGlass} alt="Search" />
                </Button>
            </div>
        </form>
    )
}

export default AboutSearchForm