import { FC, ReactElement } from "react";
import { MdMenu } from "react-icons/md";

const Navbar: FC = (): ReactElement => {
  const buttonStyling = `flex space-x-3 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
  text-gray-100 rounded-sm ring-4 ring-purple-400 px-8 py-2 
  hover:bg-white hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50`;

  return (
    <header className="flex justify-between items-center bg-gray-900 px-3 py-3">
      <div>
        <p className="text-orange-900 text-xl w-auto h-8">Logo</p>
      </div>
      <div className="flex">
        <button className={buttonStyling} >
          <MdMenu size="1.8rem" />
        </button>
      </div>
    </header>
  )
}

export default Navbar