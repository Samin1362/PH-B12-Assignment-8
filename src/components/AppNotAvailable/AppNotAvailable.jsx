import React from 'react';
import appError from "../../assets/images/App-Error.png"

const AppNotAvailable = () => {
  return (
    <div className='text-center flex flex-col items-center py-6'>
      <img src={appError} alt="" />
      <h1 className='text-[48px] font-semibold'>OPPS!! APP NOT FOUND</h1>
      <p>The App you are requesting is not found on our system.  please try another apps</p>
      <button className='btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white '>Go Back!</button>
    </div>
  );
};

export default AppNotAvailable;