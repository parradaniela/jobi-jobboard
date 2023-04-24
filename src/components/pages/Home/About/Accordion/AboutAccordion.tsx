import Anchor from "../../../../Global/Buttons/Anchor"
import AccordionItem from "./AccordionItem"

const AboutAccordion = () => {
    
    return (
        <div className="flex flex-col basis-1/2">
            <h2 className="text-center lg:text-left ">
                <span className="text-jobi-green-dark text-base leading-loose font-gordita">Why choose us?</span>
                <span className="text-jobi-green-dark block text-4xl md:text-6xl font-gorditaSemibold  capitalize leading-tight">A world of talent at your fingertips</span>
            </h2>
            <ul className="py-4" aria-label="Accordion Control Group Buttons">
                <AccordionItem heading="Seamless Search" index={0}>
                    It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.
                </AccordionItem>
                <AccordionItem heading="Hire top talent" index={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero obcaecati labore architecto!
                </AccordionItem>
                <AccordionItem heading="Protected payments, every time" index={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quod quae, quos facilis dolorum esse quis sit velit! Officia?
                </AccordionItem>
            </ul>
            <div className="w-1/2 self-center lg:self-start">
                <Anchor style="btn-green" corners="rounded-full" url="/" extraClasses="w-1/5 flex justify-center items-center my-4">
                    Learn more
                </Anchor>
            </div>
        </div>
    )
}

export default AboutAccordion