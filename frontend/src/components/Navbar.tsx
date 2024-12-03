// will contain the navbar component
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center px-10 py-3 bg-gray-800 text-blue-200 font-extrabold text-2xl">
      <div className="flex items-center justify-between">
        <h1>
          <Link to="/" className="">
            Ecomm
          </Link>
        </h1>
        <button
          className="text-5xl md:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <IoMenuOutline />
        </button>
      </div>

      <div>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
          <ul
            className={`flex flex-col pt-5 my-5 border-t-2 border-blue-200 md:pt-0 md:my-0 md:border-none gap-5 md:flex-row`}
          >
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
