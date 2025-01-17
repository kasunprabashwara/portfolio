"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HotelMIS = ({ currentProjectIndex }: { currentProjectIndex: number }) => {
  if (currentProjectIndex !== 2) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-full md:w-1/2 align-middle">
        <Image
          src="./sem5_project.png"
          width={400}
          height={600}
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
            Built{" "}
            <Link
              className="font-bold hover:underline"
              href="https://github.com/kasunprabashwara/virtual_waiter"
            >
              Virtual Waiter
            </Link>{" "}
            and{" "}
            <Link
              className="font-bold hover:underline"
              href="https://github.com/thiva-k/Restaurant-Order-Manager"
            >
              restaurant manager
            </Link>{" "}
            apps using Java.
          </li>
          <li>
            Collaborated with teammates Thivaharan and Wathmi.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelMIS;