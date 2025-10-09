import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router";
import downloadImg from "../../assets/images/icon-downloads.png";
import ratingImg from "../../assets/images/icon-ratings.png";

const Installations = () => {
  const { installedApps, handleUninstallApp } = useOutletContext();
  const [appsData, setAppsData] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    fetch("/data/appsData.json")
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .catch(() => setAppsData([]));
  }, []);
  const installedAppsData = appsData.filter((app) =>
    installedApps.includes(app.id)
  );

  const totalDownloads = (amount) => {
    if (amount >= 1000000000) return `${(amount / 1000000000).toFixed(1)}B`;
    else if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M`;
    else if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
    else return amount.toString();
  };

  const sortedApps = [...installedAppsData].sort((a, b) => {
    if (sortOrder === "asc") return a.downloads - b.downloads;
    if (sortOrder === "desc") return b.downloads - a.downloads;
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1440px] mx-auto pt-10 px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold text-xl text-[#001931]">
            {installedAppsData.length} Apps Found
          </h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm bg-base-200">
              Sort By Size ▼
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow"
            >
              <li>
                <a onClick={() => setSortOrder("asc")}>Low-High</a>
              </li>
              <li>
                <a onClick={() => setSortOrder("desc")}>High-Low</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {sortedApps.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p className="mb-10">No installed apps found.</p>
              <br />
              <Link
                to="/Apps"
                className="btn mt-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
              >
                Browse Apps
              </Link>
            </div>
          ) : (
            sortedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-md p-3 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001931]">{app.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <img
                          src={downloadImg}
                          className="w-4 h-4"
                          alt="Downloads"
                        />
                        <span>{totalDownloads(app.downloads)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={ratingImg} className="w-4 h-4" alt="Rating" />
                        <span>{app.ratingAvg}</span>
                      </div>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstallApp(app.id)}
                  className="btn btn-sm bg-emerald-400 text-white hover:bg-emerald-500"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installations;
