//logos
import googleLogo from '../../../../assets/index/logos/logo-google.png';
import shipBobLogo from '../../../../assets/index/logos/logo-shipbob.png';
import dribbbleLogo from '../../../../assets/index/logos/logo-dribbble.png';
import slackLogo from '../../../../assets/index/logos/logo-slack.png';
import vineLogo from '../../../../assets/index/logos/logo-vine.png';
import airbnbLogo from '../../../../assets/index/logos/logo-airbnb.png';

const Partners = () => {
    return (
        <section className="wrapper py-4">
            <h2 className="sr-only">Our Partners</h2>
            <ul className="flex justify-center items-center gap-10">
                <li><img src={googleLogo} alt="Partnered with Google" /></li>
                <li><img src={shipBobLogo} alt="Partnered with ShipBob" /></li>
                <li><img src={dribbbleLogo} alt="Partnered with Dribbble" /></li>
                <li><img src={slackLogo} alt="Partnered with Slack" /></li>
                <li><img src={vineLogo} alt="Partnered with Vine" /></li>
                <li><img src={airbnbLogo} alt="Partnered with AirBnB" /></li>
            </ul>
        </section>
    )
}

export default Partners