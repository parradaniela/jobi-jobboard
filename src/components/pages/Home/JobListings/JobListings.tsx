//react imports
import { NavLink } from "react-router-dom"
// components
import JobsList from "./JobsList"
import JobsAside from "./JobsAside"

const JobListings = () => {
    
    return (
        <section className="wrapper-sm py-8 font-gordita md:wrapper">
            <div className="transition-all flex flex-col gap-4 justify-between items-center py-4 md:py-8 md:flex-row">
                <h2 className="transition-all text-4xl text-center md:text-left md:text-6xl">New Job Listings</h2>
                <NavLink to="job-list" className="text-sm text-jobi-green-bright py-2 border-b-2 border-b-jobi-green-bright transition-all hover:text-jobi-green-dark hover:border-b-jobi-green-dark focus:text-jobi-green-dark focus:border-b-jobi-green-dark">
                    Explore all jobs &rsaquo;
                </NavLink>
            </div>
            <JobsList />
            <JobsAside />
        </section>
    )
}

export default JobListings
