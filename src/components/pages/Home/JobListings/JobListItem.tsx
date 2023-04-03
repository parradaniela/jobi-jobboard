// type imports
import { JobData } from "../../../../types/databaseTypes"
// component imports
import Button from "../../../Global/Buttons/Button"
//image imports
import bookmark from "../../../../assets/index/button-icons/icon-bookmark.svg"

const JobListItem = ({title, type, date, company, country, city, categories, id}: JobData) => {
    return (
        //TODO: Readjust this to have more columns and have each div take up different amount of columns
        <li className="w-4/5 grid grid-cols-5 gap-8 items-center px-4 py-2 border-1 border-gray-200  rounded-xl ">
            <div>
                <img src="#" alt="img here" />
            </div>
            <h3 className="font-gorditaSemibold capitalize text-base">{title}</h3>
            <div>
                <p className={
                    type === 'fulltime' ? "text-jobi-green-bright capitalize" : "text-red-600 capitalize"
                }>
                    {type}</p>
                <p className="font-gorditaLight">{date} by <span className="font-semibold">{company}</span></p>
            </div>
            <div>
                <p className="capitalize font-gorditaLight">{country}, {city}</p>
                {
                    categories.map(category => (
                        <p key={category} className="font-gorditaSemibold capitalize">{category}, </p>
                    ))
                }
            </div>
            <div className="flex justify-center items-center gap-4">
                <button className="border-1 border-gray-300 rounded-full p-2 transition-colors hover:bg-gray-500 focus:bg-gray-500 hover:border-gray-500 focus:border-gray-500">
                    <img src={bookmark} alt="Save this job to your bookmarks" />
                </button>
                <Button style="btn-green" corners="rounded-full">Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem