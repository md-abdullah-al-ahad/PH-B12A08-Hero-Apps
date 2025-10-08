import React from "react";
import notFoundImg from "../../../public/error-404.png";
const ErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-5 py-20">
        <img src={notFoundImg} alt="" />
        <h1 className="text-4xl text-[#001931]">Oops, page not found!</h1>
        <p className="text-[#627382] text-2xl mt-4 text-center">
          The page you are looking for is not available.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
