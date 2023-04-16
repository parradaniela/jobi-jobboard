import AboutUs from "./About/AboutUs"
import BannerBottom from "./BannerBottom/BannerBottom"
import BlogHighlights from "./Blog/BlogHighlights"
import Categories from "./Categories/Categories"
import HowItWorks from "./HowItWorks/HowItWorks"
import JobListings from "./JobListings/JobListings"
import Partners from "./Partners/Partners"
import Testimonials from "./Testimonials/Testimonials"
import Trending from "./Trending/Trending"

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