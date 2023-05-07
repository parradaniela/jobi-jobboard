import jobiLogo from '../../../assets/index/logos/logo-jobi-black.png';

type PropsType = {
    children?: JSX.Element,
    alt: string
}

const LogoBlack = ({ children, alt }: PropsType) => {
    return (
        <div className='transition-all border-2 border-transparent rounded-lg p-1 hover:border-black focus-within:border-black'>
            <a href="/#header" >
                <img src={jobiLogo} alt={alt} title="Jobi" />
                {children}
            </a>
        </div>
    )
}

export default LogoBlack