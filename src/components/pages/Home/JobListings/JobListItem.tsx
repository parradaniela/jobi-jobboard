// type imports
import { JobData } from "../../../../types/dataTypes"
// component imports
import Button from "../../../UI/Buttons/Button"
//image imports
import bookmarkImg from "../../../../assets/index/button-icons/icon-bookmark.svg"
//ionicons
import { IonIcon } from "@ionic/react"
import { desktopOutline, bookmarksOutline } from "ionicons/icons"

const JobListItem = ({ title, type, date, company, country, city, categories, id }: JobData) => {
    return (
        //TODO: Readjust this to have more columns and have each div take up different amount of columns
        <li className="text-black transition-all w-full grid grid-auto-rows gap-4 items-center text-center px-4 py-4 border-1 border-gray-200 rounded-xl group md:text-left md:grid-cols-4 lg:grid-cols-5 lg:w-4/5 md:justify-center">
            <div className="w-1/5 justify-self-center hidden lg:block" aria-hidden="true">
                <IonIcon icon={desktopOutline} className="text-6xl" role="presentation" />
            </div>
            <h3 className="text-center font-gorditaSemibold capitalize text-lg md:text-base">{title}</h3>
            <div className="flex justify-center gap-8 md:gap-4 lg:flex-col lg:gap-0">
                <p className={
                    type === 'fulltime' ? "text-jobi-green-dark capitalize" : "text-red-700 capitalize"
                }>
                    {type}</p>
                <p className="font-gorditaLight">{date} by <span className="font-semibold">{company}</span></p>
            </div>
            <div className="text-center">
                <p className="capitalize font-gorditaLight mb-3 md:mb-0">{country}, {city}</p>
                <div className="flex flex-col justify-evenly items-center text-center">
                    {
                        categories.map(category => (
                            <p key={category} className="font-gorditaSemibold capitalize">{category}, </p>
                        ))
                    }
                </div>
            </div>
            <div className="justify-self-center flex justify-center items-center gap-4 w-2/3 sm:w-1/3 md:w-auto">
                <button className="w-12 h-12 flex justify-center border-1 border-black bg-black p-3 rounded-full transition-colors hover:bg-gray-400 focus:bg-gray-400 hover:border-gray-400 focus:border-gray-400 sm:w-10 sm:h-10 sm:p-2" aria-label="Bookmark">
                    <img src={bookmarkImg} alt="Click to bookmark this job posting" />
                </button>
                <Button ariaLabel="Click here to apply to this job" style="btn-green" corners="rounded-full">Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem