import AboutAccordion from "./Accordion/AboutAccordion"
import AboutSearch from "./Form/AboutSearch"

const AboutUs = () => {
    return (
        <section className="wrapper-sm md:wrapper flex flex-col lg:flex-row gap-8 py-12">
            <AboutAccordion />
            <AboutSearch />
        </section>
    )
}

export default AboutUs