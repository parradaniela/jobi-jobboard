import Anchor from "../../../Global/Buttons/Anchor"

const AboutAccordion = () => {
    return (
        <div className="basis-1/2">
            <h2>
                <span className="text-jobi-green-bright text-base leading-loose font-gordita">Why choose us?</span>
                <span className="text-jobi-green-dark block text-6xl font-gorditaSemibold  capitalize leading-tight">A world of talent at your fingertips</span>
            </h2>
            <ul className="py-4">
                <li className="border-b-gray-300 border-b-1 py-6">
                    <h3 className="text-2xl text-jobi-green-dark font-gorditaSemibold leading-loose cursor-pointer">Seamless Search <span className="-rotate-45">&rsaquo;</span></h3>
                    <p className="font-gorditaLight text-base leading-normal">It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.</p>
                </li>
                <li className="border-b-gray-300 border-b-1 py-6">
                    <h3 className="text-2xl text-jobi-green-dark font-gorditaSemibold cursor-pointer">Hire top talent <span className="-rotate-45">&rsaquo;</span></h3>
                </li>
                <li className="border-b-gray-300 border-b-1 py-6">
                    <h3 className="text-2xl text-jobi-green-dark font-gorditaSemibold cursor-pointer">Protected payments, every time <span className="-rotate-45">&rsaquo;</span></h3>
                </li>
            </ul>
            <div>
                <Anchor style="btn-green" corners="rounded-full" url="/" extraClasses="w-1/5 flex justify-center items-center my-4">Learn more</Anchor>
            </div>
        </div>
    )
}

export default AboutAccordion