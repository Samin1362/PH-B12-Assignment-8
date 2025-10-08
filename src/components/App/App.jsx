import React from "react";
import { Link } from "react-router";

const App = ({ app }) => {
  const { id, companyName, image, downloads, ratingAvg } = app;
  return (
    <Link to={`/appsDetails/${id}`}>
      <div className="bg-white flex flex-col items-center justify-center p-[16px] rounded-lg">
        <div className="h-[316px] w-full">
          <img
            className="w-full h-full"
            src={image}
            alt="images are not visible"
          />
        </div>
        <div className="w-full">
          <h1 className="text-[#001931] text-left">{companyName}</h1>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#F1F5E8] text-[#00D390] py-[6px] px-[10px] rounded-lg">
            {downloads}
          </div>
          <div className="bg-[#FFF0E1] text-[#FF8811] py-[6px] px-[10px] rounded-lg">
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
