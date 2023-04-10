//component imports
import Button from "../../../Global/Buttons/Button"
import TestimonialCarousel from "./TestimonialCarousel"
//image imports
import carouselImgOne from "../../../../assets/index/headshots/headshot-josh-scorpio.jpg"
import carouselImgTwo from "../../../../assets/index/headshots/headshot-kaziminmizan-mizan.jpg"

const Testimonials = () => {
    return (
        <section className="py-8 font-gordita bg-testimonials bg-center">
            <div className="wrapper">
                <div className="flex items-end justify-between">
                    <h2 className="text-6xl leading-normal text-white w-1/2 capitalize">What do our clients think of us?</h2>
                    <div className="flex basis-1/12 justify-between text-white pb-4">
                        <Button style="btn-outline" corners="rounded-full" >
                            &larr;
                            <span className="sr-only">Previous reviews</span>
                        </Button>
                        <Button style="btn-green" corners="rounded-full" >
                            &rarr;
                            <span className="sr-only">Next reviews</span>
                        </Button>
                    </div>
                </div>
                <ul className="flex justify-center items-center gap-8 py-8">
                    <TestimonialCarousel
                        heading="Impressive!"
                        text="Amazing theme, I'm using it for our internal process & procedures, and it's working very well."
                        name="Rashed Ka"
                        location="Dhaka"
                        img={carouselImgOne}
                    />
                    <TestimonialCarousel
                        heading="Great work!!"
                        text="One of the best places that I found experts. Highly recommended!"
                        name="Zubayer Al Hasan"
                        location="USA"
                        img={carouselImgTwo}
                    />
                </ul>
            </div>


        </section>
    )
}

export default Testimonials