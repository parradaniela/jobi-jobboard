
import Aside from './Aside';
import FooterNav from './Nav/FooterNav';

const Footer = () => {
    return (
        <footer className="font-gordita bg-jobi-green-dark text-white py-16">
            <div className="flex wrapper">
                <FooterNav />
            </div>
            <Aside />
        </footer>
    )
}

export default Footer