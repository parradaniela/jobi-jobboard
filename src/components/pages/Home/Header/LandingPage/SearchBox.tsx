//Component imports
import Button from "../../../../Global/Buttons/Button"

const SearchBox = () => {
  return (
    <form action="submit" role="search" className="my-12 w-full sm:w-3/4 md:w-auto">
      <fieldset className="flex flex-col md:flex-row items-center">
        <legend className="sr-only">Search jobs, companies or keywords by category</legend>

        <div className="flex flex-col bg-white p-3 rounded-md md:rounded-r-none self-stretch">
          <label htmlFor="searchText" className="text-jobi-black text-xs px-2">Enter your job title, keyword or company</label>
          <input type="text" id="searchText" className="text-sm p-2 my-1" />
        </div>

        <div className="flex flex-col bg-white p-3 my-4 rounded-md w-full md:w-auto md:my-0 md:rounded-none">
          <label htmlFor="category" className="text-jobi-black text-xs px-2 self-stretch">Category</label>
          <select id="category" className="text-sm p-2 my-1 bg-white">
            <option value="" className="text-sm">Select a category</option>
            <option value="webDesign">Web design</option>
            <option value="marketing">Marketing</option>
            <option value="accounting">Accounting</option>
            <option value="editing">Editing</option>
            <option value="design">UI/UX Design</option>
          </select>
        </div>

        <Button style="btn-lime" corners="rounded" extraClasses="self-stretch flex items-center px-8 md:rounded-l-none" aria-label="Click here to see your search results">Search</Button>
      </fieldset>
    </form>
  )
}

export default SearchBox