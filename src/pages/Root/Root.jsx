import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";
import { Outlet } from "react-router";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar></Navbar>
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
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Root;
