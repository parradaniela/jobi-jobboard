//react imports
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DatabaseContext } from "../../../../context/DatabaseContext"
// components
import JobListItem from "./JobListItem"

const JobListings = () => {
    const { jobData } = useContext(DatabaseContext)
    //TODO: Update job data to actually include dates and update this to be a real function that checks for the five most recent ones
    const mostRecent = jobData.slice(0, 5)
    return (
        <section className="wrapper">
            <div className="flex justify-between items-center py-8">
                <h2 className="text-6xl">New Job Listings</h2>
                <NavLink to="job-list" className="text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark">
                    Explore all jobs &rsaquo;
                </NavLink>
            </div>
            <ul className="flex flex-col gap-4 justify-center items-center py-4">
                {
                    mostRecent.map(({categories, city, country, experience, id, salaryEnd, salaryStart, salaryType, title, type}) => {
                        return (
                            <JobListItem
                                key={id} //TODO: Add ID numbers to jobs to use as keys (and routes)
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
            <aside className="text-center">
                <p className="border-2 border-black inline-block py-1 px-3 rounded-full">
                    Do you want to post a job for your company?&nbsp;
                    <span className="text-jobi-green-bright font-semibold">
                        We can help.&nbsp;
                        <NavLink to="/" className="font-normal underline hover:text-jobi-green-dark focus:text-jobi-green-dark transition-colors">
                            Click here
                        </NavLink>
                    </span>
                </p>
            </aside>
        </section>
    )
}

export default JobListings
