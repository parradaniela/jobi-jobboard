import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DatabaseContext } from "../../../../context/DatabaseContext"

const JobListings = () => {
    // const { jobData } = useContext(DatabaseContext)
    // console.log(jobData)
    return (
        <section className="wrapper">
            <div className="flex">
                <h2>New Job Listing</h2>
                <NavLink to="job-list">Explore all jobs</NavLink>
            </div>
            <ul>
                {/* Firebase data goes here */}
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
