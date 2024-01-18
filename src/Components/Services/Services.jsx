import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import imageOne from "../Assets/one.jpg";
import imageTWo from "../Assets/services-hero.jpg";
import imageThree from "../Assets/two.jpg";
import imageFour from "../Assets/three.jpg";
import imageFive from "../Assets/four.jpg";
import imageSix from "../Assets/five.jpg";
import imageSeven from "../Assets/six.jpg";
import imageEight from "../Assets/seven.jpg";
import imageNine from "../Assets/eight.jpg";
import imageTen from "../Assets/bedroom1.jpg";
import imageEleven from "../Assets/nine.jpg";
import imageTwelve from "../Assets/ten.jpg";

const Services = () => {
  let location = useLocation();
  return (
    <div className="w-full flex items-center justify-center services">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="services-hero w-full lg:h-[30vh] md:h-[25vh] h-[22vh] flex items-center justify-center bg-fixed">
          <div className="lg:w-[82%] w-[90%] h-[30%] flex items-center justify-between">
            <div className="lg:w-[18%] md:w-[30%] h-[70%] flex items-center justify-start">
              <p className="text-[#fff] font-light text-[27px] uppercase">
                projects
              </p>
            </div>
            <div className="xl:w-[13%] lg:w-[17%] h-[60%] lg:flex hidden items-center justify-between">
              <div className="w-[35%] h-[70%] flex items-center justify-center">
                <Link to={"/"} className="text-[13px] text-[#fbb31b] uppercase">
                  home
                </Link>
              </div>
              <div className="w-[10%] h-[40%] flex items-center justify-center">
                <p className="text-[13px] text-[#eceff3] uppercase">/</p>
              </div>
              <div className="w-[50%] h-[70%] flex items-center justify-center">
                <p className="text-[13px] text-[#eceff3] uppercase">projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:h-[13vh] md:h-[15vh] h-[28vh] flex md:items-center items-start justify-center bg-[#222222]">
          <div className="xl:w-[50%] lg:w-[75%] md:w-[90%] w-[80%] md:h-full h-[65%] flex md:flex-row flex-col pt-5 md:pt-0 items-center justify-between">
            <div className="md:w-[42%] w-[95%] md:h-[70%] h-[30%] flex md:items-start lg:items-center items-end justify-between">
              <div className="w-[48%] md:h-[70%] h-[80%] flex md:pt-2 lg:pt-0 md:items-start items-center lg:items-center justify-center">
                <NavLink
                  className={`duration-300 ${
                    location.pathname === "/services"
                      ? "bg-[#fbb31b] text-[#222222] hover:bg-[#fbb41bbd] font-semibold"
                      : "bg-transparent text-[#eceff3] hover:bg-[#0b0b0b]"
                  }`}
                  to="/services"
                >
                  <button className="w-[140px] h-[32px] text-[12px] cursor-pointer uppercase bg-transparent">
                    all projects
                  </button>
                </NavLink>
              </div>
              <div className="w-[48%] md:h-[70%] h-[80%] flex md:pt-2 lg:pt-0 md:items-start items-center lg:items-center justify-center">
                <NavLink
                  className={`transition-colors duration-300 ${
                    location.pathname === "/services/residential"
                      ? "bg-[#fbb31b] text-[#222222] hover:bg-[#fbb41bbd] font-semibold"
                      : "bg-transparent text-[#eceff3] hover:bg-[#0b0b0b]"
                  }`}
                  to="/services/residential"
                >
                  <button className="w-[140px] h-[32px] text-[12px] cursor-pointer uppercase bg-transparent">
                    residential
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="md:w-[42%] w-[90%] md:h-[70%] h-[20%] flex md:items-start lg:items-center items-end justify-between">
              <div className="md:h-[70%] h-[80%] w-[48%] flex md:pt-2 lg:pt-0 md:items-start lg:items-center justify-center items-center">
                <NavLink
                  className={`transition-colors duration-300 ${
                    location.pathname === "/services/hospitaly"
                      ? "bg-[#fbb31b] text-[#222222] hover:bg-[#fbb41bbd] font-semibold"
                      : "bg-transparent text-[#eceff3] hover:bg-[#0b0b0b]"
                  }`}
                  to="/services/hospitaly"
                >
                  <button className="w-[140px] h-[32px] text-[13px] cursor-pointer uppercase bg-transparent">
                    hospitaly
                  </button>
                </NavLink>
              </div>
              <div className="w-[48%] md:h-[70%] h-[80%] flex md:pt-2 lg:pt-0 md:items-start lg:items-center justify-center items-center">
                <NavLink
                  className={`transition-colors duration-300 ${
                    location.pathname === "/services/office"
                      ? "bg-[#fbb31b] text-[#222222] hover:bg-[#fbb41bbd] font-semibold"
                      : "bg-transparent text-[#eceff3] hover:bg-[#0b0b0b]"
                  }`}
                  to="/services/office"
                >
                  <button className="w-[140px] h-[32px] text-[13px] cursor-pointer uppercase bg-transparent">
                    office
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="xl:w-[19%] md:w-[15%] w-[40%] md:h-[30%] h-[20%] flex md:items-start items-center lg:items-center lg:pb-0 md:pb-14 justify-center">
              <NavLink
                className={`transition-colors duration-300 ${
                  location.pathname === "/services/commercial"
                    ? "bg-[#fbb31b] text-[#222222] hover:bg-[#fbb41bbd] font-semibold"
                    : "bg-transparent text-[#eceff3] hover:bg-[#0b0b0b]"
                }`}
                to="/services/commercial"
              >
                <button className="w-[140px] h-[32px] text-[13px] cursor-pointer uppercase bg-transparent">
                  commercial
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          <div className="display-one cursor-pointer">
            <div className="image relative">
              <img src={imageOne} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  Eco Green Interior
                </h1>
              </div>
            </div>
          </div>
          <div className="display-two cursor-pointer">
            <div className="image relative">
              <img src={imageTWo} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  Modern Elegance Suite
                </h1>
              </div>
            </div>
          </div>
          <div className="display-three cursor-pointer">
            <div className="image relative">
              <img src={imageThree} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  Apartment renovation
                </h1>
              </div>
            </div>
          </div>
          <div className="display-four cursor-pointer">
            <div className="image relative">
              <img src={imageFour} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  bedroom Interior
                </h1>
              </div>
            </div>
          </div>
          <div className="display-five cursor-pointer">
            <div className="image relative">
              <img src={imageFive} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  meeting office
                </h1>
              </div>
            </div>
          </div>
          <div className="display-six cursor-pointer">
            <div className="image relative">
              <img src={imageSix} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  restaurant interior
                </h1>
              </div>
            </div>
          </div>
          <div className="display-seven cursor-pointer">
            <div className="image relative">
              <img src={imageSeven} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  summer house
                </h1>
              </div>
            </div>
          </div>
          <div className="display-eight cursor-pointer">
            <div className="image relative">
              <img src={imageEight} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  office in space
                </h1>
              </div>
            </div>
          </div>
          <div className="display-nine cursor-pointer">
            <div className="image relative">
              <img src={imageNine} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  luxury living room
                </h1>
              </div>
            </div>
          </div>
          <div className="display-ten cursor-pointer">
            <div className="image relative">
              <img src={imageTen} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  cozy bedroom
                </h1>
              </div>
            </div>
          </div>
          <div className="display-eleven cursor-pointer">
            <div className="image relative">
              <img src={imageEleven} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  classic furnishing
                </h1>
              </div>
            </div>
          </div>
          <div className="display-twelve cursor-pointer">
            <div className="image relative">
              <img src={imageTwelve} className="" alt="" />
              <div className="content w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col opacity-0 hover:opacity-[1]">
                <h1 className="text-[#fbb31b] text-[15px] uppercase font-semibold">
                  restaurant in cannes
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[20vh] bg-[#fbb31b] flex items-center justify-center">
          <div className="md:w-[30%] w-[50%] h-[30%] flex items-center justify-center">
            <button className="w-[200px] h-[35px] outline-none uppercase font-semibold text-[15px] border border-black">
              Get Quotation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
