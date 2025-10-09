import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import Allapps from "../../Components/Allapps/Allapps";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(data);

  useEffect(() => {
    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const filtered = data.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(filtered);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, data]);
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
              onChange={(e) => setSearch(e.target.value)}
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
        {isSearching ? (
          <LoadingSpinner />
        ) : (
          <Allapps data={filteredApps}></Allapps>
        )}
      </div>
    </div>
  );
};

export default Apps;
