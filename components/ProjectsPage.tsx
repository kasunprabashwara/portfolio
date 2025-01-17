"use client";

import React, { useEffect, useState } from "react";
import {
  BorderRectangle,
  GridBox,
  GridSection,
} from "@/components/GridComponents";
import { arrowPatternsBig, gridSizePx } from "@/data/Data";
import Link from "next/link";
import Image from "next/image";
import Fyp from "./projects/Fyp";
import ARApp from "./projects/ARapp";
import HotelMIS from "./projects/HotelMIS";
import SupplyChain from "./projects/SupplyChain";
import Pintos from "./projects/Pintos";
import GameOfLife from "./projects/GameOfLife";
import { getNextGeneration, toggleCell } from "@/utils/GameOfLifeLogic";

const ProjectsPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const numberOfProjects = 6; // Includes Game of Life as the 6th "project"
  const gridSize = 15;
  const [grid, setGrid] = useState(
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(0)),
  );
  const [largeGrid, setLargeGrid] = useState(
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(0)),
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seenProjects, setSeenProjects] = useState<number[]>([0]);

  const handleArrowClick = (direction: string) => {
    const seenAll = seenProjects.length >= numberOfProjects - 1;
    if (direction === "left") {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? (seenAll ? 5 : numberOfProjects - 2) : prevIndex - 1
      );
    } else {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === (seenAll ? 5 : numberOfProjects - 2) ? 0 : prevIndex + 1
      );
    }
    if (!seenProjects.includes(currentProjectIndex)) {
      setSeenProjects((prev) => [...prev, currentProjectIndex]);
    }
  };

  const handleToggleCell = (row: number, col: number) => {
    const newGrid = toggleCell(grid, row, col);
    setGrid(newGrid);
  };

  const handlePlay = () => {
    const rows = Math.floor(window.innerHeight / gridSizePx);
    const cols = Math.floor(window.innerWidth / gridSizePx);

    // Create a larger grid filled with 0
    const largeGrid = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));

    // Place the 15x15 user grid in the center of the large grid
    const userGridSize = 15;
    const startRow = Math.floor((rows - userGridSize) / 2);
    const startCol = Math.floor((cols - userGridSize) / 2);

    // Merge user grid into the large grid
    grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        largeGrid[startRow + i][startCol + j] = cell;
      });
    });

    setLargeGrid(largeGrid);
    setIsSimulating(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && isSimulating) {
        setLargeGrid((prevGrid) => getNextGeneration(prevGrid));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isSimulating, isPaused]);

  if (isSimulating) {
    return (
      <div className="fixed inset-0 overflow-hidden flex items-center justify-center">
        <Link
          href="/"
          className="absolute top-4 left-4 px-4 py-2 bg-black text-white border border-white"
        >
          Back
        </Link>
        <div>
          {largeGrid.map((row, i) => (
            <div key={i} style={{ display: "flex" }}>
              {row.map((cell, j) => (
                <GridBox
                  key={`${i}-${j}`}
                  isBlack={cell === 1}
                  onClick={() => handleToggleCell(i, j)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 space-x-4">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-4 py-2 bg-black text-white border border-white"
          >
            {isPaused ? "Play" : "Pause"}
          </button>
          <button
            onClick={() => {
              setIsSimulating(false);
              setIsPaused(false);
            }}
            className="px-4 py-2 bg-black text-white border border-white"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="w-full h-full">
        <Link
          href="/"
          className="absolute top-4 left-4 px-4 py-2 bg-black text-white border border-white"
        >
          Back
        </Link>
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

          <div className="relative">
            <BorderRectangle width={40} height={30} whiteColor="bg-white">
            <div className="absolute inset-0 flex items-center justify-center text-black p-4">
              <div className="text-center w-4/5 h-6/7">
                <div className="text-left space-y-8">
                  <Fyp currentProjectIndex={currentProjectIndex} />
                  <ARApp currentProjectIndex={currentProjectIndex} />
                  <HotelMIS currentProjectIndex={currentProjectIndex} />
                  <SupplyChain currentProjectIndex={currentProjectIndex} />
                  <Pintos currentProjectIndex={currentProjectIndex} />
                  <GameOfLife currentProjectIndex={currentProjectIndex} grid={grid} setGrid={setGrid} gridSize={gridSize} isSimulating={isSimulating} toggleCell={handleToggleCell} handlePlay={handlePlay}/>
                </div>
              </div>
            </div>
            </BorderRectangle>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
