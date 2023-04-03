import { NavLink } from "react-router-dom"

const JobsAside = () => {
  return (
    <aside className="text-center my-4">
      <p className="border-1 border-black inline-block py-1 px-3 rounded-full">
        Do you want to post a job for your company?&nbsp;
        <span className="text-jobi-green-bright font-semibold">
          We can help.&nbsp;
          <NavLink to="/" className="font-normal underline hover:text-jobi-green-dark focus:text-jobi-green-dark transition-colors">
            Click here
          </NavLink>
        </span>
      </p>
    </aside>
  )
}

export default JobsAside