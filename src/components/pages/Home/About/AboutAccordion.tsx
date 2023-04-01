import Button from "../../../Global/Buttons/Button"

const AboutAccordion = () => {
    return (
        <div className="basis-1/2">
            <h2>
                <span className="text-jobi-green-bright">Why choose us?</span>
                <span className="block">A world of talent at your fingertips</span>
            </h2>
            <ul>
                <li>
                    <h3>Seamless Search <span className="-rotate-45">&rsaquo;</span></h3>
                    <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.</p>
                </li>
                <li>
                    <h3>Hire top talent</h3>
                </li>
                <li>Protected payments, every time</li>
            </ul>
            <div>
                <Button style="btn-green" corners="rounded-full">Learn more</Button>
            </div>
        </div>
    )
}

export default AboutAccordion