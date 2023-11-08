import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../assets/navbarlogo.png";
import profileLogo from "../assets/profileLogo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);

  const handleLogOut = () => {
    logOut()
      .then((result) => result, Swal.fire("log out success,", "", "error"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        console.log(data);
      });
  }, []);

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
      {user?.email && (
        <>
          <li>
            <Link to={"myAssignment"}>My-Assignment</Link>
          </li>
        </>
      )}
      {user?.email && (
        <>
          <li>
            <Link to={"allSubmit"}>submitted-assignments</Link>
          </li>
        </>
      )}

      <li className="dropdown dropdown-left">
        <li tabIndex={0} className="">
          Feature
        </li>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to={"faq"}>
              <a>Faq</a>
            </NavLink>
          </li>

          <li>
            <NavLink to={"feature"}>
              <a>Feature</a>
            </NavLink>
          </li>
        </ul>
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
          <ul className="menu menu-horizontal bg-green-200 rounded-lg  gap-4  px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {user?.email ? (
            <h3 onClick={handleLogOut} className="btn badge-primary ml-2 ">
              Logout
            </h3>
          ) : (
            <Link to={"/login"} className="btn badge-primary ml-2 ">
              Login
            </Link>
          )}
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="hover:bg-slate-100 m-1 rounded-full">
              <a
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="w-14 rounded-full ${}"
                  src={!user?.email ? profileLogo : user?.photoURL}
                  alt=""
                />
              </a>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <li>
                  <a>{user?.name}</a>
                </li>
              ) : (
                ""
              )}
              {user?.email ? (
                <>
                  {" "}
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* <img src={profile?.imgUrl} alt="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
