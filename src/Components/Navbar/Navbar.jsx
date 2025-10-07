import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="">Home</li>
      </Link>
      <Link to="/Apps">
        <li className="">Apps</li>
      </Link>
      <Link to="/Installations">
        <li className="">Installations</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-semibold text-black"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a href="">
            <img className="w-[30px] h-[30px]" src={logo} alt="" />
          </a>
          <a className="btn btn-ghost text-xl">HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex item-center gap-2 text-[16px] font-semibold text-black">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="cursor-pointer flex items-center gap-2 justify-center px-4 py-2 text-white font-medium 
         bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
        >
          <FaGithub />
          <p>Contribute</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
