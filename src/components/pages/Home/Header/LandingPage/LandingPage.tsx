import FactList from "./FactList"
import SearchBox from "./SearchBox"


const LandingPage = () => {
    return (
        <div className="flex flex-col items-center font-gordita wrapper-sm  min-h-full md:justify-center md:wrapper">
            <h2 className="text-white text-center my-8 text-2xl md:text-7xl md:mt-[10%]">Find & Hire Experts <span className="block">for any Job</span></h2>
            <p className="text-sm text-white">Unlock your potential with quality jobs & earn from world leading brands.</p>
            <SearchBox />
            <FactList />
        </div>
    )
}

export default LandingPage