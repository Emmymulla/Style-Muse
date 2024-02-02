import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaLocationDot, FaHeadphones } from "react-icons/fa6";

import SpacePlanning from "../components/SpacePlanning";
import Preconstruction from "../components/Preconstruction";
import CustomFuniture from "../components/CustomFuniture";
import { FaArrowRight } from "react-icons/fa6";
import TestimonialSlider from "../components/TestimonialSlider";
import HomeProjects from "../components/HomeProjects";
import Pitch from "../components/Pitch";
import How from "../components/How";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center ">
        {/* hero-sectiion */}
        <div className=" heroSection bg-fixed bg-center  w-full lg:h-[89vh] md:h-[77vh] h-[70vh] flex flex-col items-center justify-between    ">
          {/* heroCaptionDiv */}
          <div className="lg:w-[85%] md:w-[90%] w-[90%] h-[62vh] flex flex-col items-center justify-evenly text-[#f8f4d7dc] lg:text-7xl md:text-5xl text-3xl ">
            <h1 className="flex flex-col items-center justify-between lg:leading-snug md:leading-relaxed leading-relaxed font-semibold text-center ">
              Inspiring Spaces <span>Unleashing Creativity</span>
            </h1>

            {/* call to action button */}
            <button className="text-base p-4 animate-pulse duration-700 font-bold rounded-lg  text-black bg-[#d79d05]">
              <Link to="/contact">Book a Consultation</Link>
            </button>
          </div>

          {/* workingTimeDiv */}
          <div className="w-full h-[14vh] lg:flex md:hidden hidden items-center justify-center bg-[#222222c4]  ">
            {/* contentContainer */}
            <div className="w-[87%] h-full flex items-center justify-between  ">
              {/* openingTimes */}
              <div className="w-[30%] h-full flex items-center justify-between  ">
                {/* iconDiv */}
                <div className=" w-[28%] h-full flex items-center justify-center text-[#d79b05b2] text-6xl font-bold  ">
                  <FaRegClock />
                </div>
                {/* textDiv */}
                <div className="w-[72%] h-full flex flex-col items-start pl-2 justify-evenly text-[#f8f4d7dc]  ">
                  <strong>OPENING TIMES</strong>
                  <small className="font-semibold">
                    Monday - Friday: 9:00 - 18:00
                  </small>
                </div>
              </div>

              {/* OurLocation */}
              <div className="w-[30%] h-full flex items-center justify-between  ">
                {/* iconDiv */}
                <div className=" w-[28%] h-full flex items-center justify-center text-[#d79b05b2] text-6xl font-bold ">
                  <FaLocationDot />
                </div>
                {/* textDiv */}
                <div className="w-[72%] h-full flex flex-col items-start pl-2 justify-evenly text-[#f8f4d7dc]  ">
                  <strong>OUR LOCATION</strong>
                  <small className="font-semibold">
                    100 Learn Factory Road
                  </small>
                </div>
              </div>

              {/* customerSupport */}
              <div className="w-[30%] h-full flex items-center justify-between  ">
                {/* iconDiv */}
                <div className=" w-[28%] h-full flex items-center justify-center text-[#d79b05b2] text-6xl font-bold  ">
                  <FaHeadphones />
                </div>
                {/* textDiv */}
                <div className="w-[72%] h-full flex flex-col items-start pl-2 justify-evenly text-[#f8f4d7dc]  ">
                  <strong>CUSTOMER SUPPORT</strong>
                  <small className="font-semibold">+23490-453-444</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 25 years of experience */}
        <div className=" w-full lg:h-[79vh] md:h-[120vh] h-[189vh] flex lg:flex-row md:flex-col flex-col items-center justify-evenly bg-[#111111]  ">
          {/* 25 years */}
          <div className="lg:w-[26%] md:w-[90%] w-[90%] h-[43vh] flex flex-col items-center justify-center border border-[#c4c4c488] pb-4 ">
            <strong className="text-white text-[9rem] font-bold  ">05</strong>
            <small className="text-white text-lg font-bold">
              Years of Experience
            </small>
          </div>

          {/* welcome your */}
          <div className="lg:w-[26%] md:w-[90%] w-[90%] h-[43vh] flex flex-col items-start justify-evenly  ">
            <strong className="text-[#d79d05]  font-bold ">WELCOME</strong>
            <small className="text-white text-2xl font-bold tracking-wide leading-loose">
              YOUR IDEAL ASSOCIATE IN INTERIOR DECOR AND THE DESIGN OF INTERIORS
            </small>
          </div>

          {/* pitch */}
          <div className="lg:w-[30%] md:w-[90%] w-[90%]  flex items-center justify-center text-[#ffffffdc] text-sm tracking-normal leading-normal  ">
            <span className="text-[#d79d05]">
              {" "}
              At Style Muse, we believe that your space should be a reflection
              of your unique personality and lifestyle. Our team of experienced
              interior designers is dedicated to creating customized spaces that
              not only look stunning but also function seamlessly for your
              everyday needs.
            </span>{" "}
            Our talented designers are committed to bringing your vision to
            life. With a keen eye for detail and a passion for beautiful,
            functional spaces, we take pride in delivering exceptional designs
            that exceed our clients' expectations. From conceptualization and
            planning to the final execution, we are with you every step of the
            way to ensure a smooth and enjoyable design experience.
          </div>
        </div>

        {/* servicesDiv */}
        <div className=" bg-fixed w-full lg:h-[69vh] md:h-[69vh] h-[165vh] flex flex-col items-center justify-evenly bg-[#beb5b5e8]  ">
          <div className=" w-full lg:h-[60vh] md:h-[60vh] h-[161vh] flex lg:flex-row md:flex-row flex-col overflow-auto items-center  lg:justify-evenly md:justify-evenly justify-evenly   ">
            {/* funitureLayout */}
            {/* <FunitureLayout /> */}
            <SpacePlanning />
            <Preconstruction />
            <CustomFuniture />
          </div>
          <button className=" lg:w-[15vw] md:w-[25vw] w-[40vw] lg:h-[8vh] md:h-[8vh] h-[6vh] bg-[#d79b05] flex items-center justify-evenly border border-[#d79b0559] text-slate-900 font-bold rounded-md ">
            <Link to="/services">VIEW MORE</Link>
            <b>
              <FaArrowRight />
            </b>
          </button>
        </div>

        {/* testimonialsDiv */}
        <div className=" testimonials bg-fixed w-full lg:h-[80vh] md:h-[69vh] h-[80vh] flex flex-col items-center justify-evenly bg-center bg-[whitesmoke] ">
          <TestimonialSlider />
        </div>

        {/* prijectsDiv */}
        <div className="w-full  h-auto pb-5 flex items-center justify-center bg-[#111111] ">
          <HomeProjects />
        </div>

        {/* why we are the besr */}
        <div className="w-full lg:h-[65vh] md:h-[65vh] h-auto p-5 flex items-center justify-center bg-[whitesmoke]  ">
          <Pitch />
        </div>

        {/* how it works */}
        <div className="w-full lg:h-[90vh] md:h-[90vh] h-[auto] flex items-center justify-center ">
          <How />
        </div>

        {/* cheers */}
        <div className="w-full h-[15vh] p-2 flex items-center justify-evenly text-white  bg-[#d79b05] ">
          <strong className="lg:text-2xl md:text-xl text-lg">
            Our interior design firm is the best in the business.
          </strong>

          <Link to="/contact">
            <button className="text-white text-sm font-medium border-2 border-white px-5 py-1 hover:text-black hover:bg-white ">
              CONTACT US NOW
            </button>
          </Link>
        </div>

        {/* closingDiv */}
      </div>
    </>
  );
};

export default Home;
