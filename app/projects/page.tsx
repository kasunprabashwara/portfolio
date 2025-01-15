"use client";

import React, { useState } from "react";
import { BorderRectangle, GridSection } from "@/components/GridComponents";
import { arrowPatternsBig } from "@/data/Data"; // Add your arrow patterns here

const projects = [
  { id: 1, title: "Project One", description: "This is the first project." },
  { id: 2, title: "Project Two", description: "This is the second project." },
  { id: 3, title: "Project Three", description: "This is the third project." },
];

const ProjectsPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base container */}
      <div className="w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection
              pattern={arrowPatternsBig.left}
              onClick={() => handleArrowClick("left")}
              onlyBlackClickable={false}
              blackColor="bg-black"
            />
          </div>
          <div className="absolute -right-40 top-1/2 -translate-y-1/2">
            <GridSection
              pattern={arrowPatternsBig.right}
              onClick={() => handleArrowClick("right")}
              onlyBlackClickable={false}
              blackColor="bg-black"
            />
          </div>
          {/* Project content */}
          <div className="relative">
            <BorderRectangle width={40} height={30} whiteColor="bg-white" />
            <div className="absolute inset-0 flex items-center justify-center text-black p-4">
              <div className="text-center">
                <h2 className="text-xl mb-4">{currentProject.title}</h2>
                <p>{currentProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
