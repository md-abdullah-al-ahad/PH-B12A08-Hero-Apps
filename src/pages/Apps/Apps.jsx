import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import Allapps from "../../Components/Allapps/Allapps";
const Apps = () => {
  const data = useLoaderData();
  const [search, setsearch] = useState("");

  const filteredApps = data.filter((app) => app.title.includes(search));
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center gap-6 max-w-[1440px] mx-auto pt-10 px-5">
        <h1 className="font-bold text-5xl text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex items-center justify-between w-[100%]">
          <div className="font-semibold text-[#001931] text-2xl">
            ({filteredApps.length}) Apps Found
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Apps"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="py-3 pl-[35px] outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-500"
            />
            <CiSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        <Allapps data={filteredApps}></Allapps>
      </div>
    </div>
  );
};

export default Apps;
