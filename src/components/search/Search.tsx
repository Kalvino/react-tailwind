import { FC, ReactElement } from "react";
import { MdFilterList, MdSearch } from "react-icons/md"

const Search: FC = (): ReactElement => {
  return (
    <section className="flex justify-between items-center bg-gray-800 px-3 py-3">
      <div className="relative pr-3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
          <MdSearch size="1.4rem" />
        </div>
        <input className="w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" type="text" placeholder="Search by keywords" />
      </div>

      <button className="w-auto bg-gray-700 rounded-lg shadow py-2 pl-3 pr-4 hover:bg-gray-700 focus:outline-none focus:outline-cyan-400 text-gray-500 inline-flex">
        <MdFilterList size="1.4rem" />
        <span className="text-white font-medium ml-1">Filters</span>
      </button>
    </section>
  )
}

export default Search