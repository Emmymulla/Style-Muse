import React from "react";
import Services from "./Services";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Outlet />
    </div>
  );
};

export default Default;
