//Component imports
import Anchor from "../../../Global/Buttons/Anchor"

const BannerBottom = () => {
    return (
        <section className="bg-bottom-banner bg-cover bg-center py-8 font-gordita md:py-16">
            <div className="wrapper-sm md:wrapper flex flex-col items-center gap-4 text-center md:text-left md:flex-row md:justify-evenly">
                <h2 className="text-4xl text-white capitalize leading-tight md:text-6xl md:leading-tight lg:w-1/3">A complete job portal for everyone</h2>
                <div className="md:py-8">
                    <p className="text-lg text-white">Find your dream job & earn from all worldwide leading brands</p>
                    <div className="flex flex-col justify-center items-center gap-4 py-8 md:flex-row">
                        <Anchor style="btn-outline" corners="rounded" url="/">Looking for a job?</Anchor>
                        <Anchor style="btn-lime" corners="rounded" url="/">Start Hiring</Anchor>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerBottom