import React from "react";

function AllProjects() {
  return (
    <>
      <div className="w-full lg:h-[69vh] md:h-[69vh] h-[134vh]  flex flex-col text-center lg:overflow-hidden md:overflow-hidden overflow-scroll items-center justify-evenly">
        {/* firstrow */}
        <div className="w-full lg:h-[49%] md:h-[49%] h-full flex lg:flex-row md:flex-row flex-col items-center justify-between  ">
          {/* projects */}

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full ecoGreen group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>ECO GREEN INTERIORS</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full modernElegance group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>MODERN ELEGANCE SUITE</strong>
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
        {/* secondRow */}
        <div className="w-full lg:h-[49%] md:h-[49%] h-auto lg:flex md:flex hidden lg:flex-row md:flex-row flex-col items-center justify-between  ">
          {/* projects */}

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full vimeoVideo group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>VIMEO VIDEO</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full resturant group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>RESTURANT IN TEXAS</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full summerHouse group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>SUMMER HOUSE</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full office group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>OFFICE ON SPACE</strong>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default AllProjects;
