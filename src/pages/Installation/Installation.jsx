import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  return (
    <div>
      {/* heading  */}
      <div className="mt-[80px] mb-[40px] text-black text-center">
        <h1 className="text-[48px] font-bold">Your Installed Apps</h1>
        <p className="text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* content */}
      <div>
        {/* content heading */}
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">1 Apps Found</h1>
          <button>Sort By Size</button>
        </div>
        {/* installed apps */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-white">
          <div className="flex gap-4 items-center">
            <div className="max-w-[80px] h-[80px]">
              <img className="w-full h-full rounded-lg" src="https://images.unsplash.com/photo-1656057488030-1998af700b23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3liZXJGb3J0fGVufDB8fDB8fHww" alt="" />
            </div>
            <div>
              <h1 className="text-xl mb-2">Forest: Focus for Productivity</h1>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center text-green-500">
                  <FaDownload className=" text-[16px]" />
                  <p>9M</p>
                </div>
                <div className="flex gap-1 items-center text-orange-400">
                  <FaStar className=" text-[16px]" />
                  <p>5</p>
                </div>
                <div className="flex gap-1 items-center text-[#627382]">
                  <p>258 MB</p>
                </div>
              </div>
            </div>
          </div>
          {/* button */}
          <div>
            <button className="btn bg-[#00D390] hover:bg-green-500 text-white font-semibold">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
