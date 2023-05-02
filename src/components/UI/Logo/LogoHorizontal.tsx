import jobiLogo from '../../../assets/index/logos/logo-jobi.png';

type PropsType = {
    children?: JSX.Element,
    alt: string
}

const LogoHorizontal = ({ children, alt }: PropsType) => {
    return (
        <div className='transition-all border-2 border-transparent rounded-lg p-1 hover:border-jobi-green-lime focus-within:border-jobi-green-lime'>
            <a href="#header" >
                <img src={jobiLogo} alt={alt} title="Jobi" />
                {children}
            </a>
        </div>
    )
}

export default LogoHorizontal