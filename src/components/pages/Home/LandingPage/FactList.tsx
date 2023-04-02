const FactList = () => {
    return (
        <ul className="flex items-center justify-evenly text-center text-white w-1/2">
                <li className="flex flex-col gap-3">
                    <span className="text-2xl">
                        30k+
                    </span>
                    <span className="text-sm">
                        Worldwide Clients
                    </span>
                </li>
                <li className="flex flex-col gap-3">
                    <span className=" text-2xl">
                        3%
                    </span>
                    <span className="text-sm">
                        Top Talent
                    </span>
                </li>
                <li className="flex flex-col gap-3"> 
                    <span className="text-2xl">
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