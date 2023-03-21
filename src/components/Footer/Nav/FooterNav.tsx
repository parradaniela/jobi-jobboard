
// Data
import { footerNavLinks, footerNavProducts, footerNavLegal } from './footerNavData';
// Components
import LogoHorizontal from '../../Logo/LogoHorizontal';
import FooterNavListItem from './FooterNavListItem';
import EmailForm from './EmailForm';

const FooterNav = () => {
  return (
    <nav aria-label="Footer" className="flex justify-between items-start w-full">
        <LogoHorizontal alt="Go back to top of Home page"/>
        <ul className="flex justify-end basis-1/2">
            <FooterNavListItem heading={'Links'} navLinks={footerNavLinks} />
            <FooterNavListItem heading={'Products'} navLinks={footerNavProducts} />
            <FooterNavListItem heading={'Legal'} navLinks={footerNavLegal} />
        </ul>
        <EmailForm />
    </nav>
  )
}

export default FooterNav