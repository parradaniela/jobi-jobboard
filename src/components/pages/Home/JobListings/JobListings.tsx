//react imports
import { NavLink } from "react-router-dom"
// components
import JobsList from "./JobsList"
import JobsAside from "./JobsAside"

const JobListings = () => {
    
    return (
        <section id="jobList" className="wrapper-sm py-8 font-gordita md:wrapper">
            <div className="transition-all flex flex-col gap-4 justify-between items-center py-4 md:py-8 md:flex-row">
                <h2 className="transition-all text-4xl text-center md:text-left md:text-6xl">New Job Listings</h2>
                <NavLink to="job-list" className="text-sm text-jobi-green-dark py-2 border-b-2 border-b-jobi-green-dark transition-all hover:text-jobi-black/50 hover:border-b-black/50 focus:text-black/50 focus:border-b-black/50">
                    Explore all jobs &rsaquo;
                </NavLink>
            </div>
            <JobsList />
            <JobsAside />
        </section>
    )
}

export default JobListings
