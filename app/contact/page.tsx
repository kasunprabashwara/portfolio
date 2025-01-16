"use client";

import React, { useEffect, useState } from "react";
import {
  BorderRectangle,
  Bullet,
  BulletType,
} from "@/components/GridComponents";
import { gridSizePx } from "@/data/Data";
import Link from "next/link";

const ContactPage = () => {
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
      {/* Base grid container */}
      <div className="w-full h-full">
      <Link href="/" className="absolute top-4 left-4 px-4 py-2 bg-black text-white border border-white z-20">
        Back
      </Link>
        {/* Bullets */}
        {bullets.map((bullet, index) => (
          <Bullet
            key={index}
            position={bullet.position}
            direction={bullet.direction}
          />
        ))}

        {/* Contact content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <BorderRectangle width={30} height={30} whiteColor="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center text-black p-4">
            <div className="text-center w-3/4">
              <h2 className="text-xl mb-4">Contact Me</h2>
              <p className="mb-2">
                If you really need to contact me for some reason, you can try
                the &nbsp;
                <Link
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                &nbsp; I guess. I'm not really a fan of the platform, but it's
                there. I'm way more active on facebook for better or worse. In
                fact, why not just try &nbsp;{" "}
                <Link
                  href="https://www.facebook.com/kasun.prabashwara.100/"
                  target="_blank"
                  className="text-blue-800 hover:underline"
                >
                  that
                </Link>{" "}
                &nbsp;instead? And sending me an &nbsp;{" "}
                <a
                  href="mailto:kasun.20@cse.mrt.ac.lk"
                  className="text-red-500 hover:underline"
                >
                  email
                </a>&nbsp; would also work. Although it lacks the charm of
                sending a mail by post. And I'm also on &nbsp;{" "}
                <Link
                  href="https://github.com/your-username"
                  target="_blank"
                  className="text-gray-800 hover:underline"
                >
                  GitHub.
                </Link>{" "}
                &nbsp; Like an average developer. Mostly there to drool over
                some of my favorite project repos and reading the proposals in
                issues section. Or sometimes to look at some code for reference
                and writing my own based on that of course(duh).
              </p>
              <p className="mb-2">
              </p>
              <p className="mt-6 italic text-gray-600">
                Other ways to contact me:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500">
                <li>
                  I'm immortal so if you are immortal too, then you can try to
                  walk in random directions and hope to bump into me. It's a
                  canon event :)
                </li>
                <li>Be a nice person. I'm a sucker for nice people</li>
                <li>Have you heard of telepathy?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
