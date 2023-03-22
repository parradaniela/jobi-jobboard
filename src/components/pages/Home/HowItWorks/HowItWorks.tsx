//images
import accountIcon from '../../../../assets/index/button-icons/icon-account.svg'
import docIcon from '../../../../assets/index/button-icons/icon-document.svg'
import pencilIcon from '../../../../assets/index/button-icons/icon-pencil.svg'
//Component
import StepCard from "./StepCard"

const HowItWorks = () => {
    return (
        <section>
            <div className="wrapper flex flex-col">
                <div className="">
                    <h2>Let's get started. <span className="block">It's simple.</span></h2>
                    <p>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
                </div>
                <ul className="flex">
                    <StepCard src={accountIcon} text={"It takes 2 minutes to open an account"} url={"error"} linkText={"Open Account"} />
                    <StepCard src={docIcon} text={"Find talent or search for your dream job"} url={"error"} linkText={"Apply or Hire"} />
                    <StepCard src={pencilIcon} text={"Get your work done quickly with jobi"} url={"error"} linkText={"Payment Methods"} />
                </ul>
            </div>
        </section>
    )
}

export default HowItWorks