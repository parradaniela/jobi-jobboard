// type imports
import { JobData } from "../../../../types/databaseTypes"
// component imports
import Button from "../../../Global/Buttons/Button"
//image imports
import bookmark from "../../../../assets/index/button-icons/icon-bookmark.svg"
import screenIcon from '../../../../assets/index/icons/desktop-outline.svg'
import { IonIcon } from "@ionic/react"
import { desktopOutline } from "ionicons/icons"

const JobListItem = ({title, type, date, company, country, city, categories, id}: JobData) => {
    return (
        //TODO: Readjust this to have more columns and have each div take up different amount of columns
        <li className="transition-all w-full grid grid-auto-rows gap-4 items-center text-center px-4 py-4 border-1 border-gray-200 rounded-xl group md:text-left md:grid-cols-4 lg:grid-cols-5 lg:w-4/5 hover:bg-jobi-black hover:text-white  focus-within:bg-jobi-black focus-within:text-white md:justify-center">
            <div className="w-1/5 justify-self-center hidden lg:block">
                <IonIcon icon={desktopOutline} className="text-6xl"/>
            </div>
            <h3 className="text-center font-gorditaSemibold capitalize text-lg md:text-base">{title}</h3>
            <div className="flex justify-center gap-8 md:gap-4 lg:flex-col lg:gap-0">
                <p className={
                    type === 'fulltime' ? "text-jobi-green-bright capitalize" : "text-red-600 capitalize group-hover:text-rose-400 group-focus-within:text-rose-400"
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
                <button className="scale-150 border-1 border-gray-300 rounded-full p-3 transition-colors hover:bg-gray-500 focus:bg-gray-500 hover:border-gray-500 focus:border-gray-500 md:scale-100 md:p-2">
                    <img src={bookmark} alt="Save this job to your bookmarks" />
                </button>
                <Button style="btn-green" corners="rounded-full">Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem