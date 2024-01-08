import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-[90vh] bg-slate-400 text-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum
        minima fugit beatae libero expedita? Nobis sint deserunt eveniet quis
        numquam enim corrupti assumenda adipisci voluptatibus, officia quod
        quisquam impedit.
      </p>

      <Outlet />
    </div>
  );
};

export default About;
