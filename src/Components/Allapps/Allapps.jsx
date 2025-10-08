import React from "react";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";
const Allapps = ({ data }) => {
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 max-w-[1440px] mx-auto pb-10">
        {data.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow p-3 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="w-full h-[300px] bg-gray-200 rounded-md overflow-hidden p-5">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0b1d3a] mt-3">
              {app.title}
            </h3>

            {/* Footer Section */}
            <div className="flex items-center justify-between mt-3">
              {/* Downloads */}
              <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                <img src={downloadImg} alt="download" className="w-4 h-4" />
                <span className="text-green-600 font-medium text-sm">
                  {totalDownloads(app.downloads)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
                <img src={ratingImg} alt="star" className="w-4 h-4" />
                <span className="text-orange-600 font-medium text-sm">
                  {app.ratingAvg}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allapps;
