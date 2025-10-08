import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const AllApps = () => {

  const apps = useLoaderData();

  return (
    <div className="p-4 bg-[#F5F5F5]">
      {/* heading */}
      <div className="text-center mt-[10px] md:mt-[80px] md:mb-[40px]">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
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

export default AllApps;