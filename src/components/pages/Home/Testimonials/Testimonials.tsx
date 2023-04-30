//component imports
import TestimonialCarousel from "./TestimonialCarousel"
//image imports
import carouselImgOne from "../../../../assets/index/headshots/headshot-josh-scorpio.jpg"
import carouselImgTwo from "../../../../assets/index/headshots/headshot-kaziminmizan-mizan.jpg"
//ionicons
import { IonIcon } from "@ionic/react"
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

const Testimonials = () => {
    return (
        <section className="py-8 font-gordita bg-testimonials bg-center">
            <div className="wrapper-sm md:wrapper">
                <div className="md:flex items-end justify-between">
                    <h2 className="text-center text-3xl md:text-6xl leading-normal text-white md:text-left lg:w-1/2 capitalize">What do our clients think of us?</h2>
                    <div className="flex gap-4 my-4 basis-1/12 justify-center md:justify-between text-white pb-4">
                        <button className="transition-all flex items-center p-[10px] mx-4 border-1 border-white rounded-full hover:bg-jobi-green-lime hover:border-jobi-green-lime hover:text-black focus:bg-jobi-green-lime focus:border-jobi-green-lime focus:text-black" aria-label="Previous reviews">
                            <IonIcon icon={arrowBackOutline} className="text-2xl" />
                        </button>
                        <button className="transition-all border-1 text-black border-jobi-green-lime bg-jobi-green-lime p-[10px] rounded-full flex items-center hover:bg-jobi-green-bright hover:border-jobi-green-bright focus:bg-jobi-green-bright focus:border-jobi-green-bright" aria-label="Next reviews">
                            <IonIcon icon={arrowForwardOutline} className="text-2xl" />
                        </button>
                    </div>
                </div>
                <ul className="flex flex-col justify-center items-center gap-8 py-8 md:flex-row">
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