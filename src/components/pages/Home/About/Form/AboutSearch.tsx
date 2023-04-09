//component imports
import AboutImgGrid from "./AboutImgGrid"
import AboutSearchForm from "./AboutSearchForm"
import CandidatesDiv from "./CandidatesDiv"
import PaymentDiv from "./PaymentDiv"

const AboutSearch = () => {
    return (
        <div className="basis-1/2 relative">
            <AboutImgGrid />
            <PaymentDiv />
            <AboutSearchForm />
            <CandidatesDiv />
        </div>
    )
}

export default AboutSearch