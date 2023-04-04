import Anchor from "../../../Global/Buttons/Anchor"

const BannerBottom = () => {
    return (
        <section className="bg-slate-500 py-16 font-gordita">
            <div className="wrapper flex justify-evenly gap-8">
                <h2 className="text-6xl text-white w-1/2 capitalize">A complete job portal for everyone</h2>
                <div className="py-8">
                    <p className="text-lg text-white">Find your dream job & earn from all worldwide leading brands</p>
                    <div className="flex justify-center items-center gap-4 py-8 ">
                        <Anchor style="btn-outline" corners="rounded" url="/">Looking for a job?</Anchor>
                        <Anchor style="btn-green" corners="rounded" url="/">Start Hiring</Anchor>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerBottom