import checkmark from "../../../../../assets/index/icons/icon-checkmark.svg"

const PaymentDiv = () => {
    return (
        <div className="absolute flex items-center gap-8 top-[40%] right-0 bg-white p-4 shadow-3xl rounded-lg font-gordita">
            <div className=" bg-red-200 rounded-full p-6">
                <img src={checkmark} alt="Accepted" />
            </div>
            <div>
                <p className="text-sm text-gray-400">Payment</p>
                <p className="text-base font-semibold">Escrow System</p>
            </div>
        </div>
    )
}

export default PaymentDiv