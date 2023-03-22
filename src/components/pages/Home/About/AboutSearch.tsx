
const AboutSearch = () => {
    return (
        <div className="bg-slate-500 basis-1/2">
            {/* horrible gallery goes here lmao */}
            <form action="submit">
                <label htmlFor="aboutSearch" className="sr-only">Search for a designer, brand or logo</label>
                <input type="text" id="aboutSearch" placeholder="Designer, Brand, Logo" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default AboutSearch