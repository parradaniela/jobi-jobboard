

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center font-gordita wrapper">
            <h2 className="text-7xl">Find & Hire Experts for any Job</h2>
            <p className="text-sm">Unlock your potential with quality jobs & earn from world leading brands.</p>
            <form action="submit">
                <fieldset className="flex">
                    <legend className="sr-only">Search jobs, companies or keywords by category</legend>
                    <div>
                        <label htmlFor="searchText" className="text-sm">Enter your job title, keyword or company</label>
                        <input type="text" id="searchText" className="text-sm" />
                    </div>
                    <div>
                        <label htmlFor="category" className="text-sm">Category</label>
                        <select id="category" className="text-sm">
                            <option value="" className="text-sm">Select a category</option>
                            <option value="webDesign" className="text-sm">Web design</option>
                        </select>
                    </div>
                    <button>Search</button>
                </fieldset>
            </form>
            <ul className="flex text-center">
                <li>
                    <span className="text-2xl block">
                        30k+
                    </span>
                    <span className="text-sm">
                        Worldwide Clients
                    </span>
                </li>
                <li>
                    <span className=" text-2xl block">
                        3%
                    </span>
                    <span className="text-sm">
                        Top Talent
                    </span>
                </li>
                <li>
                    <span className="text-2xl block">
                        12mil
                    </span>
                    <span className="text-sm">
                        Dollar Payout
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default LandingPage