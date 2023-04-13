const FactList = () => {
    return (
        <ul className="flex flex-col pb-8 gap-4 justify-center items-center md:pb-0 md:justify-evenly md:items-between text-center text-white md:w-1/2 md:gap-0 md:flex-row">
                <li className="flex flex-col items-center md:gap-3">
                    <span className="text-lg md:text-2xl">
                        30k+
                    </span>
                    <span className="text-sm">
                        Worldwide Clients
                    </span>
                </li>
                <li className="flex flex-col items-center gap-3">
                    <span className="text-lg  md:text-2xl">
                        3%
                    </span>
                    <span className="text-sm">
                        Top Talent
                    </span>
                </li>
                <li className="flex flex-col items-center gap-3"> 
                    <span className="text-lg md:text-2xl">
                        12mil
                    </span>
                    <span className="text-sm">
                        Dollar Payout
                    </span>
                </li>
            </ul>
    )
}

export default FactList