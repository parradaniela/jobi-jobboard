//data
import partners from './partners.json';
//Component
import PartnerImg from "./PartnerImg"

const Partners = () => {
    return (
        <section className="wrapper">
            <h2 className="sr-only">Our Partners</h2>
            <ul className="flex justify-center items-center gap-10">
                {
                    partners.map((partner, i) => {
                        return (
                            <li key={i}>
                                <PartnerImg src={partner.src} alt={`Partnered with ${partner.name}`} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Partners