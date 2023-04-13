import quotations from "../../../../assets/index/button-icons/icon-quotes.svg";

type Props = {
    heading: string,
    text: string,
    name: string,
    location: string,
    img: string
}

const TestimonialCarousel = ({heading, text, name, location, img}: Props) => {
    return (
        <li className="bg-white p-8 rounded-md self-stretch md:p-11 md:w-2/3 lg:w-2/5">
            <div className="flex items-center justify-between">
                <h3 className="text-lg text-jobi-green-bright leading-loose">
                    {heading}
                    <span className="block">⭐⭐⭐⭐⭐</span>
                </h3>
                <img src={quotations} alt="Quotation marks icon" />
            </div>
            <p className="text-base leading-loose py-6">
                {text}
            </p>
            <div className="flex justify-between items-center py-4">
                <p className="text-sm leading-loose">
                    <span className="font-bold">{name},</span> {location}
                </p>
                <div className="h-20 w-20 rounded-full overflow-hidden">
                    <img src={img} alt={name} />
                </div>
            </div>
        </li>
    )
}

export default TestimonialCarousel