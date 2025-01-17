"use client";
import {
  Bullet,
  BulletType,
  FilledRectangle,
  GridSection,
} from "@/components/GridComponents";
import Scoreboard from "@/components/ScoreBoard";
import { arrowPatterns, bulletCombinations, gridSizePx } from "@/data/Data";
import React, { useEffect, useRef, useState } from "react";
import { LeaderboardEntry, subscribeToLeaderboard } from "@/utils/Leaderboard";
import MiddleSection from "@/components/MiddleBox";

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isGameOver, setIsGameOver] = useState(false);
  const [boxPosition, setBoxPosition] = useState({ top: 0, left: 0 });
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const [bullets, setBullets] = useState<BulletType[]>([]);
  const bulletsRef = useRef(bullets); // Create a ref to track bullets
  const speedMultiplierRef = useRef(1); // To track bullet speed multiplier

  const levelThresholds = [
    100,
    250,
    500,
    1000,
    2000,
    3000,
    5000,
    10000,
    15000,
    20000,
  ];

  const handleArrowClick = (direction: string) => {
    const sections = ["home", "projects", "contact", "profile"];
    const currentIndex = sections.indexOf(currentSection);
    let newIndex;
    switch (direction) {
      case "left":
        newIndex = (currentIndex - 1 + sections.length) % sections.length;
        break;
      case "right":
        newIndex = (currentIndex + 1) % sections.length;
        break;
      case "up":
        newIndex = (currentIndex - 2 + sections.length) % sections.length;
        break;
      case "down":
        newIndex = (currentIndex + 2) % sections.length;
        break;
      default:
        newIndex = currentIndex;
    }
    setCurrentSection(sections[newIndex]);
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
    setScore(0);
    setBullets([]);
    setBoxPosition({ top: 0, left: 0 });
    setIsGameOver(false);
  };

  useEffect(() => {
    const unsubscribe = subscribeToLeaderboard(setLeaderboard);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    bulletsRef.current = bullets; // Sync ref with state
  }, [bullets]);

  // Update speed multiplier based on score
  useEffect(() => {
    const currentLevel = levelThresholds.findIndex((threshold) =>
          score < threshold
        ) + 1 || 10;
    if (
      speedMultiplierRef.current !== currentLevel
    ) speedMultiplierRef.current = currentLevel;
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameOver) {
        return;
      }

      const horizontalSpeed = ((window.innerWidth - gridSizePx * 20) / 1000) *
        speedMultiplierRef.current;
      const verticalSpeed = ((window.innerHeight - gridSizePx * 20) / 1000) *
        speedMultiplierRef.current;

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

  useEffect(() => {
    // Add bullet from the combinations
    const interval = setInterval(() => {
      if (isGameOver || bulletsRef.current.length > 0) {
        return;
      }
      const randomIndex = Math.floor(Math.random() * bulletCombinations.length);
      setBullets((prevBullets) => [
        ...prevBullets,
        ...bulletCombinations[randomIndex],
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, [isGameOver]);

  const detectCollision = (bullet: BulletType) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const boxSize = window.innerWidth < 768 ? 10 * gridSizePx : 20 * gridSizePx; // Adjust box size for small screens

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

  // Increment score while the game is running
  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(() => {
        if (window.innerWidth >= 1000) {
          setScore((prevScore) => prevScore + 1);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isGameOver]);

  useEffect(() => {
    let startY: number | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (startY !== null) {
        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (deltaY > 500) {
          handleArrowClick("left");
        } else if (deltaY < 500) {
          handleArrowClick("right");
        }

        startY = null;
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection]);

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
        {/* Render scoreboard only if there is enough space */}
        {window.innerWidth > 1000 && (
          <div className="absolute top-4 right-4">
            <Scoreboard
              isGameOver={isGameOver}
              onRestart={handleRestart}
              leaderboard={leaderboard}
              setScore={setScore}
              score={score}
            />
          </div>
        )}
        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            style={{
              transform:
                `translate(${boxPosition.left}px, ${boxPosition.top}px)`,
            }}
          >
            <FilledRectangle
              width={window.innerWidth < 768 ? 10 : 20}
              height={window.innerWidth < 768 ? 15 : 20}
            >
              <MiddleSection currentSection={currentSection} />
            </FilledRectangle>
          </div>
          {/* Navigation arrows */}
          {window.innerWidth >= 768 && (
            <>
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 cursor-pointer -z-10">
                <GridSection
                  pattern={arrowPatterns.up}
                  onClick={() => handleArrowClick("up")}
                  onlyBlackClickable={false}
                  blackColor="bg-gray-300"
                />
              </div>
              <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 cursor-pointer -z-10">
                <GridSection
                  pattern={arrowPatterns.down}
                  onClick={() => handleArrowClick("down")}
                  onlyBlackClickable={false}
                  blackColor="bg-gray-300"
                />
              </div>
              <div className="absolute -left-32 top-1/2 -translate-y-1/2 cursor-pointer -z-10">
                <GridSection
                  pattern={arrowPatterns.left}
                  onClick={() => handleArrowClick("left")}
                  onlyBlackClickable={false}
                  blackColor="bg-gray-300"
                />
              </div>
              <div className="absolute -right-32 top-1/2 -translate-y-1/2 cursor-pointer -z-10">
                <GridSection
                  pattern={arrowPatterns.right}
                  onClick={() => handleArrowClick("right")}
                  onlyBlackClickable={false}
                  blackColor="bg-gray-300"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
