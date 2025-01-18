"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pintos = ({ currentProjectIndex }: { currentProjectIndex: number }) => {
  if (currentProjectIndex !== 4) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-full md:w-1/2 align-middle">
        <Image
          src="./pintos.png"
          width={400}
          height={600}
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
          <Link
            className="font-bold hover:underline"
            href={"https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html"}
          >
            Pintos
          </Link>{" "}
          is a dummy operating system built to teach how operating systems work.
          We were told to implement the user program support in our OS module.
          In typical student fashion we thought they wouldn't check it but then
          close to the exam a deadline was given. So with a kind guidance from
          my friend Chathumina who completed it(he gave me all the learning
          resources he found) I completed it. It only took like 5 days to finish
          (in our study week). I ended up with 85% test case passes. The code is
          in{" "}
          <Link
            href="https://github.com/kasunprabashwara/Pintos"
            className="font-bold hover:underline"
          >
            here
          </Link>
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
      </div>
    </div>
  );
};

export default Pintos;
