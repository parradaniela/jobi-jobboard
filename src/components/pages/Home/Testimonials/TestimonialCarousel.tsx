import quotations from "../../../../assets/index/button-icons/icon-quotes.svg";

const TestimonialCarousel = () => {
    return (
        <li className="bg-white p-11 w-2/5 rounded-md">
            <div className="flex items-center justify-between">
                <h3 className="text-lg text-jobi-green-bright leading-loose">
                    Impressive!
                    <span className="block">⭐⭐⭐⭐⭐</span>
                </h3>
                {/* leaving alt text empty so image is skipped by screen readers */}
                <img src={quotations} alt="" />
            </div>
            <p className="text-base leading-loose py-6">Amazing theme, I'm using it for our internal process & procedures, and it's working very well.</p>
            <div className="flex justify-between items-center py-4">
                <p className="text-sm leading-loose">
                    <span className="font-bold">Rashed Ka,</span> Dhaka
                </p>
                <img src="#" alt="photo" />
            </div>
        </li>
    )
}

export default TestimonialCarousel