import AboutAccordion from "./Accordion/AboutAccordion"
import AboutSearch from "./Form/AboutSearch"

const AboutUs = () => {
    return (
        <section className="wrapper flex gap-12 py-12">
            <AboutAccordion />
            <AboutSearch />
        </section>
    )
}

export default AboutUs