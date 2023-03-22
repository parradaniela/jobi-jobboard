import Button from "../../../Global/Buttons/Button"

const BannerBottom = () => {
    return (
        <section className="bg-slate-500">
            <div className="wrapper flex justify-evenly">
                <h2>A complete job portal for everyone</h2>
                <div>
                    <p>Find your dream job & earn from all worldwide leading brands</p>
                    <Button style={"outline"} corners={"square"}>Looking for a job?</Button>
                    <Button style={"green"} corners={"square"}>Start Hiring</Button>
                </div>
            </div>
        </section>
    )
}

export default BannerBottom