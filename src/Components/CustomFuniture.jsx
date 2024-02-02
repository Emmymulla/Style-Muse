import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function CustomFuniture() {
  return (
    <>
      <div className=" customFuniture lg:w-[30vw] md:w-[30vw] w-full h-[50vh] flex items-center justify-center bg-center bg-contain opacity-[5]  ">
        {/*contentContainer */}
        <div className=" w-[94%] h-[93%] flex flex-col items-start justify-evenly  text-[#f5f5f5e8]  ">
          <strong className=" lg:text-3xl md:text-xl text-xl font-bold ">
            Custom Funitures
          </strong>
          <p className=" text-sm font-medium">
            Our custom furniture services offer the opportunity to create
            one-of-a-kind pieces that perfectly complement your style and space.
            From concept to creation, our skilled craftsmen and designers work
            closely with you to bring your vision to life.
          </p>

          <div className="w-full flex items-center justify-center ">
            {" "}
            <button className=" lg:w-[20vw] md:w-[20vw] w-[50vw] h-[7vh] border  border-[#f3e6e6] flex items-center justify-evenly font-semibold hover:bg-[#d79b0559] hover:border-[#d79b0559] ">
              Read More{" "}
              <span className="text-[#d79d05] hover:text-white ">
                {" "}
                <FaArrowRight />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomFuniture;
