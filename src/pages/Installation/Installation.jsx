import React, { useState } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getStoredItems } from "../../utilities/storeToDB";

const Installation = () => {

  const [storedItems, setStoredItems] = useState(getStoredItems())

  const apps = useLoaderData();
  const installedApps = apps.filter(app => storedItems.includes(String(app.id)));


  return (
    <div className="bg-[#F5F5F5]">
      {/* heading  */}
      <div className="pt-[80px] pb-[40px] text-black text-center">
        <h1 className="text-[48px] font-bold">Your Installed Apps</h1>
        <p className="text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* content */}
      <div className="pb-4">
        {/* content heading */}
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{installedApps.length} Apps Found</h1>
          <button>Sort By Size</button>
        </div>
        {/* installed apps */}
        {
          installedApps.map((app, idx) => <InstalledApp key={idx} setStoredItems={setStoredItems} installedApp={app}></InstalledApp>)
        }
      </div>
    </div>
  );
};

export default Installation;
