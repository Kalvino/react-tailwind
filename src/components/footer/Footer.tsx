import { FC, ReactElement } from "react";
import './Footer.css';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex-col h-auto">
        <div className="h-auto relative">
          <img className="bg-cover w-screen" src="stars.svg" alt="stars background" />
          <div className="sm:flex-col md:flex-row flex-wrap flex-row md:flex justify-between absolute rounded shadow-inner shadow-lime-700 text-slate-800 px-6 py-5 h-auto w-4/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div className="relative">
              Footer Details
            </div>
            <div className="relative">
              Footer Details
            </div>
            <div className="relative">
              Footer Details
            </div>
            <div className="px-5 py-2 relative">
              <input className="subscribe border-2 rounded h-10 w-auto px-2 text-orange-500 " type="text" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container flex align-middle flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between"
      >
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li className="cursor-pointer hover:text-emerald-700">Home</li>
            <li className="cursor-pointer hover:text-emerald-700">About</li>
            <li className="cursor-pointer hover:text-emerald-700">Contact</li>
            <li className="cursor-pointer hover:text-emerald-700">Terms</li>
          </ul>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0">
          <a>
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6 text-blue-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a className="ml-3">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6 text-blue-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a className="ml-3">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6 text-pink-400"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a className="ml-3 cursor-pointer">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-6 h-6 text-blue-500"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div className="h-6 py-10 text-center">
        {`${new Date().getFullYear()} | Tailwind CSS`}
      </div>
    </footer>
  );
};

export default Footer