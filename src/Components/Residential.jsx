import React from "react";

function Residential() {
  return (
    <>
      <div className="w-full h-auto  flex flex-col text-center lg:overflow-hidden md:overflow-hidden overflow-scroll items-center justify-evenly ">
        {/* firstrow */}
        <div className="w-full lg:h-[49%] md:h-[49%] h-full flex lg:flex-row md:flex-row flex-col items-center justify-between ">
          {/* projects */}

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full ecoGreen group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>ECO GREEN INTERIORS</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full summerHouse group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>SUMMER HOUSE</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full apartmentRenovation group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>APARTMENT RENOVATION</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full youtubeVideo group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>YOUTUBE VIDEO</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Residential;
