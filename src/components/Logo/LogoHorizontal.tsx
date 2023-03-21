import { Link } from 'react-router-dom';
import jobiLogo from '../../assets/index/logos/logo-jobi.png';

type PropsType = {
    children?: JSX.Element,
    alt: string
}

const LogoHorizontal = ({ children, alt }: PropsType) => {
    return (
        <div>
            <Link to="/">
                <img src={jobiLogo} alt={alt} />
                {children}
            </Link>
        </div>
    )
}

export default LogoHorizontal