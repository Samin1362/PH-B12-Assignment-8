import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { RotatingLines } from "react-loader-spinner";
import { Outlet } from "react-router";
import { Suspense } from "react";

const Root = () => {
  return (
    <div>
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
