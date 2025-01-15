"use client";

import React, { useState } from "react";
import { BorderRectangle, GridSection } from "@/components/GridComponents";
import { arrowPatternsBig } from "@/data/Data"; // Add your arrow patterns here

const ProjectsPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const numberOfProjects = 6;

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? numberOfProjects - 1 : prevIndex - 1
      );
    } else {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === numberOfProjects - 1 ? 0 : prevIndex + 1
      );
    }
  };

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
              <div className="text-center w-4/5 h-6/7">
                <div className="text-left space-y-8">
                  {/* Final Year Project */}
                  {currentProjectIndex === 0 && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-full md:w-1/2">
                        <img
                          src="/final-year-project.jpg"
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
                          This is our final year project. We’re building a
                          system that can automate the forex trading process.
                          Using RL algorithms like PPO and DQN with LSTM feature
                          extractors. We are currently training these models
                          with different parameters and benchmaking them.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li>Optimizing trading moves with RL.</li>
                          <li>LSTM feature extractors</li>
                          <li>
                            Team: Me, Thisura Gallage, and Savin Gunawardana.
                          </li>
                        </ul>
                        <p>
                          <strong>Tech Stack:</strong>{" "}
                          Tianshou, Python, MetaTrader 5
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Augmented Reality Mobile Application */}
                  {currentProjectIndex === 1 && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-full md:w-1/2">
                        <img
                          src="/ar-app.jpg"
                          alt="Augmented Reality Mobile Application"
                          className="w-full h-auto border border-black"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2">
                          Augmented Reality Mobile Application
                        </h3>
                        <p className="italic text-sm mb-2">December 2024</p>
                        <p className="mb-4">
                          Initially all players needs to rearrange 4 drawings to
                          align their AR counterparts. That gave key to the next
                          level. And so on and so forth. I handled the UI,
                          authentication, and live leaderboard, while Ginushmal
                          nailed the witchy 3D stuff. This was the first time I
                          worked with Unity and we had 2 days to finish it. So
                          we pulled an all-nighter and somehow made it to the
                          finish line.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li>
                            Firebase-powered authentication and live
                            leaderboard.
                          </li>
                          <li>
                            Collaborated with Ginushmal Wikumjith on 3D assets.
                          </li>
                        </ul>
                        <p>
                          <strong>Tech Stack:</strong> Unity, Firebase
                        </p>
                        <a
                          href="<add-link>"
                          className="text-blue-500 underline"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Hotel & Restaurant MIS */}
                  {currentProjectIndex === 2 && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-full md:w-1/2">
                        <img
                          src="/hotel-mis.jpg" // Replace with actual image path
                          alt="Hotel & Restaurant MIS"
                          className="w-full h-auto border border-black"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2">
                          Hotel & Restaurant MIS
                        </h3>
                        <p className="italic text-sm mb-2">
                          May 2023 - November 2023
                        </p>
                        <p className="mb-4">
                          A comprehensive system providing functionalities for
                          room booking, table reservations, and order
                          management. Developed as a web and mobile solution.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li>
                            Built virtual waiter and restaurant manager apps
                            using Java.
                          </li>
                          <li>
                            Collaborated with teammates Thivaharan and Wathmi.
                          </li>
                        </ul>
                        <p>
                          <strong>Tech Stack:</strong>{" "}
                          React, Android Studio, Firebase
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Supply Chain Management System */}
                  {currentProjectIndex === 3 && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-full md:w-1/2">
                        <img
                          src="/supply-chain.jpg"
                          alt="Supply Chain Management System"
                          className="w-full h-auto border border-black"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2">
                          Supply Chain Management System
                        </h3>
                        <p className="italic text-sm mb-2">
                          June 2022 - December 2022
                        </p>
                        <p className="mb-4">
                          This was done as our project in Database module. I
                          handled all the frontend and backend stuff with react
                          and express js. This was the first time I ever tried
                          full stack application development. so it was pretty
                          challenging and we almost gave up on it. But like week
                          before deadline, I tried connecting my backend to the
                          database and to my surprise it worked. I informed
                          thisura about it and he started looking into sql
                          procedures. And week later we had a fully functional
                          supply chain management system. I used docker to
                          deploy the application to AWS EC2 instance. Why
                          docker? because I wanted to learn it and why not at
                          this point.
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li>Implemented database triggers and procedures.</li>
                          <li>
                            Handled both frontend and backend.
                          </li>
                        </ul>
                        <p>
                          <strong>Tech Stack:</strong> MySQL, React, Docker
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Pintos User Program Implementation */}
                  {currentProjectIndex === 4 && (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-full md:w-1/2">
                        <img
                          src="/pintos.jpg"
                          alt="Pintos User Program Implementation"
                          className="w-full h-auto border border-black"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-2">
                          Pintos User Program Implementation
                        </h3>
                        <p className="italic text-sm mb-2">
                          June 2022 - December 2022
                        </p>
                        <p className="mb-4">
                          Pintos is a dummy operating system built to teach how
                          operating systems work. We were told to implement the
                          user program support in our OS module. In typical
                          student fashion we thought they wouldn't check it but
                          then close to the exam a deadline was given. So with a
                          kind guidance from my friend Chathumina who completed
                          it(he gave me all the learning resouses he found) I
                          completed it. It only took like 5 days to finish (in
                          our study week).
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li>
                            Implemented system calls and concurrency management.
                          </li>
                          <li>
                            Survived on coffee and deadlines to finish this.
                          </li>
                        </ul>
                        <p>
                          <strong>Tech Stack:</strong> QEMU, C
                        </p>
                        <a
                          href="<add-pintos-link>"
                          className="text-blue-500 underline"
                        >
                          Learn more about Pintos
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
