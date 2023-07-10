import { FC, ReactElement } from "react";
import './Footer.css';

export const Footer: FC = (): ReactElement => {
  return (
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


      <div className="h-6 my-10 text-center">
        {`${new Date().getFullYear()} | Tailwind Css`}
      </div>
    </div>
  );
};

export default Footer