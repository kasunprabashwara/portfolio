"use client";
import {
  Bullet,
  BulletType,
  FilledRectangle,
  GridSection,
} from "@/components/GridComponents";
import Scoreboard from "@/components/ScoreBoard";
import {
  arrowPatterns,
  bulletCombinations,
  gridSizePx,
  sections,
} from "@/data/Data";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isGameOver, setIsGameOver] = useState(false);
  const [boxPosition, setBoxPosition] = useState({ top: 0, left: 0 });

  const [bullets, setBullets] = useState<BulletType[]>([]);
  const handleArrowClick = (direction: string) => {
    const sectionOrder = Object.keys(sections);
    const currentIndex = sectionOrder.indexOf(currentSection);
    let newIndex;
    switch (direction) {
      case "up":
        newIndex = (currentIndex - 1 + sectionOrder.length) %
          sectionOrder.length;
        break;
      case "down":
        newIndex = (currentIndex + 1) % sectionOrder.length;
        break;
      case "left":
        newIndex = (currentIndex - 2 + sectionOrder.length) %
          sectionOrder.length;
        break;
      case "right":
        newIndex = (currentIndex + 2) % sectionOrder.length;
        break;
      default:
        newIndex = currentIndex;
    }
    setCurrentSection(sectionOrder[newIndex]);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (isGameOver) {
      return;
    }
    switch (event.key) {
      case "ArrowUp":
        setBoxPosition({ top: -gridSizePx * 5, left: 0 });
        break;
      case "ArrowDown":
        setBoxPosition({ top: gridSizePx * 5, left: 0 });
        break;
      case "ArrowLeft":
        setBoxPosition({ top: 0, left: -gridSizePx * 5 });
        break;
      case "ArrowRight":
        setBoxPosition({ top: 0, left: gridSizePx * 5 });
        break;
    }
  };
  const handleKeyUp = () => {
    if (isGameOver) {
      return;
    }
    setBoxPosition({ top: 0, left: 0 });
  };
  const handleRestart = () => {
    setBullets([]);
    setBoxPosition({ top: 0, left: 0 });
    setIsGameOver(false);
  };

  useEffect(() => {
    // Add bullet from the combinations
    const interval = setInterval(() => {
      if (isGameOver) {
        return;
      }
      const randomIndex = Math.floor(Math.random() * bulletCombinations.length);
      setBullets((
        prevBullets,
      ) => [...prevBullets, ...bulletCombinations[randomIndex]]);
    }, 2000);
    return () => clearInterval(interval);
  }, [isGameOver]);
  // Move bullets and detect collision
  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameOver) {
        return;
      }
      const horizontalSpeed = (window.innerWidth - gridSizePx * 20) / 1000;
      const verticalSpeed = (window.innerHeight - gridSizePx * 20) / 1000;
      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({
            ...bullet,
            position: {
              top: bullet.direction === "bottom"
                ? bullet.position.top + gridSizePx * verticalSpeed
                : bullet.direction === "top"
                ? bullet.position.top - gridSizePx * verticalSpeed
                : bullet.position.top,
              left: bullet.direction === "right"
                ? bullet.position.left + gridSizePx * horizontalSpeed
                : bullet.direction === "left"
                ? bullet.position.left - gridSizePx * horizontalSpeed
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
  }, [isGameOver]);
  const detectCollision = (bullet: BulletType) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const boxSize = 20 * gridSizePx; // Assuming box size is 20 grid units

    // Calculate actual box position relative to the screen
    const actualBoxPosition = {
      top: centerY - boxSize / 2 + boxPosition.top,
      left: centerX - boxSize / 2 + boxPosition.left,
      width: boxSize,
      height: boxSize,
    };

    const bulletSize =
      bullet.direction === "left" || bullet.direction === "right"
        ? { width: gridSizePx * 3, height: gridSizePx }
        : { width: gridSizePx, height: gridSizePx * 3 };

    // Check for collision using actual screen coordinates
    if (
      actualBoxPosition.left < bullet.position.left + bulletSize.width &&
      actualBoxPosition.left + actualBoxPosition.width > bullet.position.left &&
      actualBoxPosition.top < bullet.position.top + bulletSize.height &&
      actualBoxPosition.top + actualBoxPosition.height > bullet.position.top
    ) {
      setIsGameOver(true);
    }
  };
  useEffect(() => {
    bullets.forEach(detectCollision);
  }, [bullets, boxPosition]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
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
        {/* scoreboard in right side */}
        <div className="absolute top-4 right-4">
          <Scoreboard isGameOver={isGameOver} onRestart={handleRestart} />
        </div>
        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            style={{
              transform:
                `translate(${boxPosition.left}px, ${boxPosition.top}px)`,
            }}
          >
            <FilledRectangle width={20} height={20} />

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h2 className="text-xl mb-4">
                  {sections[currentSection].title}
                </h2>
                {currentSection === "home"
                  ? (
                    <div className="flex flex-col gap-2">
                      {sections[currentSection].links?.map((link) => (
                        <Link
                          key={link}
                          href={`${link.toLowerCase()}`}
                          className="text-white hover:text-gray-300"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )
                  : <p>{sections[currentSection].content}</p>}
              </div>
            </div>
          </div>
          {/* Navigation arrows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection
              pattern={arrowPatterns.up}
              onClick={() => handleArrowClick("up")}
              onlyBlackClickable={false}
              blackColor="bg-gray-300"
            />
          </div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection
              pattern={arrowPatterns.down}
              onClick={() => handleArrowClick("down")}
              onlyBlackClickable={false}
              blackColor="bg-gray-300"
            />
          </div>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection
              pattern={arrowPatterns.left}
              onClick={() => handleArrowClick("left")}
              onlyBlackClickable={false}
              blackColor="bg-gray-300"
            />
          </div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection
              pattern={arrowPatterns.right}
              onClick={() => handleArrowClick("right")}
              onlyBlackClickable={false}
              blackColor="bg-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
