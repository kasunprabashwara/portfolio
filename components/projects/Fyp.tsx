"use client";

import React from "react";
import Image from "next/image";

const Fyp = ({ currentProjectIndex }: { currentProjectIndex: number }) => {
  if (currentProjectIndex !== 0) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-full md:w-1/2 align-middle">
        <Image
          src="./metatrader.png"
          width={400}
          height={600}
          alt="Final Year Project"
          className="w-full h-auto border border-black"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-2">
          Automated Multi-Currency Forex Trading
        </h3>
        <p className="italic text-sm mb-2">Ongoing</p>
        <p className="mb-4">
          This is our final year project. We’re building a system that can
          automate the forex trading process. Using RL algorithms like PPO and
          DQN with LSTM feature extractors. We are currently training these
          models with different parameters and benchmaking them.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Optimizing trading moves with RL.</li>
          <li>LSTM feature extractors</li>
          <li>
            Team: Me, Thisura Gallage, and Savin Gunawardana.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> Tianshou, Python, MetaTrader 5
        </p>
      </div>
    </div>
  );
};

export default Fyp;
