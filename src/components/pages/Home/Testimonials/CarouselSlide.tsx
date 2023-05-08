import { TestimonialCarouselProps } from "../../../../types/propTypes"
import TestimonialSlideContent from "./TestimonialSlideContent"

const CarouselSlide = ({ slideData, slideNum, current }: TestimonialCarouselProps) => {
    return (
        <div
            aria-hidden={current === slideNum ? "false" : "true"}
            role="group"
            aria-roledescription="slide"
            aria-label={`Carousel slide ${slideNum + 1} of 3, contains two items.`}
            className="w-full shrink-0"
        >
            <ul className="w-full h-full flex flex-col justify-evenly items-center gap-8 md:flex-row" >
                {
                    slideData.map(({ heading, text, name, location, img, stars, id }) => (
                        <TestimonialSlideContent
                            key={id}
                            heading={heading}
                            text={text}
                            name={name}
                            location={location}
                            img={img}
                            stars={stars}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default CarouselSlide