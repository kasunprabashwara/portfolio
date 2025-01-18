"use client";

import React, { useEffect, useState } from "react";
import {
  BorderRectangle,
  Bullet,
  BulletType,
} from "@/components/GridComponents";
import { gridSizePx } from "@/data/Data";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {
  const [bullets, setBullets] = useState<BulletType[]>([]);

  // Generate bullets
  useEffect(() => {
    const interval = setInterval(() => {
      const randomDirection = ["top", "bottom", "left", "right"][
        Math.floor(Math.random() * 4)
      ];
      setBullets((prevBullets) => [
        ...prevBullets,
        {
          position: {
            top: randomDirection === "bottom"
              ? -gridSizePx * 4
              : randomDirection === "top"
              ? window.innerHeight + gridSizePx * 4
              : Math.random() * window.innerHeight,
            left: randomDirection === "right"
              ? -gridSizePx * 4
              : randomDirection === "left"
              ? window.innerWidth + gridSizePx * 4
              : Math.random() * window.innerWidth,
          },
          direction: randomDirection,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Move bullets
  useEffect(() => {
    const interval = setInterval(() => {
      const horizontalSpeed = 3 * gridSizePx;
      const verticalSpeed = 3 * gridSizePx;

      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({
            ...bullet,
            position: {
              top: bullet.direction === "bottom"
                ? bullet.position.top + verticalSpeed
                : bullet.direction === "top"
                ? bullet.position.top - verticalSpeed
                : bullet.position.top,
              left: bullet.direction === "right"
                ? bullet.position.left + horizontalSpeed
                : bullet.direction === "left"
                ? bullet.position.left - horizontalSpeed
                : bullet.position.left,
            },
          }))
          .filter(
            (bullet) =>
              bullet.position.top > -gridSizePx * 4 &&
              bullet.position.top < window.innerHeight + gridSizePx * 4 &&
              bullet.position.left > -gridSizePx * 4 &&
              bullet.position.left < window.innerWidth + gridSizePx * 4,
          )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-10 px-4 py-2 bg-black text-white border border-white hidden sm:block"
      >
        Back
      </Link>
      {/* Base grid container */}
      <div className="w-full h-full">
        {/* Bullets */}
        {bullets.map((bullet, index) => (
          <Bullet
            key={index}
            position={bullet.position}
            direction={bullet.direction}
          />
        ))}

        {/* Profile content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 py-10 md:p-0">
          <BorderRectangle
            width={window.innerWidth < 750
              ? 18
              : window.innerWidth < 1280
              ? 30
              : 40}
            height={window.innerWidth < 750
              ? 35
              : window.innerWidth < 1280
              ? 30
              : 30}
            whiteColor="bg-white"
          >
            <div className="absolute inset-0 flex justify-center text-black p-20 overflow-y-auto no-scrollbar">
              <div className="text-center w-9/10 h-4/6">
                <h2 className=" text-7xl font-semibold mb-4">Welcome</h2>
                <Image
                  src="./kasun_prabashwara_image.jpg" // Replace with your image path
                  alt="Kasun Prabashwara"
                  width={350}
                  height={200}
                  className="mx-auto border-2 border-black"
                />
                <p className="mb-2">
                  Hi! My name is Kasun Prabashwara. First of all, if you like to
                  offer me job or something, my CV is &nbsp;
                  <Link
                    href="cv\Kasun_Prabashwara_CV.pdf"
                    download={true}
                    className="   bg-black text-white"
                  >
                    Here.
                  </Link>&nbsp;Don't worry about all other the bs in here.(and
                  thank you 🥰) If not, well my friend, you are in for some
                  looong story. (I'm sorry. I promise I'm cringing as much as
                  you are)
                </p>
                <h3 className="text-4xl font-semibold mb-4">The Beginning</h3>
                <p className="mb-2">
                  Ever since I was a kid, I had the luxury of having a personal
                  computer. Our family was not rich. Far from it. But my brother
                  rebelled to get a computer becuase he wanted one to study ICT
                  in his school. IDK whether he actually did any study from it
                  but I got to play with it when many other kids in our
                  neighbourhood didn't have one. I played video games on it and
                  I started buying Vijaya Computer magazine every month.(I still
                  have that collection btw) Well that might be misleading tho
                  cuz I actually read all kind of stuff back then. By age 9, I
                  finished reading every single book in our house. And that
                  included my brother's school textbooks. Because of that I even
                  had a chance to participate in international junior science
                  olympiad in 2011 and 2012 in Philliphines and India.
                </p>
                <h3 className="text-4xl font-semibold mb-4">Uni Life</h3>
                <div className="mb-2">
                  I passed my A/Ls with flying colors(<s>not</s>{" "}
                  to brag) So I thought, now the hard times are over. How foolish
                  was I. So I had to start working again. I think I might be
                  able to pull through with a first class at this rate. In the
                  meantime, I learnt some stuff about programming, algorithms
                  and some machine learning. So here we are.
                </div>
                <h3 className="text-4xl font-semibold mb-6">
                  Uhmm, Professional Stuff
                </h3>

                {/* Skills Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 underline">
                    Skills
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-xl font-bold mb-2">
                        Programming Languages
                      </h5>
                      <p>Python, Java, JavaScript, Kotlin, C++, C#, C, Zig</p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">
                        Technical Fields
                      </h5>
                      <p>
                        Full Stack Development, Mobile Applications, Machine
                        Learning
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Databases</h5>
                      <p>MySQL, PostgreSQL, Firebase</p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Frameworks</h5>
                      <p>React, Spring Boot, Jetpack Compose, Unity</p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">
                        Tools & Services
                      </h5>
                      <p>Git, IntelliJ IDEA, VS Code, Kaggle</p>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 underline">
                    Professional Experience
                  </h4>
                  <div>
                    <h5 className="text-xl font-bold">
                      Software Engineering Intern at GTN Tech
                    </h5>
                    <p className="text-sm italic mb-2">2023 Nov - 2024 May</p>
                    <p>
                      Migrated an old .NET application to a modern web-based
                      architecture using React and Spring Boot with GraphQL.
                      Created React micro frontends, implemented sorting and
                      filtering for order execution displays, and developed
                      comprehensive report generation with JasperReports and
                      Postgres.
                    </p>
                  </div>
                </div>
                <div className="mb-8">
                  <h4 className="text-2xl font-bold underline mb-4">
                  Highlights & Achievements
                  </h4>
                  <div className="flex flex-wrap gap-4">
                  <span className=" text-white bg-black px-4 py-2">
                    Bashaway 2023 - 3rd Place
                  </span>
                  <span className=" text-white bg-black px-4 py-2">
                    SLRC 2022 Finalist
                  </span>
                  <span className=" text-white bg-black px-4 py-2">
                    Dean’s List - Semester 1, 3, 5
                  </span>
                  <span className=" text-white bg-black px-4 py-2">
                    Director, UOM Drama Club
                  </span>
                  <span className=" text-white bg-black px-4 py-2">
                    2nd and 6th place in National Junior Science Olympiad 2012, 2011
                  </span>
                  </div>
                </div>
                <h3 className="text-4xl font-semibold mb-4">
                  About this site
                </h3>
                <p className="mb-2">
                  I found that other people are making these things and thought
                  about making one. But then I was like, "Nah, this whole thing
                  is stupid". Because if I'm going to use a template, what
                  purpose does it serve? You know it's a template. I know it's a
                  template. So why bother? And I'm not that good enough to build
                  an interesting one myself. But then it occured to me that I
                  could play this angle. I could make a shit site and pretend
                  that it is good. So I whipped this bad boy in like 3 days. It
                  took more time than I thought because it is never that simple.
                  But yeah. And I know there is shit ton of bugs that I'm too
                  lazy to fix. So have fun with them as well.
                </p>
                <div className="h-20" />
              </div>
            </div>
          </BorderRectangle>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
