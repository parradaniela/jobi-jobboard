import AboutAccordion from "./AboutAccordion"
import AboutSearch from "./AboutSearch"


const AboutUs = () => {
    return (
        <section className="wrapper flex gap-16 py-8">
            <AboutAccordion />
            <AboutSearch />
        </section>
    )
}

export default AboutUs