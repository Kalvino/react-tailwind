import { FC, ReactElement, useState } from "react";
import { MdFilterList, MdSearch } from "react-icons/md"

const Search: FC = (): ReactElement => {

  const [open, setOpen] = useState(false);

  return (
    <section className=" bg-gray-800">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
            <MdSearch size="1.4rem" />
          </div>
          <input className="w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" type="text" placeholder="Search by keywords" />
        </div>
        <button type="button"
          onClick={() => setOpen(!open)}
          className={`${open ? 'bg-gray-900' : 'bg-gray-700'} ml-3 rounded-lg shadow py-2 pl-4 pr-4 hover:bg-gray-700 focus:outline-none focus:outline-cyan-400 text-gray-500 inline-flex`}>
          <MdFilterList size="1.4rem" />
          <span className="text-white font-medium ml-1">Filters</span>
        </button>
      </div>

      <form className={open ? "" : "hidden"}>
        <div className="px-4 py-4 border-t border-gray-900">
          <div className="flex flex-wrap -mx-2">
            <label className="block w-1/2 px-2 sm:w-1/4">
              <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select className="shadow text-white mt-1 form-select block w-full focus:bg-gray-600" name="" id="">
                <option value="">4</option>
              </select>
            </label>
            <label className="block w-1/2 px-2 sm:w-1/4">
              <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select className="shadow text-white mt-1 form-select block w-full focus:bg-gray-600" name="" id="">
                <option value="">2</option>
              </select>
            </label>
            <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2">
              <span className="text-sm font-semibold text-gray-500">Price Range</span>
              <select className="shadow text-white mt-1 form-select block w-full focus:bg-gray-600" name="" id="">
                <option value="">Up to $2,000/wk</option>
              </select>
            </label>
          </div>
        </div>
        <div className="px-4 py-4 border-t border-gray-900">
          <span className="block text-sm font-semibold text-gray-500">Property Type</span>
          <div className="sm:flex sm:-mx-2">
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="house" />
              <span className="ml-2 text-white">House</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="apartment" />
              <span className="ml-2 text-white">Apartment</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="loft" />
              <span className="ml-2 text-white">Loft</span>
            </label>
            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
              <input className="form-radio" type="radio" name="propertyType" value="radio" />
              <span className="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>

        <div className="px-4 py-4 border-t border-gray-900">
          <span className="block text-sm font-semibold text-gray-500">Amenities</span>
          <div className="sm:flex sm:-mx-2 sm:flex-wrap">
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="balcony" checked />
              <span className="ml-2 text-white">Balcony</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="pool" />
              <span className="ml-2 text-white">Pool</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="beach" />
              <span className="ml-2 text-white">Beach</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="petFriendly" />
              <span className="ml-2 text-white">Pet Friendly</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="kidFriendly" />
              <span className="ml-2 text-white">Kid Friendly</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="parking" />
              <span className="ml-2 text-white">Parking</span>
            </label>
            <label className="mt-3 flex items-center sm:w-1/2 sm:px-2">
              <input className="form-checkbox" type="checkbox" name="airConditioning" />
              <span className="ml-2 text-white">Air Conditioning</span>
            </label>
          </div>
        </div>
        <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
        </div>
      </form>
    </section>
  )
}

export default Search