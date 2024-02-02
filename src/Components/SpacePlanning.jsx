import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function SpacePlanning() {
  return (
    <div>
      <div className=" spacePlanning lg:w-[30vw] md:w-[30vw] w-full h-[50vh] flex items-center justify-center bg-center bg-contain opacity-[5]  ">
        {/*contentContainer */}
        <div className=" w-[94%] h-[93%] flex flex-col items-start justify-evenly  text-[#f5f5f5e8]  ">
          <strong className=" lg:text-3xl md:text-2xl text-xl font-bold ">
            Space Planning
          </strong>
          <p className=" text-sm font-medium">
            we understand that every space has unique requirements and
            challenges. Our expert team of designers specializes in creating
            efficient and functional space plans to optimize your living or
            working area, no matter how big or small.
          </p>

          <div className="w-full flex items-center justify-center ">
            {" "}
            <button className="lg:w-[20vw] md:w-[20vw] w-[50vw] h-[7vh] border  border-[#f3e6e6] flex items-center justify-evenly font-semibold hover:bg-[#d79b0559] hover:border-[#d79b0559] ">
              Read More{" "}
              <span className="text-[#d79d05] hover:text-white ">
                {" "}
                <FaArrowRight />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacePlanning;
