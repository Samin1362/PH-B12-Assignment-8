import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLoaderData } from "react-router";
import { Suspense, lazy } from "react";
import SearchBar from "../SearchBar/SearchBar";
import AppNotAvailable from "../AppNotAvailable/AppNotAvailable";
const App = lazy(() => import("../App/App"));

const AllApps = () => {
  const [available, setAvailable] = useState(true);
  const apps = useLoaderData();
  const [query, setQuery] = useState("");

  const filteredApps = apps.filter((app) =>
    app.companyName.toLowerCase().startsWith(query.toLowerCase())
  );

  useEffect(() => {
    if (filteredApps.length === 0){
      setAvailable(false);
    } else{
      setAvailable(true);
    }
  },[filteredApps]);

  return (
    <div className="p-4 bg-[#F5F5F5]">
      {/* heading */}
      <div className="text-center mt-[10px] md:mt-[80px] md:mb-[40px] text-black">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between mb-[22px] text-black">
        <h1 className="font-semibold text-2xl">
          ({filteredApps.length}) Apps Found
        </h1>
        <SearchBar onSearch={setQuery}></SearchBar>
      </div>
      {/* content  */}

      {available ? (
        <Suspense
          fallback={
            <div className="flex justify-center">
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="green"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 items-center justify-center bg-[#F5F5F5] gap-4">
            {filteredApps.map((app, idx) => (
              <App key={idx} app={app}></App>
            ))}
          </div>
        </Suspense>
      ) : (
        <AppNotAvailable></AppNotAvailable>
      )}

      {/* <Suspense
        fallback={
          <div className="flex justify-center">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="green"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 items-center justify-center bg-[#F5F5F5] gap-4">
          {filteredApps.map((app, idx) => (
            <App key={idx} app={app}></App>
          ))}
        </div>
      </Suspense> */}
    </div>
  );
};

export default AllApps;
