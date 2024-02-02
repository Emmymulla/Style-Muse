import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function FunitureLayout() {
  return (
    <div>
      <div className=" funitureLayout w-[27vw] h-[50vh] flex items-center justify-center bg-center bg-contain opacity-[5]  ">
        {/*contentContainer */}
        <div className=" w-[94%] h-[93%] flex flex-col items-start justify-evenly  text-[#f5f5f5e8]  ">
          <strong className=" text-3xl font-bold ">Funiture Layouts</strong>
          <p className=" text-sm font-medium">
            we understand that finding the right furniture layout is key to
            creating a functional and visually appealing space. Whether you're
            looking to optimize your living room, bedroom, dining area, or
            office, our expert designers have curated a range of stylish and
            practical furniture layouts to inspire you.
          </p>

          <div className="w-full flex items-center justify-center ">
            {" "}
            <button className=" w-[20vw] h-[7vh] border  border-[#f3e6e6] flex items-center justify-evenly font-semibold hover:bg-[#d79b0559]  hover:border-[#d79b0559] ">
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

export default FunitureLayout;
