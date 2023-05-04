import { TestimonialCarouselProps } from "../../../../types/propTypes"
import TestimonialCarousel from "./TestimonialCarousel"

const CarouselSlide = ({ slideData }: TestimonialCarouselProps) => {
    return (
        <div className="flex flex-col gap-8 w-full shrink-0 ">
            {
                slideData.map(({ heading, text, name, location, img, stars, id }) => (
                    <TestimonialCarousel
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

        </div>
    )
}

export default CarouselSlide