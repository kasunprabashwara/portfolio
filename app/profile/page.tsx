"use client";

import React, { useEffect, useState } from "react";
import {
  BorderRectangle,
  Bullet,
  BulletType,
} from "@/components/GridComponents";
import { gridSizePx } from "@/data/Data";
import Link from "next/link";

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <BorderRectangle width={30} height={30} whiteColor="bg-white" />
          <div className="absolute inset-0 flex items-center justify-center text-black p-4">
            <div className="text-center">
              <h2 className="text-xl mb-4">User Profile</h2>
              <p className="mb-2">Name: John Doe</p>
              <p className="mb-2">
                Bio: A passionate developer exploring the grid aesthetic.
              </p>
              <p className="mb-2">Location: Grid City</p>
              <Link
                href="cv\Kasun_Prabashwara_CV.pdf"
                download={true}
                className="bg-black text-white px-4 py-2"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
