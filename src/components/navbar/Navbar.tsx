import { FC, ReactElement, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar: FC = (): ReactElement => {
  const buttonStyling = `flex space-x-3 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
  text-gray-100 rounded-sm ring-4 ring-purple-400 px-7 py-1 focus:outline-none focus:text-white 
  hover:bg-white hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50 sm:hidden`;

  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-between px-3 py-3">
        <div>
          <p className="text-orange-900 text-xl w-auto h-8">Logo</p>
        </div>
        <div className="flex">
          <button onClick={() => setOpen(!open)} type="button" className={buttonStyling} >
            {open ? <MdClose size="1.8rem" /> : <MdMenu size="1.8rem" />}
          </button>
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} sm:flex items-center sm:px-4`} >
        <div className="px-2 pt-3 pb-5 border-b border-gray-800 sm:border-b-0 sm:flex sm:py-0 sm:px-0">
          <a className="block px-3 rounded py-1 font-semibold hover:bg-gray-800 text-white sm:text-sm sm:px-2" href="">Create Blogs</a>
          <a className="mt-1 block px-3 rounded py-1 font-semibold hover:bg-gray-800 text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2" href=""> Blogs</a>
          <a className="mt-1 block px-3 rounded py-1 font-semibold hover:bg-gray-800 text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2" href="">Messages</a>
        </div>
        <div className="px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div className="flex items-center">
            <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-8 sm:w-8" src="profile-image.jpg" alt="" />
            <span className="ml-4 font-semibold text-gray-200 sm:hidden">Calvin Odira</span>
          </div>
          <div className="mt-5 sm:hidden">
            <a href="" className="block text-gray-400 hover:text-white">Account Settings</a>
            <a href="" className="mt-3 block text-gray-400 hover:text-white">Support</a>
            <a href="" className="mt-3 block text-gray-400 hover:text-white">Sign Out</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar