import Anchor from "../../components/UI/Buttons/Anchor"

const Error = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-6xl py-12 text-center">Oops! Page Not Found!</h2>
      <div className="lg:w-1/5">
        <Anchor url="/" style={"btn-lime"} corners={"rounded-full"} ariaLabel="" extraClasses="text-2xl">Return to Home Page</Anchor>
      </div>
    </section>
  )
}

export default Error