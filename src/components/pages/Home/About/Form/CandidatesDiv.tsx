//react imports
import { NavLink } from "react-router-dom";
//image imports
import headshotOne from "../../../../../assets/index/headshots/headshot-alexander-hipp.jpg";
import headshotTwo from "../../../../../assets/index/headshots/headshot-brian-lundquist.jpg";
import headshotThree from "../../../../../assets/index/headshots/headshot-alex-starnes.jpg";
import headshotFour from "../../../../../assets/index/headshots/headshot-zahir-namane.jpg";
//plusIcon courtesy of Ionicons https://ionic.io/ionicons
import plusIcon from "../../../../../assets/index/icons/add-outline.svg";

const CandidatesDiv = () => {
    return (
        <div className="absolute bottom-0 left-0 w-1/2 bg-white  rounded-lg shadow-3xl text-center flex flex-col justify-start items-center h-28 p-2 gap-2">
            <p className="font-gordita text-lg">18k+ candidates</p>
            <div className="flex items-center relative">
                <div className="w-16 h-16 rounded-full border-4 border-white absolute left-[-8rem] top-0 z-0 overflow-hidden">
                    <img src={headshotOne} alt="Headshot of one of our candidates" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white absolute left-[-5rem] top-0 z-10 overflow-hidden">
                    <img src={headshotTwo} alt="Headshot of one of our candidates" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white absolute left-[-2rem] top-0 z-20 overflow-hidden">
                    <img src={headshotThree} alt="Headshot of one of our candidates" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white absolute left-3 top-0 z-30 overflow-hidden">
                    <img src={headshotFour} alt="Headshot of one of our candidates"  />
                </div>
                <NavLink to="/" className="w-16 h-16 rounded-full border-4 border-white absolute left-14 top-0 z-40 bg-slate-400 transition-all hover:bg-slate-200">
                    <img src={plusIcon} alt="Click here to view all our candidates" />
                </NavLink>
            </div>
        </div>
    )
}

export default CandidatesDiv