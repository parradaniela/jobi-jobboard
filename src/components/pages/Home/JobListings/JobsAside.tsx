import { NavLink } from "react-router-dom"

const JobsAside = () => {
  return (
    <aside className="text-center my-4">
      <p className="border-1 border-black inline-block py-1 px-3 rounded-full">
        Do you want to post a job for your company?&nbsp;
        <span className="block text-jobi-green-dark font-semibold md:inline-block">
          We can help.&nbsp;
          <NavLink to="/" className="font-normal underline hover:text-jobi-green-bright focus:text-jobi-green-bright transition-colors" aria-label="Read more about how we can speed up your candidate search">
            Click here
          </NavLink>
        </span>
      </p>
    </aside>
  )
}

export default JobsAside