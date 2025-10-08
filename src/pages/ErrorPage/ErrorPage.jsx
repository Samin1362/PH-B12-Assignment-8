import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import errorImage from "../../assets/images/error-404.png"

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-col items-center mt-4 md:mt-[80px]'>
        <img src={errorImage} alt="" />
        <h1 className='text-2xl md:text-[48px] font-semibold text-center'>Oops, page not found!</h1>
        <p className='text-[20px] text-center'>The page you are looking for is not available.</p>
        <div className='mt-[16px]'>
          <button className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-[15px] px-[40px] rounded-lg font-bold'>Go Back!</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;