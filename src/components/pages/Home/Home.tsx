import AboutUs from "./About/AboutUs"
import BannerBottom from "./BannerBottom/BannerBottom"
import BlogHighlights from "./Blog/BlogHighlights"
import Categories from "./Categories/Categories"
import Collaboration from "./Collaboration/Collaborators"
import HowItWorks from "./HowItWorks/HowItWorks"
import JobListings from "./JobListings/JobListings"
import Partners from "./Partners/Partners"
import Testimonials from "./Testimonials/Testimonials"

const Home = () => {
    return (
        <>
            <Partners />
            <Categories />
            <JobListings />
            <HowItWorks />
            <AboutUs />
            <Testimonials />
            <BlogHighlights />
            <Collaboration />
            <BannerBottom />
        </>
    )
}

export default Home