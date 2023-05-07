import Anchor from "../../components/UI/Buttons/Anchor"

const WIP = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 gap-8 bg-jobi-green-light text-center">
      <h2 className="text-6xl">Page Under Construction!</h2>
      <p className="text-xl">Check back later for further updates</p>
      <div className="lg:w-1/5">
        <Anchor url="/" style={"btn-green"} corners={"rounded-full"} ariaLabel="" extraClasses="text-2xl">Return to Home Page</Anchor>
      </div>
    </section>
  )
}

export default WIP