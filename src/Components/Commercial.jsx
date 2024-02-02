import React from "react";

function Commercial() {
  return (
    <>
      <div className="w-full h-auto  flex flex-col text-center lg:overflow-hidden md:overflow-hidden overflow-scroll items-center justify-evenly ">
        {/* firstrow */}
        <div className="w-full lg:h-[49%] md:h-[49%] h-full flex lg:flex-row md:flex-row flex-col items-center justify-between  ">
          {/* projects */}

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full resturant group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>RESTURANT IN TEXAS</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full sittingRoom group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>COMMERCIAL SITTING ROOM</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full startupOffice group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>STARTUP OFFICE</strong>
            </div>
          </div>

          <div className="projectDiv lg:w-[24%] md:w-[24%] w-full homeOffice group">
            {/* content */}
            <div className=" projectsContent w-full h-full  group-hover:flex  hidden items-center justify-center text-[#ffcb49] text-sm  font-light  bg-[#0000009c] ">
              <strong>HOME OFFICE</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commercial;
