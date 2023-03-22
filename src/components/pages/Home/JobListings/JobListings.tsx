import { NavLink } from "react-router-dom"


const JobListings = () => {
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
