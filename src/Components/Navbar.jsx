import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full shadow-xl flex justify-center items-center">
      <div className="w-[90%] h-full flex items-center justify-around bg-white">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">
          <button className="w-[100px] h-[40px] bg-slate-500 font-medium text-sm text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
