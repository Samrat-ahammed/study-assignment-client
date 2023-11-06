import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../assets/navbarlogo.png";
import profileLogo from "../assets/profileLogo.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => result, Swal.fire("log out success,", "", "error"))
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"allAssignment"}>
          <a>All-Assignment</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"addAssignment"}>
          <a>Add-Assignment</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"allSubmit"}>
          <a>submitted-assignments</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"takeAssignment"}>
          <a>My-Assignment</a>
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      ) : (
        <li onClick={handleLogOut}>Logout</li>
      )}
    </>
  );

  const profileNav = (
    <>
      <li>
        <a>{user?.displayName}</a>
      </li>
      <li>
        <a>{user?.email}</a>
      </li>
      {!user ? (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      ) : (
        <li onClick={handleLogOut}>Logout</li>
      )}
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
          <ul className="menu menu-horizontal bg-green-200 rounded-lg  gap-4  px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end flex badge badge-outline items-center text-center m-auto justify-self-center">
            <li className="">Logout</li>
            <label tabIndex={0} className="">
              <img
                className="h-14"
                src={!user?.email ? profileLogo : user?.photoURL}
                alt=""
              />
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
