//logos
import googleLogo from '../../../../assets/index/logos/logo-google.png';
import shipBobLogo from '../../../../assets/index/logos/logo-shipbob.png';
import dribbbleLogo from '../../../../assets/index/logos/logo-dribbble.png';
import slackLogo from '../../../../assets/index/logos/logo-slack.png';
import vineLogo from '../../../../assets/index/logos/logo-vine.png';
import airbnbLogo from '../../../../assets/index/logos/logo-airbnb.png';

const Partners = () => {
    // Set full basis for Vine logo to keep more consistent column shapes in smallest screen sizes, then back to auto at small breakpoint 
    return (
        <section className="bg-jobi-grey-light py-8">
            <div className="wrapper-sm md:wrapper">
                <h2 className="sr-only">Our Partners</h2>
                <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
                    <li><img src={googleLogo} alt="Partnered with Google" title="Partnered with Google" /></li>
                    <li><img src={shipBobLogo} alt="Partnered with ShipBob" title="Partnered with ShipBob" /></li>
                    <li><img src={dribbbleLogo} alt="Partnered with Dribbble" title="Partnered with Dribbble" /></li>
                    <li><img src={slackLogo} alt="Partnered with Slack" title="Partnered with Slack" /></li>
                    <li className='basis-full flex justify-center sm:basis-auto'><img src={vineLogo} alt="Partnered with Vine" title="Partnered with Vine" /></li>
                    <li><img src={airbnbLogo} alt="Partnered with AirBnB" title="Partnered with AirBnB" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Partners