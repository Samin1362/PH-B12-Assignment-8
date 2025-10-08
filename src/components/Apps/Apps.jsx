import React from "react";
import App from "../App/App";

const Apps = ({ apps }) => {
  return (
    <div className="p-4 bg-[#F5F5F5]">
      {/* heading */}
      <div className="text-center mt-[10px] md:mt-[80px] md:mb-[40px]">
        <h1 className="text-[48px] font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      {/* content  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 items-center justify-center bg-[#F5F5F5] gap-4">
        {apps.map((app, idx) => (
          <App key={idx} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
