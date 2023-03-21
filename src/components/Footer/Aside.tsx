//Images
import logoFacebook from '../../assets/index/logos/logo-facebook.svg';
import logoInstagram from '../../assets/index/logos/logo-instagram.svg';
import logoPinterest from '../../assets/index/logos/logo-pinterest.svg';
//Components
import ListItemLinks from '../Global/LILinks/ListItemLinks';

const Aside = () => {
  return (
    <aside className="flex justify-between text-white wrapper">
        <ul className="flex justify-between">
            <ListItemLinks url={'/'} text={'Privacy & Terms'} />
            <ListItemLinks url={'/'} text={'Contact Us'} />
            
        </ul>
        <p className="text-xs opacity-60">Copyright @2022 jobi inc.</p>
        <ul className="flex justify-between">
            <li><img src={logoFacebook} alt="Visit our Facebook page" /></li>
            <li><img src={logoInstagram} alt="Visit our Instagram page" /></li>
            <li><img src={logoPinterest} alt="Visit our Pinterest page" /></li>
        </ul>
    </aside>
  )
}

export default Aside