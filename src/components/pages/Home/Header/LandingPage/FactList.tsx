const FactList = () => {
    return (
        <ul className="flex flex-col pb-8 gap-4 justify-center items-center md:pb-0 md:justify-evenly md:items-between text-center text-white md:w-1/2 md:gap-0 md:flex-row">
            <li>
                <h3 className="text-lg flex flex-col items-center md:text-2xl md:gap-3">
                    30k+ <span className="text-sm">Worldwide Clients</span>
                </h3>
            </li>
            <li>
                <h3 className="text-lg flex flex-col items-center md:text-2xl gap-3">
                    3% <span className="text-sm">Top Talent</span>
                </h3>
            </li>
            <li>
                <h3 className="text-lg flex flex-col items-center md:text-2xl gap-3">
                    12mil <span className="text-sm">Dollar Payout</span>
                </h3>
            </li>
        </ul>
    )
}

export default FactList