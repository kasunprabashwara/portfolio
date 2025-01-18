"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ARApp = ({ currentProjectIndex }: { currentProjectIndex: number }) => {
  if (currentProjectIndex !== 1) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-full md:w-1/2 align-middle">
        <Image
          src="./ar_project.png"
          width={400}
          height={600}
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
          Initially all players needs to rearrange 4 drawings to align their AR
          counterparts. That gave key to the next level. And so on and so forth.
          I handled the UI, authentication, and live leaderboard, while
          Ginushmal nailed the witchy 3D stuff. This was the first time I worked
          with Unity and we had 2 days to finish it. So we pulled an all-nighter
          and somehow made it to the finish line. The repo was in Unity version
          control. Ginushamal reuploaded it on{" "}
          <Link
            className="font-bold hover:underline"
            href="https://github.com/Ginushmal/HitTheGroundScav"
          >
            here
          </Link>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Firebase-powered authentication and live leaderboard.</li>
          <li>Collaborated with Ginushmal Wikumjith on 3D assets.</li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> Unity, Firebase
        </p>
      </div>
    </div>
  );
};

export default ARApp;
