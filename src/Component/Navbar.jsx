import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../assets/navbarlogo.png";
import profileLogo from "../assets/profileLogo.svg";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <NavLink to={"login"}>
          <a>Login</a>
        </NavLink>
      </li>
    </>
  );
  const profileNav = (
    <>
      <li>
        <a>Samrat ahammmed</a>
      </li>
      <li>
        <a>Samratahammmed@gmail.com</a>
      </li>
      <li>
        <a>Login</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="normal-case text-xl">
            <div className="flex items-center gap-4">
              <img className="h-20" src={navbarLogo} alt="" />
              <h3 className="font-bold text-green-600">Group-Study</h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  gap-4  px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <img className="h-14" src={profileLogo} alt="" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              {profileNav}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
