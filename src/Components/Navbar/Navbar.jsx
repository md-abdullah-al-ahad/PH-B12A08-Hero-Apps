import React from "react";
import { NavLink } from "react-router";
import logo from "/src/assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#9F62F2] underline decoration-[#9F62F2]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Apps"
          className={({ isActive }) =>
            isActive ? "text-[#9F62F2] underline decoration-[#9F62F2]" : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Installations"
          className={({ isActive }) =>
            isActive ? "text-[#9F62F2] underline decoration-[#9F62F2]" : ""
          }
        >
          Installations
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-[16px] font-semibold text-black"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a href="/">
            <img
              className="w-[30px] h-[30px] object-contain"
              src={logo}
              alt=""
            />
          </a>
          <a href="/" className="btn btn-ghost text-xl">
            HERO.IO
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-[16px] font-semibold text-black">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          className="cursor-pointer flex items-center gap-2 justify-center px-4 py-2 text-white font-medium 
         bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
          target="_blank"
          href="https://github.com/md-abdullah-al-ahad"
        >
          <FaGithub />
          <p>Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
