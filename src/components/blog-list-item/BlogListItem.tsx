import { ReactElement, FC } from "react";
import MyReactTailwind from './react-tailwind.jpeg';
import { MdStar } from "react-icons/md";

const BlogListItem: FC = (): ReactElement => {
  return (
    <main className="px-4 py-6">
      <h3 className="text-gray-900 text-xl">React, Tailwind, Vite</h3>
      <p className="text-gray-600">
        Learn how to setup react with Tailwind and Vite quick!
      </p>
      <div className="mt-6">
        <div>
          <div>
            <img className="rounded-lg shadow-md h-64" src={MyReactTailwind} alt="" />
          </div>
          <div className="relative px-4 -mt-16">
            <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
              <div className="flex">
                <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
                <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  3 Tips &bull; Free Tutorials
                </div>
              </div>
              <h4 className="mt-1 text-gray-900 font-semibold text-lg">Modern Javascript Setup</h4>
              <div className="mt-1">
                <span className="text-gray-900">$140</span>
                <span className="text-gray-600 ml-1 text-sm">/mnth</span>
              </div>
              <div className="mt-2 flex items-center text-sm text-teal-500">
                <MdStar size="1.3rem" />
                <MdStar size="1.3rem" />
                <MdStar size="1.3rem" />
                <MdStar size="1.3rem" />
                <MdStar size="1.3rem" />
                <span className="ml-2 text-gray-600 text-sm">45 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogListItem