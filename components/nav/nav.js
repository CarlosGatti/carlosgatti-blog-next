
import { CgTab } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

function Nav() {

  return (
        <header className="flex flex-col fixed w-full bg-white items-center border-b border-gray-200 bg-gray-50">
            <nav className="flex w-full max-w-5xl space-x-2 justify-between py-2 px-5 md:px-10 ">

            <div className="flex items-center space-x-1 text-gray-800">
                <CgTab className="w-6 h-6" />
                <span className="text-md font-medium hidden md:block ">
                Posts
                </span>
            </div>

            <form className="flex text-gray-800">
                <input
                className=" appearance-none border rounded-l w-24 md:w-60  py-1 px-2 text-gray-700  focus:outline-none focus:shadow-outline "
                type="text"
                />
                <div className="flex items-center pt-1 pb-1 pl-3 pr-3 font-mono text-sm text-gray-500 border border-gray-300 rounded-r bg-gray-100">
                <BiSearch className="w-4 h-5  text-black-400" />
                </div>
            </form>

            </nav>
        </header>
  )
}

export default Nav