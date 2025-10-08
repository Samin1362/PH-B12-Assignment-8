import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa";

const AppDetails = () => {

  const { id } = useParams();
  const apps = useLoaderData();

  const selectedApp = apps.find(app => app.id === Number(id))

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = selectedApp;

  return (
    <div>
      <div className='flex gap-[40px]'>
        <div className='w-[350px] h-[350px]'>
          <img className='w-full' src={image} alt="this is app image" />
        </div>
        <div>
          <h1>{title}</h1>
          <h1>Developed by: {companyName}</h1>
          <div>
            <div>
              <FaDownload />
              <p>Downloads</p>
              <h1>{downloads}</h1>
            </div>
            <div></div>
            <div></div>
          </div>
          <button>Install Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;