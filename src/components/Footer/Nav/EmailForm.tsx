
const EmailForm = () => {
  return (
    <form action="submit">
        <h3 className="text-xl font-circularStd font-medium leading-normal">Newsletter</h3>
        <fieldset>
            <legend className="text-sm my-4">Join & get important news regularly</legend>
            <div className="bg-white/5 z-0 p-2 my-2">
                <label htmlFor="newsletter" className="sr-only">Enter your email</label>
                <input type="text" id="newsletter" placeholder="Enter your email" className="p-2 bg-transparent placeholder:text-xs"/>
                <button className="bg-white/20 p-2 text-xs rounded transition-all hover:bg-white/100 hover:text-jobi-green-dark focus:bg-white/100 focus:text-jobi-green-dark">Send</button>
            </div>
            <p className="text-xs opacity-60">We only send interesting and relevant emails</p>
        </fieldset>
    </form>
  )
}

export default EmailForm