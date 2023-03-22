import TestimonialCarousel from "./TestimonialCarousel"


const Testimonials = () => {
    return (
        <section>
            <div className="wrapper">
                <div>
                    <h2>What do our clients think of us?</h2>
                    <div>
                        <button>&larr;</button>
                        <button>&rarr;</button>
                    </div>
                </div>
                <ul className="flex justify-between">
                    <TestimonialCarousel />
                    <TestimonialCarousel />
                </ul>
            </div>


        </section>
    )
}

export default Testimonials