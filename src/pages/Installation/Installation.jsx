import React, { useState } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getStoredItems } from "../../utilities/storeToDB";
import { MdArrowDropDown } from "react-icons/md";

const Installation = () => {
  const [storedItems, setStoredItems] = useState(getStoredItems());
  const [sortOrder, setSortOrder] = useState(null);

  const apps = useLoaderData();
  const installedApps = apps.filter((app) =>
    storedItems.includes(String(app.id))
  );

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "asc") return a.size - b.size;
    if (sortOrder === "desc") return b.size - a.size;
    return 0;
  });

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
          <h1 className="text-2xl font-semibold">
            {installedApps.length} Apps Found
          </h1>

          {/* drop down button */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size <MdArrowDropDown className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button
                  onClick={() => {
                    setSortOrder("asc");
                  }}
                >
                  <a>Low-High</a>
                </button>
              </li>
              <li>
                <button onClick={() => setSortOrder("desc")}>
                  <a>High-Low</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* installed apps */}
        {sortedApps.map((app, idx) => (
          <InstalledApp
            key={idx}
            setStoredItems={setStoredItems}
            installedApp={app}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
