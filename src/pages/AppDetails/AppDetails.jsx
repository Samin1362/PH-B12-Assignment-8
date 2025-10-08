import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();

  const selectedApp = apps.find((app) => app.id === Number(id));

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
  } = selectedApp;

  return (
    <div className="md:p-[80px] bg-[#F5F5F5]">
      <div className="flex gap-[40px]">
        <div className="w-[350px] h-[350px]">
          <img className="w-full" src={image} alt="this is app image" />
        </div>
        <div className="w-full">
          {/* heading  */}
          <div className="border-b-2 border-gray-300">
            <h1 className="text-[32px] font-bold">{title}</h1>
            <h1 className="text-xl pb-[30px]">
              Developed by:{" "}
              <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                {companyName}
              </span>
            </h1>
          </div>
          <div className="mt-[30px] flex gap-4">
            <div>
              <FaDownload className="text-green-500 text-[35px]" />
              <p>Downloads</p>
              <h1 className="text-[40px] font-bold">{downloads}</h1>
            </div>
            <div>
              <FaStar className="text-orange-500 text-[35px]" />
              <p>Average Ratings</p>
              <h1 className="text-[40px] font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <MdOutlineRateReview className="text-purple-500 text-[35px]" />
              <p>Total Reviews</p>
              <h1 className="text-[40px] font-bold">{reviews}</h1>
            </div>
          </div>
          <button className="bg-[#00D390] py-[14px] px-[20px] rounded-lg text-white font-semibold">
            Install Now
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <h1>Ratings</h1>
      </div>
      <div className="divider"></div>
      <div>
        <h1 className="font-bold text-2xl">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
