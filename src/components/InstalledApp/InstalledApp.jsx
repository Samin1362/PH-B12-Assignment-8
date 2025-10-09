import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { removeItem } from "../../utilities/storeToDB";
import { getStoredItems } from "../../utilities/storeToDB";

const InstalledApp = ({ installedApp, setStoredItems }) => {
  const {id, image, title, downloads, ratingAvg, size } = installedApp;

  const handleUninstall = (idx) => {
    removeItem(idx);
    setStoredItems(getStoredItems());
  }

  return (
    <div className="mb-4 flex items-center justify-between p-4 rounded-lg bg-white">
      <div className="flex gap-4 items-center">
        <div className="w-[80px] h-[80px]">
          <img className="w-full h-full rounded-lg" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-xl mb-2">{title}</h1>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center text-green-500">
              <FaDownload className=" text-[16px]" />
              <p>{downloads}</p>
            </div>
            <div className="flex gap-1 items-center text-orange-400">
              <FaStar className=" text-[16px]" />
              <p>{ratingAvg}</p>
            </div>
            <div className="flex gap-1 items-center text-[#627382]">
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div>
        <button onClick={() => handleUninstall(id)} className="btn bg-[#00D390] hover:bg-green-500 text-white font-semibold">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
