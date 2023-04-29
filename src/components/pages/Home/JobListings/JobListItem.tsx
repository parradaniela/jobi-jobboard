// type imports
import { JobData } from "../../../../types/databaseTypes"
// component imports
import Button from "../../../Global/Buttons/Button"
//image imports
import { IonIcon } from "@ionic/react"
import { desktopOutline, bookmarksOutline } from "ionicons/icons"

const JobListItem = ({ title, type, date, company, country, city, categories, id }: JobData) => {
    return (
        //TODO: Readjust this to have more columns and have each div take up different amount of columns
        <li className="text-black transition-all w-full grid grid-auto-rows gap-4 items-center text-center px-4 py-4 border-1 border-gray-200 rounded-xl group md:text-left md:grid-cols-4 lg:grid-cols-5 lg:w-4/5 md:justify-center">
            <div className="w-1/5 justify-self-center hidden lg:block">
                <IonIcon icon={desktopOutline} className="text-6xl" />
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
            <div className="justify-self-center flex justify-center items-center gap-4 w-2/3 md:w-auto">
                <button className="flex justify-center border-1 text-jobi-green-dark border-jobi-green-dark rounded-full transition-colors hover:bg-jobi-green-lime focus:bg-jobi-green-lime hover:border-jobi-green-lime focus:border-jobi-green-lime md:scale-100">
                    <span className="sr-only">Click here to bookmark this job posting</span>
                    <IonIcon icon={bookmarksOutline} className="text-lg p-4 md:p-2" />
                </button>
                <Button style="btn-green" corners="rounded-full">Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem