import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full xl:h-[50vh] lg:h-[60vh] md:h-[140vh] h-[140vh] bg-[#0b0b0b] flex flex-col items-center justify-between">
      <div className="w-full lg:h-[80%] md:h-[90%] h-[90%] bg-[#111111] flex items-center justify-center">
        <div className="xl:w-[90%] lg:w-[95%] md:w-[95%] w-[90%] xl:h-[80%] md:h-[90%] h-[90%] flex lg:flex-row md:flex-col flex-col items-center justify-between">
          <div className="xl:w-[23%] lg:w-[24%] md:w-full w-full lg:h-full flex flex-col items-start justify-around md:pb-0 pb-3 md:mb-0 mb-5">
            <div className="w-full h-[20%]"></div>
            <div className="w-full h-[80%]">
              <p className="text-[#eceff3] font-medium text-start xl:text-[15px] lg:text-sm md:text-sm text-[12px]">
                We are passionate about transforming spaces into stunning,
                functional, and personalized environments. With years of
                experience in the industry, we specialize in creating
                exceptional interior designs that reflect our clients unique
                style and meet their specific needs.
              </p>
            </div>
          </div>
          <div className="xl:w-[23%] lg:w-[24%] md:w-full w-full lg:h-full flex flex-col items-start justify-around">
            <div className="w-full h-[15%] flex items-end justify-start lg:pb-0 md:pb-3 pb-3 text-[#f8fbf8] font-medium uppercase">
              Lastest news
            </div>
            <div className="w-full h-[70%] flex flex-col items-start justify-around mb-3">
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link
                  to="#"
                  className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]"
                >
                  The Essential Interior Design Tips
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Functional Wall-to-Wall Shelves
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  9 Unique Ways to Display Your TV
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  The 5 Secrets to Minimal Design
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Make a Huge Impact With Multiples
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-[23%] lg:w-[24%] md:w-full w-full lg:h-full flex flex-col items-start justify-around">
            <div className="w-full h-[15%] flex items-end justify-start md:pb-3 pb-3 lg:pb-0 text-[#f8fbf8] font-medium uppercase">
              contact us
            </div>
            <div className="w-full h-[70%] flex flex-col items-start justify-around mb-3">
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <p className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm">
                  100 S Main St, Los Angeles, CA
                </p>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <div className="xl:w-[55%] lg:w-[75%] md:w-[25%] flex items-center justify-between">
                  <p className="text-[#fab702] font-semibold xl:text-[14px] md:text-sm text-sm">
                    Phone:{" "}
                  </p>
                  <p className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702] cursor-pointer">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start  border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <div className="xl:w-[55%] lg:w-[75%] md:w-[25%] flex items-center justify-between">
                  <p className="text-[#fab702] font-semibold xl:text-[14px] md:text-sm text-sm">
                    Fax:{" "}
                  </p>
                  <p className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702] cursor-pointer">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <div className="xl:w-[78%] lg:w-full md:w-[35%] flex items-center justify-between">
                  <p className="text-[#fab702] font-semibold xl:text-[14px] md:text-sm text-sm">
                    Email:{" "}
                  </p>
                  <p className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702] cursor-pointer">
                    contact@stylemuse.com
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <div className="xl:w-[70%] lg:w-[90%] md:w-[31%] flex items-center justify-between">
                  <p className="text-[#fab702] font-semibold xl:text-[14px] md:text-sm text-sm">
                    Web:{" "}
                  </p>
                  <p className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702] cursor-pointer">
                    http://stylemuse.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-full w-full lg:h-full flex flex-col items-start justify-around">
            <div className="w-full h-[15%] flex items-end justify-start md:pb-3 pb-3 lg:pb-0 text-[#f8fbf8] font-medium uppercase">
              our services
            </div>
            <div className="w-full h-[70%] flex flex-col istems-start justify-around mb-3">
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link
                  to="#"
                  className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]"
                >
                  Interior Design
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Architecture
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Industry
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Consulting
                </Link>
              </div>
              <div className="w-full flex items-center justify-start border-b border-[#222222] lg:pb-1 md:pb-3 pb-3">
                <Link className="text-[#eceff3] font-medium xl:text-[14px] md:text-sm text-sm hover:text-[#fab702]">
                  Photography
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[20%] md:h-[10%] h-[10%] bg-[#0b0b0b] flex items-center justify-center">
        <div className="xl:w-[90%] lg:w-[95%] md:w-[95%] w-[90%] h-[80%] flex items-center justify-between">
          <div className="md:w-[50%] w-[60%] h-full flex items-center justify-start">
            <p className="text-[#eceff3] font-medium md:text-[17px] text-sm">
              © Copyright 2022 -{" "}
              <span className="text-[#fab702]">StyleMuse</span>
            </p>
          </div>
          <div className="xl:w-[15%] lg:w-[20%] md:w-[30%] w-[30%] h-full flex items-center justify-between">
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaGooglePlusG />
            </Link>
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaSkype />
            </Link>
            <Link
              to="#"
              className="text-[#eceff3] flex items-center justify-between font-semibold md:text-[20px] text-[15px] hover:text-[#fab702]"
            >
              <FaGlobe />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
