"use client";

import React from "react";
import { GridBox } from "../GridComponents";


const GameOfLife = ({
  currentProjectIndex,
  grid,
  toggleCell,
  handlePlay,
  isSimulating,
  setGrid,
  gridSize,
}: {
  currentProjectIndex: number;
  grid: number[][];
  toggleCell: (row: number, col: number) => void;
  handlePlay: () => void;
  isSimulating: boolean;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
  gridSize: number;
}) => {
  if (currentProjectIndex !== 5) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Nice, you have seen all the projects here.
      </h3>
      <p className="mb-4 text-center">
        Wanna play some Game of Life while you rest? Did you know the Game of
        Life is Turing complete? So in theory, you can do whatever you want
        (probably no bringing back dead people though).
      </p>
      <p className="mb-4 text-center">
        Click below to set the starting position and click play.
      </p>

      <div className="w-full flex justify-center mb-4">
        <div className="border border-gray-500">
          {grid.map((row, i) => (
            <div key={i} style={{ display: "flex" }}>
              {row.map((cell, j) => (
                <GridBox
                  key={`${i}-${j}`}
                  isBlack={cell === 1}
                  onClick={() => toggleCell(i, j)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="space-x-4 flex justify-center">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-black text-white border border-white"
        >
          {isSimulating ? "Pause" : "Play"}
        </button>
        <button
          onClick={() =>
            setGrid(
              Array(gridSize)
                .fill(0)
                .map(() => Array(gridSize).fill(0)),
            )}
          className="px-4 py-2 bg-black text-white border border-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default GameOfLife;