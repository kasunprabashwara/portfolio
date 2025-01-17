"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SupplyChain = (
  { currentProjectIndex }: { currentProjectIndex: number },
) => {
  if (currentProjectIndex !== 3) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-full md:w-1/2 align-middle justify-center">
        <Image
          src="./supply_chain_frontend.png"
          width={400}
          height={600}
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
          This was done as our project in Database module. I handled all the
          {" "}
          <Link
            className="font-bold hover:underline"
            href="https://github.com/kasunprabashwara/supply_chain_front-end"
          >
            frontend
          </Link>{" "}
          and{" "}
          <Link
            className="font-bold hover:underline"
            href="https://github.com/kasunprabashwara/supply_chain_back-end"
          >
            backend
          </Link>{" "}
          stuff with react and express js. This was the first time I ever tried
          full stack application development. I think that might be obvious
          looking at the login page. (Well I guess this page doesn't look that
          good too so nothing may have changed) So it was pretty challenging at
          that time and we almost gave up on it. But like week before deadline,
          I tried connecting my backend to the database and to my surprise it
          worked. I informed thisura about it and he started looking into sql
          procedures. And week later we had a fully functional supply chain
          management system. I used docker to deploy the application to AWS EC2
          instance. Why docker? because I wanted to learn it and why not at this
          point.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Implemented database triggers and procedures.</li>
          <li>Handled both frontend and backend.</li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> MySQL, React, Docker
        </p>
      </div>
    </div>
  );
};

export default SupplyChain;
