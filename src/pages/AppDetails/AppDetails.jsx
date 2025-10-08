import React from "react";
import { useParams, useLoaderData } from "react-router";
import downloadImg from "../../../public/icon-downloads.png";
import ratingImg from "../../../public/icon-ratings.png";
import iconReviewImg from "../../../public/icon-review.png";
import AppErrorPage from "../AppErrorPage/AppErrorPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((app) => app.id === parseInt(id));

  if (!app) {
    return (
      <div className="">
        <AppErrorPage />
      </div>
    );
  }
  const totalDownloads = (amount) => {
    if (amount >= 1_000_000_000)
      return `${(amount / 1_000_000_000).toFixed(1)}B`;
    if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
    if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
    return amount.toString();
  };
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="w-full max-w-[1440px] mx-auto bg-white border-t border-gray-200 shadow-sm px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-10 w-full">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={app.image}
              alt={app.title}
              className="p-5 w-40 h-40 md:w-60 md:h-60 object-contain rounded-lg border border-gray-200 bg-white"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {app.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">
                {app.companyName}
              </span>
            </p>
            <hr className="my-4 border-gray-300" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <img src={downloadImg} alt="Downloads" className="w-7 h-7" />
                <div>
                  <p className="text-sm text-gray-500">Downloads</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {totalDownloads(app.downloads)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={ratingImg} alt="Ratings" className="w-7 h-7" />
                <div>
                  <p className="text-sm text-gray-500">Average Ratings</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {app.ratingAvg}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={iconReviewImg} alt="Reviews" className="w-7 h-7" />
                <div>
                  <p className="text-sm text-gray-500">Total Reviews</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {totalDownloads(app.reviews)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-green-500 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-green-600 transition">
                Install Now ({app.size}) MB
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Ratings Breakdown
          </h2>

          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={app.ratings}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  type="number"
                  tickFormatter={(value) => totalDownloads(value)}
                  tick={{ fill: "#555" }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fill: "#555" }}
                  width={80}
                />
                <Tooltip
                  formatter={(value) => totalDownloads(value)}
                  contentStyle={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#6366F1"
                  barSize={25}
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
