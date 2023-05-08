//Images
import logoFacebookBlack from '../../../../assets/index/logos/logo-facebook-black.svg';
import logoInstagramBlack from '../../../../assets/index/logos/logo-instagram-black.svg';
import logoPinterestBlack from '../../../../assets/index/logos/logo-pinterest-black.svg';
//Components
import ListItemLinks from '../../LILinks/ListItemLinks';


const Aside = () => {
  return (
    <aside className="pt-12 flex flex-col justify-between text-black wrapper xl:flex-row">
      <ul className="flex flex-col text-center justify-between gap-4 xl:flex-row">
        <ListItemLinks url='/' text='Privacy & Terms' extraClasses='hover:text-jobi-green-bright focus-within:text-jobi-green-bright  ' />
        <ListItemLinks url='/' text='Contact Us' extraClasses='hover:text-jobi-green-bright focus-within:text-jobi-green-bright ' />
      </ul>
      <p className="text-xs opacity-80 my-4 text-center xl:my-0 xl:text-left">Copyright @2022 jobi inc.</p>
      <ul className="flex justify-center gap-4 xl:justify-between">
        <li className='transition-all hover:opacity-50 focus-within:opacity-50'>
          <a href="/">
            <img src={logoFacebookBlack} alt="Visit our Facebook page" title="Visit our Facebook page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-50 focus-within:opacity-50'>
          <a href="/">
            <img src={logoInstagramBlack} alt="Visit our Instagram page" title="Visit our Instagram page" />
          </a>
        </li>
        <li className='transition-all hover:opacity-50 focus-within:opacity-50'>
          <a href="/">
            <img src={logoPinterestBlack} alt="Visit our Pinterest page" title="Visit our Pinterest page" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Aside