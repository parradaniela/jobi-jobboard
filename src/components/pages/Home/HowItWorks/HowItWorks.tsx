//images
import accountIcon from '../../../../assets/index/button-icons/icon-account.svg'
import docIcon from '../../../../assets/index/button-icons/icon-document.svg'
import pencilIcon from '../../../../assets/index/button-icons/icon-pencil.svg'
import playIcon from '../../../../assets/index/button-icons/icon-video-play.svg'
//Component
import StepCard from "./StepCard"

const HowItWorks = () => {
    return (
        <section className="bg-get-started bg-cover py-12 font-gordita xl:py-44">
            <div className="wrapper-sm md:wrapper flex flex-col gap-4 xl:gap-8">
                <div className="flex flex-col items-center text-center xl:text-left xl:self-end xl:items-start xl:w-1/3 mx-10">
                    <div className='my-2'>
                        <img src={playIcon} alt="How does it work?" />
                    </div>
                    <h2 className="text-6xl font-medium text-white">Let's get started.</h2>
                    <p className="text-4xl lg:text-6xl text-white py-8">It's <span className="text-jobi-green-lime lg:text-jobi-green-bright">simple.</span></p>
                    <p className='text-white'>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
                </div>
                <ul className="flex flex-wrap justify-center items-center gap-12">
                    <StepCard
                        src={accountIcon}
                        text="It takes 2 minutes to open an account"
                        url="/"
                        linkText="Open Account"
                        stepNumber="1"
                    />
                    <StepCard
                        src={docIcon}
                        text="Find talent or search for your dream job"
                        url="/"
                        linkText="Apply or Hire"
                        stepNumber="2"
                    />
                    <StepCard
                        src={pencilIcon}
                        text="Get your work done quickly with jobi"
                        url="/"
                        linkText="Payment Methods"
                        stepNumber="3"
                    />
                </ul>
            </div>
        </section>
    )
}

export default HowItWorks