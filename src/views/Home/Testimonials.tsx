//component imports
import TestimonialCarousel from "../../components/pages/Home/Testimonials/TestimonialCarousel";
//ionicons
import { IonIcon } from "@ionic/react"
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
//react imports
import { useEffect, useState } from "react";
import { fetchFirebaseCollection } from "../../helpers/functions";
//type imports
import { TestimonialData } from "../../types/dataTypes";

const Testimonials = () => {
    const [reviews, setReviews] = useState<TestimonialData[] | []>([]);

    useEffect(() => {
        fetchFirebaseCollection("testimonials", setReviews);
    }, []);

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
                    {
                        reviews.map(({ heading, text, name, location, img, stars, id }) => (
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
                </ul>
            </div>
        </section>
    )
}

export default Testimonials