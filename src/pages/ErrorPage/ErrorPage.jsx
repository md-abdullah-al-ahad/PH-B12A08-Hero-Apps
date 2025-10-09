import React from "react";
import { Link } from "react-router";
import notFoundImg from "../../assets/images/error-404.png";
const ErrorPage = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={notFoundImg} alt="" />
        <h1 className="text-4xl text-[#001931]">Oops, page not found!</h1>
        <p className="text-[#627382] text-2xl mt-4 text-center">
          The page you are looking for is not available.
        </p>
      </div>
      <div className="flex justify-center items-center pt-10">
        <Link
          to="/"
          className="cursor-pointer px-4 py-2 text-white font-medium 
         bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
