import React from "react";
import appstore from "../../../public/appstore.png";
import playstore from "../../../public/googleplay.png";
import heroimg from "../../../public/hero.png";
const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-10 px-6 pt-20 pb-0 sm:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-center">
          We Build <br /> <span className="text-[#632EE3]">Productive </span>{" "}
          Apps
        </h1>

        <p className="text-center text-base sm:text-md max-w-4xl text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="cursor-pointer w-full min-w-[170px] flex justify-center items-center gap-2 p-2 outline-1 outline-[#D2D2D2] rounded bg-white hover:shadow-md transition">
              <img src={playstore} alt="Google Play" />
              <p>Google Play</p>
            </button>
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <button className="cursor-pointer w-full min-w-[170px] flex justify-center items-center gap-2 p-2 outline-1 outline-[#D2D2D2] rounded bg-white hover:shadow-md transition">
              <img src={appstore} alt="App Store" />
              <p>App Store</p>
            </button>
          </a>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="w-full max-w-[800px] h-auto"
            src={heroimg}
            alt="Hero"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center text-white py-16 -mt-px">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 py-10 px-6 sm:px-10 lg:px-20 w-full max-w-[1440px] mx-auto">
          <div className="flex-1 flex flex-col items-center gap-1 text-center">
            <p>Total Downloads</p>
            <h2 className="font-extrabold text-3xl">29.6M</h2>
            <p>21% more than last month</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1 text-center">
            <p>Total Reviews</p>
            <h2 className="font-extrabold text-3xl">906K</h2>
            <p>46% more than last month</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1 text-center">
            <p>Active Apps</p>
            <h2 className="font-extrabold text-3xl">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
