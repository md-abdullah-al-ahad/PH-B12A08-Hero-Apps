import React from "react";
import { useNavigate } from "react-router";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import { Link } from "react-router";
const Trendingpage = ({ data }) => {
  const navigate = useNavigate();
  const totalDownloads = (amount) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    } else {
      return amount.toString();
    }
  };
  return (
    <div className="flex flex-col px-5 py-10">
      <h1 className="text-[#001931] font-bold text-5xl text-center">
        Trending Apps
      </h1>
      <p className="text-[#627382] text-[20px] mt-4 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 max-w-[1440px] mx-auto">
        {data.map((app) => (
          <Link
            key={app.id}
            to={`/Apps/${app.id}`}
            className="bg-white rounded-lg shadow p-3 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-[300px] bg-gray-200 rounded-md overflow-hidden p-5">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0b1d3a] mt-3">
              {app.title}
            </h3>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                <img src={downloadImg} alt="download" className="w-4 h-4" />
                <span className="text-green-600 font-medium text-sm">
                  {totalDownloads(app.downloads)}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
                <img src={ratingImg} alt="star" className="w-4 h-4" />
                <span className="text-orange-600 font-medium text-sm">
                  {app.ratingAvg}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => navigate("/Apps")}
          className="cursor-pointer text-white font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm px-8 py-3"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Trendingpage;
