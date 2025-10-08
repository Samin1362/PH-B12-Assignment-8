import React from "react";
import { Suspense, lazy } from "react";
import Banner from "../../components/Banner/Banner";
const Apps = lazy(() => import("../../components/Apps/Apps"));
import { useLoaderData } from "react-router";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router";

const Home = () => {
  const apps = useLoaderData();
  const eightApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
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
        <Apps apps={eightApps}></Apps>
      </Suspense>
      <Link to="/apps">
        <div className="flex justify-center md:py-[40px] bg-[#F5F5F5]">
          <button className="py-[15px] px-[40px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
