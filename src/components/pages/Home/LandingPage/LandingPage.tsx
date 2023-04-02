import FactList from "./FactList"
import SearchBox from "./SearchBox"


const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center font-gordita wrapper bg-slate-500 h-[80vh]">
            <h2 className="text-7xl text-white text-center my-8">Find & Hire Experts <span className="block">for any Job</span></h2>
            <p className="text-sm text-white">Unlock your potential with quality jobs & earn from world leading brands.</p>
            <SearchBox />
            <FactList />
        </div>
    )
}

export default LandingPage