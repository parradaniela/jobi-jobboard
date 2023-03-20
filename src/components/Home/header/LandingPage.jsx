

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center">
            <h2>Find & Hire Experts for any Job.</h2>
            <p>Unlock your potential with quality jobs & earn from world leading brands.</p>
            <form action="submit">
                <fieldset className="flex">
                    <legend className="sr-only">Search jobs, companies or keywords by category</legend>
                    <div>
                        <label htmlFor="searchText" name="search" >Enter your job title, keyword or company</label>
                        <input type="text" id="searchText" name="search" />
                    </div>
                    <div>
                        <label htmlFor="category" name="search" >Category</label>
                        <select name="search" id="category">
                            <option value="">Select a category</option>
                            <option value="webDesign">Web design</option>
                        </select>
                    </div>
                    <button>Search</button>
                </fieldset>
            </form>
            <ul className="flex">
                <li>
                    <p><span>30k+</span><span>Worldwide Clients</span></p>
                </li>
                <li>
                    <p><span>3%</span><span>Top Talent</span></p>
                </li>
                <li>
                    <p><span>12mil</span><span>Dollar Payout</span></p>
                </li>
            </ul>
        </div>
    )
}

export default LandingPage