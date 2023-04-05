//Images
import logoFacebook from '../../assets/index/logos/logo-facebook.svg';
import logoInstagram from '../../assets/index/logos/logo-instagram.svg';
import logoPinterest from '../../assets/index/logos/logo-pinterest.svg';
//Components
import ListItemLinks from '../Global/LILinks/ListItemLinks';

const Aside = () => {
  return (
    <aside className="pt-12 flex justify-between text-white wrapper">
      <ul className="flex justify-between gap-4">
        <ListItemLinks url='/' text='Privacy & Terms' extraClasses='hover:opacity-70'/>
        <ListItemLinks url='/' text='Contact Us' extraClasses='hover:opacity-70'/>
      </ul>
      <p className="text-xs opacity-60">Copyright @2022 jobi inc.</p>
      <ul className="flex justify-between gap-4">
        <li className='transition-all hover:opacity-70 focus:opacity-70'>
          <a href="/">
            <img src={logoFacebook} alt="Visit our Facebook page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-70 focus:opacity-70'>
          <a href="/">
            <img src={logoInstagram} alt="Visit our Instagram page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-70 focus:opacity-70'>
          <a href="/">
            <img src={logoPinterest} alt="Visit our Pinterest page" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Aside