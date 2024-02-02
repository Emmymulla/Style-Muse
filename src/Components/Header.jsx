import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/style muse (2).png";
import { BiMenu, BiX } from "react-icons/bi";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerBg, setHeaderBg] = useState("transperent");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setHeaderBg("black");
      } else {
        setHeaderBg("transperent");
      }
    };
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{ backgroundColor: headerBg }}
        className="w-full h-[10vh] flex items-center justify-center fixed top-0 bg-[#0b0b0bf6] shadow-sm z-20 shadow-slate-950   "
      >
        {/* content-container */}
        <div className="w-[90vw] h-[10vh] flex items-center justify-between  ">
          {/* logo-and-home */}
          <div className="lg:w-[18vw] md:w-[35vw] w-[38vw] h-[10vh]    ">
            <Link
              className="h-[10vh] lg:pt-[1vh] md:pt-[1.5vh] pt-0 flex items-center justify-center  "
              to="/"
            >
              <img
                className=" hover:animate-pulse"
                src={logo}
                alt="style muse logo"
                // height={"90%"}
                width={"80%"}
              />
            </Link>
          </div>

          {/* other-navlinks */}
          <div className="w-[45vw] h-[10vh] lg:flex md:hidden hidden items-center justify-evenly text-white text-xs font-semibold  ">
            <Link to="/services" className=" hover:text-[#d79d05]  ">
              SERVICES{" "}
            </Link>
            <Link className=" hover:text-[#d79d05] ">SHOP</Link>
            <Link className=" hover:text-[#d79d05] ">BLOGS</Link>
            <Link to="/contact" className=" hover:text-[#d79d05] ">
              CONTACT US
            </Link>
          </div>

          {/* login-&-signup */}
          <div className="w-[18vw] h-[10vh] lg:flex md:hidden hidden items-center justify-evenly text-white text-xs font-bold  ">
            <button className="w-[7vw] h-[5vh] rounded-md bg-[#faab02] text-[#0b0b0b] hover:bg-[#0b0b0b] hover:text-[#d79d05] hover:border hover:border-[#d79d05] ">
              <Link>LOGIN</Link>
            </button>
            <button className="w-[7vw] h-[5vh] rounded-md hover:bg-[#faab02] hover:text-[#0b0b0b] bg-[#0b0b0b] text-[#d79d05] border border-[#d79d05]">
              <Link>SIGNUP</Link>
            </button>
          </div>

          {/* Menu dropdown */}
          <div className=" md:w-[15vh] sm:w-[20vw] md:h-[10vh] h-[8vh] lg:hidden md:flex sm:flex items-center justify-center  ">
            <button
              onClick={toggleMenu}
              className="text-[#0b0b0b] bg-[#faab02] md:text-5xl text-4xl  font-extrabold"
            >
              {isOpen ? <BiX /> : <BiMenu />}
            </button>

            {/* dropdown-container */}
            {isOpen && (
              <div className="md:w-[26vw] w-[40vw] h-[53vh] flex absolute top-[10vh] right-0 items-center justify-center bg-[#0b0b0b] ">
                {/* dropdown-content */}
                <div className="md:w-[24vw] w-[38vw] h-[50vh] flex flex-col items-start justify-between ">
                  <ul className=" md:w-[24vw] w-[38vw]  h-[30vh] flex flex-col items-start justify-between text-white text-sm font-semibold">
                    <Link to="/services">
                      <li>PROJECTS</li>
                    </Link>
                    <li>SHOP</li>
                    <li>BLOGS</li>
                    <Link to="/contact">
                      {" "}
                      <li>CONTACT US</li>
                    </Link>
                  </ul>
                  <button className="w-[inherit] h-[5vh] text-[#0b0b0b] bg-[#faab02] text-sm font-bold ">
                    <Link> LOGIN</Link>
                  </button>
                  <button className="w-[inherit] h-[5vh] text-[#0b0b0b] bg-[#faab02] text-sm font-bold  ">
                    <Link> SIGNUP</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
