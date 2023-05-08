
// Data
import { footerNavLinks, footerNavProducts, footerNavLegal } from './footerNavData';
// Components
import FooterNavListItem from './FooterNavListItem';
import EmailForm from './EmailForm';
import LogoBlack from '../../../Logo/LogoBlack';

const FooterNav = () => {
  return (
    <nav aria-label="Footer" className="flex flex-col justify-between items-center w-full xl:flex-row xl:items-start">
      <LogoBlack alt="Go back to top of Home page" />
      <ul className="flex flex-col text-center justify-center items-center sm:flex-row sm:flex-wrap xl:basis-1/2 py-4 xl:p-0 xl:text-left">
        <FooterNavListItem heading={'Links'} navLinks={footerNavLinks} />
        <FooterNavListItem heading={'Products'} navLinks={footerNavProducts} />
        <FooterNavListItem heading={'Legal'} navLinks={footerNavLegal} />
      </ul>
      <EmailForm />
    </nav>
  )
}

export default FooterNav