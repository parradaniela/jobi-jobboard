//Component imports
import AboutAccordion from "../../components/pages/Home/About/Accordion/AboutAccordion"
import AboutSearch from "../../components/pages/Home/About/Form/AboutSearch"

const AboutUs = () => {
    return (
        <section className="wrapper-sm md:wrapper flex flex-col lg:flex-row gap-8 py-12">
            <AboutAccordion />
            <AboutSearch />
        </section>
    )
}

export default AboutUs