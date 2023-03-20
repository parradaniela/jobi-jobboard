import jobiLogo from '../../../assets/index/logos/logo-jobi.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="flex items-center justify-evenly">
            <div className="flex items-center">
                <Link to="/">
                    <img src={jobiLogo} alt="Site logo" />
                    <h1 className="sr-only">Jobi</h1>
                </Link>
            </div>

            <ul className="flex">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/job-list">Jobs</NavLink></li>
                <li><Link to="/">Explore</Link></li>
                <li><Link to="/">Category</Link></li>
                <li><Link to="/">Pages</Link></li>
            </ul>

            <div>
                <Link to="/">Login/Sign Up</Link>
                <Link to="/">Post a job</Link>
            </div>
        </nav>
    )
}

export default Nav