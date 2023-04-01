// type imports
import { JobData } from "../../../../types/databaseTypes"
// component imports
import Button from "../../../Global/Buttons/Button"

const JobListItem = ({title, type, date, company, country, city, categories, id}: JobData) => {
    return (
        <li className="w-4/5 grid grid-cols-5 gap-8 items-start">
            <div>
                <img src="#" alt="img here" />
            </div>
            <h3 className="font-bold capitalize">{title}</h3>
            <div>
                <p className={
                    type === 'fulltime' ? "text-jobi-green-bright font-semibold capitalize" : "text-red-600 font-semibold capitalize"
                }>
                    {type}</p>
                <p className="font-light">{date} by <span className=" font-bold">{company}</span></p>
            </div>
            <div>
                <p className="capitalize font-light">{country}, {city}</p>
                {
                    categories.map(category => (
                        <p key={category} className="font-bold capitalize">{category}, </p>
                    ))
                }
            </div>
            <div className="flex justify-between items-center">
                <button>Bookmark</button>
                <Button style={"btn-green"} corners={"rounded-full"}>Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem