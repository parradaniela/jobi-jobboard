//Component imports
import AboutUs from "./AboutUs"
import BannerBottom from "./BannerBottom"
import BlogHighlights from "./BlogHighlights"
import Categories from "./Categories"
import HowItWorks from "./HowItWorks"
import JobListings from "./JobListings"
import Partners from "./Partners"
import Testimonials from "./Testimonials"
import Trending from "./Trending"

const Home = () => {
    return (
        <>
            <Partners />
            <Categories />
            <Trending />
            <JobListings />
            <HowItWorks />
            <AboutUs />
            <Testimonials />
            <BlogHighlights />
            <BannerBottom />
        </>
    )
}

export default Home