import Button from "../../../Global/Buttons/Button"


const SearchBox = () => {
  return (
    <form action="submit" className=" my-12">
      <fieldset className="flex items-center">
        <legend className="sr-only">Search jobs, companies or keywords by category</legend>

        <div className="flex flex-col bg-white p-3 rounded-l-md">
          <label htmlFor="searchText" className="text-gray-400 text-xs px-2">Enter your job title, keyword or company</label>
          <input type="text" id="searchText" className="text-sm p-2 my-1" />
        </div>

        <div className="flex flex-col bg-white p-3">
          <label htmlFor="category" className="text-gray-400 text-xs px-2">Category</label>
          <select id="category" className="text-sm p-2 my-1 bg-white">
            <option value="" className="text-sm">Select a category</option>
            <option value="webDesign" className="text-sm">Web design</option>
          </select>
        </div>

        <Button style="btn-green" corners="rounded" extraClasses="self-stretch flex items-center rounded-l-none px-8">Search</Button>
      </fieldset>
    </form>
  )
}

export default SearchBox