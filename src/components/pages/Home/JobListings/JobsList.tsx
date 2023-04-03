//react imports
import { useContext } from "react"
import { DatabaseContext } from "../../../../context/DatabaseContext"
//component imports
import JobListItem from "./JobListItem"


const JobsList = () => {
    const { jobData } = useContext(DatabaseContext)
    //TODO: Update job data to actually include dates and update this to be a real function that checks for the five most recent ones
    const mostRecent = jobData.slice(0, 5)
    return (
        <ul className="flex flex-col gap-4 justify-center items-center py-8">
            {
                mostRecent.map(({ categories, city, country, experience, id, salaryEnd, salaryStart, salaryType, title, type }) => {
                    return (
                        <JobListItem
                            key={id}
                            categories={categories}
                            city={city}
                            country={country}
                            company={"test"}
                            date={"today"}
                            id={id}
                            experience={experience}
                            salaryEnd={salaryEnd}
                            salaryStart={salaryStart}
                            salaryType={salaryType}
                            title={title}
                            type={type}
                        />
                    )
                })
            }
        </ul>
    )
}

export default JobsList