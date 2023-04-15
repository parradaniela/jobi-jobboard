//Images
import logoFacebook from '../../assets/index/logos/logo-facebook.svg';
import logoInstagram from '../../assets/index/logos/logo-instagram.svg';
import logoPinterest from '../../assets/index/logos/logo-pinterest.svg';
//Components
import ListItemLinks from '../Global/LILinks/ListItemLinks';

const Aside = () => {
  return (
    <aside className="pt-12 flex flex-col justify-between text-white wrapper xl:flex-row">
      <ul className="flex flex-col text-center justify-between gap-4 xl:flex-row">
        <ListItemLinks url='/' text='Privacy & Terms' extraClasses='hover:text-jobi-green-lime focus-within:text-jobi-green-lime  '/>
        <ListItemLinks url='/' text='Contact Us' extraClasses='hover:text-jobi-green-lime focus-within:text-jobi-green-lime '/>
      </ul>
      <p className="text-xs opacity-60 my-4 text-center xl:my-0 xl:text-left">Copyright @2022 jobi inc.</p>
      <ul className="flex justify-center gap-4 xl:justify-between">
        <li className='transition-all hover:opacity-70 focus-within:opacity-70'>
          <a href="/">
            <img src={logoFacebook} alt="Visit our Facebook page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-70 focus-within:opacity-70'>
          <a href="/">
            <img src={logoInstagram} alt="Visit our Instagram page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-70 focus-within:opacity-70'>
          <a href="/">
            <img src={logoPinterest} alt="Visit our Pinterest page" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Aside