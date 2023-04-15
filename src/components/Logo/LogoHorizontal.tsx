import { Link } from 'react-router-dom';
import jobiLogo from '../../assets/index/logos/logo-jobi.png';

type PropsType = {
    children?: JSX.Element,
    alt: string
}

const LogoHorizontal = ({ children, alt }: PropsType) => {
    return (
        <div className='transition-all border-2 border-transparent rounded-lg p-1 hover:border-jobi-green-lime focus-within:border-jobi-green-lime'>
            <Link to="/" >
                <img src={jobiLogo} alt={alt} />
                {children}
            </Link>
        </div>
    )
}

export default LogoHorizontal