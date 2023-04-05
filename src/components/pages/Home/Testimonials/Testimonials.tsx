import Button from "../../../Global/Buttons/Button"
import TestimonialCarousel from "./TestimonialCarousel"


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
                    <TestimonialCarousel />
                    <TestimonialCarousel />
                </ul>
            </div>


        </section>
    )
}

export default Testimonials