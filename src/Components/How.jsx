import React from "react";
import myVideo from "../assets/videoclip.mp4";

function How() {
  return (
    <>
      <div className=" how bg-fixed w-full h-full flex lg:flex-row md:flex-row flex-col items-center justify-evenly text-white ">
        {/* textDiv */}
        <div className="lg:w-[45%] md:w-[45%] w-full lg:h-[84%] md:h-[84%] h-[80vh] flex flex-col items-start justify-evenly bg-[#00000013] ">
          <small className="text-[#d79b05] font-extrabold text-base tracking-[4px] ">
            DISCOVER
          </small>
          <strong className=" lg:text-4xl md:text-3xl text-2xl font-bold ">
            How It Works?
          </strong>
          <p className="text-slate-100 font-medium lg:text-base md:text-sm text-sm ">
            Transforming your space is a breeze with our interior design
            service. Kick things off by sharing your vision, be it a mood board
            or a simple set of ideas. Our design wizards then whip up a custom
            plan, tailored just for you, complete with a layout, color palette,
            and furniture suggestions that fit your style and budget. We love
            collaboration, so you'll get to tweak the design until it's just
            right. After that, sit back while we handle the nitty-gritty of
            ordering and logistics, ensuring everything arrives on time. Our ace
            installers will set up your space to perfection, and voilà, you're
            ready to revel in the comfort and style of your newly minted haven.
          </p>
          <button className="text-white text-sm font-medium border-2 border-white px-5 py-1 hover:text-black hover:bg-white ">
            CONTACT US NOW
          </button>
        </div>

        {/* viveoDiv */}
        <div className="lg:w-[50%] md:w-[50%] w-full h-[70%] flex items-center justify-center ">
          <video
            className="w-full h-full "
            src={myVideo}
            type="video/mp4"
            autoPlay
            controls
            loop
          ></video>
        </div>
      </div>
    </>
  );
}

export default How;
