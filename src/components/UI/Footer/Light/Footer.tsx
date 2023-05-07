
import Aside from './Aside';
import FooterNav from './Nav/FooterNav';

const Footer = () => {
    return (
        <footer className="font-gordita bg-white text-black py-16">
            <div className="flex wrapper-sm md:wrapper">
                <FooterNav />
            </div>
            <Aside />
        </footer>
    )
}

export default Footer