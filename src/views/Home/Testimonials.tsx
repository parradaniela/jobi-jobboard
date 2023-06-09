//component imports
import TestimonialCarousel from "../../components/pages/Home/Testimonials/TestimonialSlideContent";
//ionicons
import { IonIcon } from "@ionic/react"
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
//react imports
import { useEffect, useState } from "react";
//function imports
import { fetchFirebaseCollection } from "../../helpers/functions";
//type imports
import { TestimonialData } from "../../types/dataTypes";
import CarouselSlide from "../../components/pages/Home/Testimonials/CarouselSlide";

const Testimonials = () => {
    //TODO: Is it better to create an initial state for the testimonial data to use here instead of an empty array?
    const [reviews, setReviews] = useState<TestimonialData[] | []>([]);
    const [firstSlide, setFirstSlide] = useState<TestimonialData[] | []>([])
    const [secondSlide, setSecondSlide] = useState<TestimonialData[] | []>([])
    const [thirdSlide, setThirdSlide] = useState<TestimonialData[] | []>([])
    const [current, setCurrent] = useState(0)

    const prevSlide = () => setCurrent((current) => current === 0 ? 2 : current - 1)
    const nextSlide = () => setCurrent((current) => current === 2 ? 0 : current + 1)
    //TODO: Is it OK to use two useEffects like this? 
    useEffect(() => {
        fetchFirebaseCollection("testimonials", setReviews);
    }, []);

    useEffect(() => {
        setFirstSlide(reviews.slice(0, 2))
        setSecondSlide(reviews.slice(2, 4))
        setThirdSlide(reviews.slice(4))
    }, [reviews])

    return (
        <section
            className="py-8 font-gordita bg-testimonials bg-center md:py-16" >
            <div
                className="wrapper-sm overflow-hidden relative md:wrapper"
                role="region"
                aria-label="Testimonials"
                aria-roledescription="carousel"
            >
                <div className="md:flex items-end justify-between">
                    <h2 className="text-center capitalize text-3xl leading-normal text-white md:text-6xl md:leading-normal md:text-left lg:w-1/2 ">What do our clients think of us?</h2>
                    <div role="group" aria-label="Carousel slide controls" className="flex gap-4 my-4 basis-1/12 justify-center md:justify-between text-white pb-4">
                        <button onClick={prevSlide} className="transition-all flex items-center p-[10px] mx-4 border-1 border-white rounded-full hover:bg-jobi-green-lime hover:border-jobi-green-lime hover:text-black focus:bg-jobi-green-lime focus:border-jobi-green-lime focus:text-black" aria-label="Previous reviews">
                            <IonIcon icon={arrowBackOutline} className="text-2xl" />
                        </button>
                        <button onClick={nextSlide} className="transition-all border-1 text-black border-jobi-green-lime bg-jobi-green-lime p-[10px] rounded-full flex items-center hover:bg-jobi-green-bright hover:border-jobi-green-bright focus:bg-jobi-green-bright focus:border-jobi-green-bright" aria-label="Next reviews">
                            <IonIcon icon={arrowForwardOutline} className="text-2xl" />
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex transition-transform ease-out duration-500 md:mt-16" style={{ transform: `translateX(-${current * 100}%)` }}>
                    <CarouselSlide slideData={firstSlide} slideNum={0} current={current} />
                    <CarouselSlide slideData={secondSlide} slideNum={1} current={current} />
                    <CarouselSlide slideData={thirdSlide} slideNum={2} current={current} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials