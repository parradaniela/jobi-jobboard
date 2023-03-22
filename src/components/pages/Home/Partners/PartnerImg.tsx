type PropsType = {
    src: string,
    alt: string
}

const PartnerImg = ({ src, alt }: PropsType) => {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

export default PartnerImg