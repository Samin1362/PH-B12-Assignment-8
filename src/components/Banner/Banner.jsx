import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroImage from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:gap-[40px]">
        {/* banner heading  */}
        <div>
          <h1 className="text-[32px] md:text-[72px] font-bold text-center">
            We Build <br />{" "}
            <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-center">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center my-[15px] md:my-[0px] gap-[16px]">
          <button className="py-[16px] px-[20px] border-2 border-gray-300 rounded-lg text-[20px] font-semibold">
            <a className="flex items-center gap-2 " href="https://play.google.com/store/games?hl=en" target="blank">
              <FaGooglePlay className="text-[32px]" /> Google Play
            </a>
          </button>
          <button className="py-[16px] px-[20px] border-2 border-gray-300 rounded-lg text-[20px] font-semibold">
            <a className="flex items-center gap-2" href="https://www.apple.com/app-store/" target="blank">
              <FaAppStore className="text-[32px]" /> App Store
            </a>
          </button>
        </div>
      </div>
      {/* banner image */}
      <div className="md:mt-[40px]">
        <img src={heroImage} alt="" />
      </div>
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white p-[10px] md:p-[80px] flex flex-col items-center gap-[40px] w-full">
        <div>
          <h1 className="text-[20px] md:text-[48px] font-bold">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-[24px]">
          <div className="flex flex-col items-center">
            <h2>Total Downloads</h2>
            <h1 className="text-2xl md:text-[64px] font-extrabold">29.6M</h1>
            <h2>21% more than last month</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2>Total Reviews</h2>
            <h1 className="text-2xl md:text-[64px] font-extrabold">906K</h1>
            <h2>46% more than last month</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2>Active Apps</h2>
            <h1 className="text-2xl md:text-[64px] font-extrabold">132+</h1>
            <h2>31 more will Launch</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
