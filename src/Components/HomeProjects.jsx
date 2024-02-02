import React from "react";
import { useState } from "react";
import AllProjects from "./AllProjects";
import Residential from "./Residential";
import Hospitality from "./Hospitality";
import Office from "./Office";
import Commercial from "./Commercial";

function HomeProjects() {
  const [activeComponent, setActiveComponent] = useState("first");

  const showAllProjects = () => {
    setActiveComponent("first");
  };

  const showResidential = () => {
    setActiveComponent("second");
  };

  const showHospitality = () => {
    setActiveComponent("third");
  };

  const showOffice = () => {
    setActiveComponent("fourth");
  };

  const showCommercial = () => {
    setActiveComponent("fifth");
  };

  return (
    <>
      <div className="w-full  h-auto flex flex-col  items-center justify-between bg-[#161616] ">
        {/* buttons */}
        <div className="lg:w-[60%] md:w-[80%] w-[98%] lg:h-[10vh] md:h-[15vh] h-[20vh] flex lg:flex-row md:flex-row flex-wrap  items-center justify-evenly  ">
          <button
            style={{
              backgroundColor:
                activeComponent === "first" ? "#d79b05" : "#161616",
            }}
            onClick={showAllProjects}
            className="projectsBtn lg:w-[10vw] md:w-[15vw] w-[35vw]"
          >
            ALL PROJECTS
          </button>
          <button
            style={{
              backgroundColor:
                activeComponent === "second" ? "#d79b05" : "#161616",
            }}
            onClick={showResidential}
            className="projectsBtn lg:w-[10vw] md:w-[15vw] w-[30vw]"
          >
            RESIDENTIAL
          </button>
          <button
            style={{
              backgroundColor:
                activeComponent === "third" ? "#d79b05" : "#161616",
            }}
            onClick={showHospitality}
            className="projectsBtn lg:w-[10vw] md:w-[15vw] w-[30vw]"
          >
            HOSPITALITY
          </button>
          <button
            style={{
              backgroundColor:
                activeComponent === "fourth" ? "#d79b05" : "#161616",
            }}
            onClick={showOffice}
            className="projectsBtn lg:w-[10vw] md:w-[15vw] w-[30vw]"
          >
            OFFICE
          </button>
          <button
            style={{
              backgroundColor:
                activeComponent === "fifth" ? "#d79b05" : "#161616",
            }}
            onClick={showCommercial}
            className="projectsBtn lg:w-[10vw] md:w-[15vw] w-[30vw]"
          >
            COMMERCIAL
          </button>
        </div>

        <div className="lg:w-[85%] md:w-[95%] w-[97%] h-auto flex items-center justify-center ">
          {activeComponent === "first" && <AllProjects />}
          {activeComponent === "second" && <Residential />}
          {activeComponent === "third" && <Hospitality />}
          {activeComponent === "fourth" && <Office />}
          {activeComponent === "fifth" && <Commercial />}
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
