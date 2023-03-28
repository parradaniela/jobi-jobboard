//react imports
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DatabaseContext } from "../../../../context/DatabaseContext"
// components
import JobListItem from "./JobListItem"

const JobListings = () => {
    const { jobData } = useContext(DatabaseContext)
    console.log(jobData)
    return (
        <section className="wrapper">
            <div className="flex">
                <h2>New Job Listing</h2>
                <NavLink to="job-list">Explore all jobs</NavLink>
            </div>
            <ul className="">
                {
                    jobData.map(({categories, city, country, experience, salaryEnd, salaryStart, salaryType, title, type}, i) => {
                        return (
                            <JobListItem
                                key={i} //TODO: Add ID numbers to jobs to use as keys (and routes)
                                categories={categories}
                                city={city}
                                country={country}
                                company={"test"}
                                date={"today"}
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
            <aside>
                <p>
                    Do you want to post a job for your company? 
                    <span>
                        We can help. <NavLink to="error">Click here</NavLink>
                    </span>
                </p>
            </aside>
        </section>
    )
}

export default JobListings
