import React from "react";
import notFoundImg from "../../../public/App-Error.png";
const AppErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-5 pt-20 pb-10">
        <img src={notFoundImg} alt="" />
        <h1 className="text-4xl text-[#001931]">OPPS!! APP NOT FOUND</h1>
        <p className="text-[#627382] text-2xl mt-4 text-center">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
      <div className="flex justify-center items-center pb-10">
        <button
          className="cursor-pointer px-4 py-2 text-white font-medium 
         bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AppErrorPage;
