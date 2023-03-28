import { JobData } from "../../../../types/databaseTypes"
import Button from "../../../Global/Buttons/Button"

const JobListItem = ({title, type, date, company, country, city, categories, id}: JobData) => {
    return (
        <li className="flex">
            <h3>{title}</h3>
            <div>
                <p>{type}</p>
                <p>{date} by <span>{company}</span></p>
            </div>
            <div>
                <p>{country}, {city}</p>
                {
                    categories.map(category => (
                        <p key={category}>{category}, </p>
                    ))
                }
            </div>
            <div>
                <button>Bookmark</button>
                <Button style={"green"} corners={"rounded"}>Apply</Button>
            </div>
        </li>
    )
}

export default JobListItem