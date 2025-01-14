"use client";
import { GridSection, FilledRectangle, Bullet } from '@/components/GridComponents';
import { arrowPatterns, sections, gridSize, gridSizePx } from '@/data/Data';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [boxPosition, setBoxPosition] = useState({ top: 0, left: 0 });
  interface BulletType {
    position: { top: number; left: number };
    direction: string;
  }
  
  const [bullets, setBullets] = useState<BulletType[]>([]);
  const handleArrowClick = (direction: string) => {
    const sectionOrder = Object.keys(sections);
    const currentIndex = sectionOrder.indexOf(currentSection);
    let newIndex;
    switch(direction) {
      case 'up':
        newIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
        break;
      case 'down':
        newIndex = (currentIndex + 1) % sectionOrder.length;
        break;
      case 'left':
        newIndex = (currentIndex - 2 + sectionOrder.length) % sectionOrder.length;
        break;
      case 'right':
        newIndex = (currentIndex + 2) % sectionOrder.length;
        break;
      default:
        newIndex = currentIndex;
    }
    
    setCurrentSection(sectionOrder[newIndex]);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setBoxPosition({ top: -gridSizePx*5, left: 0 });
        break;
      case 'ArrowDown':
        setBoxPosition({ top: gridSizePx*5, left: 0 });
        break;
      case 'ArrowLeft':
        setBoxPosition({ top: 0, left: -gridSizePx*5 });
        break;
      case 'ArrowRight':
        setBoxPosition({ top: 0, left: gridSizePx*5 });
        break;
    }
  };

  const handleKeyUp = () => {
    setBoxPosition({ top: 0, left: 0 });
  };
  // Add bullet from random direction
  useEffect(() => {
    const interval = setInterval(() => {
      const randomDirection = ['top', 'bottom', 'left', 'right'][Math.floor(Math.random() * 4)];
      setBullets((prevBullets) => [
        ...prevBullets,
        {
          position: {
            top: randomDirection === 'bottom' ? -gridSizePx*4 : randomDirection === 'top' ? window.innerHeight+gridSizePx*4 : Math.random() * window.innerHeight,
            left: randomDirection === 'right' ? -gridSizePx*4 : randomDirection === 'left' ? window.innerWidth+gridSizePx*4 : Math.random() * window.innerWidth,
          },
          direction: randomDirection,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  // Move bullets and detect collision
  useEffect(() => {
    const interval = setInterval(() => {   
      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({
            ...bullet,
            position: {
              top: bullet.direction === 'bottom' ? bullet.position.top + gridSizePx : bullet.direction === 'top' ? bullet.position.top - gridSizePx : bullet.position.top,
              left: bullet.direction === 'right' ? bullet.position.left + gridSizePx : bullet.direction === 'left' ? bullet.position.left - gridSizePx : bullet.position.left,
            },
          }))
          .filter(
            (bullet) =>
              bullet.position.top > -gridSizePx*4 &&
              bullet.position.top < window.innerHeight + gridSizePx*4 &&
              bullet.position.left > -gridSizePx*4 &&
              bullet.position.left < window.innerWidth + gridSizePx*4
          )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);
  const detectCollision = (bullet: BulletType) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const boxSize = 20 * gridSizePx; // Assuming box size is 20 grid units
    
    // Calculate actual box position relative to the screen
    const actualBoxPosition = {
      top: centerY - boxSize / 2 + boxPosition.top,
      left: centerX - boxSize / 2 + boxPosition.left,
      width: boxSize,
      height: boxSize
    };

    const bulletSize = bullet.direction === 'left' || bullet.direction === 'right' ? { width: gridSizePx * 3, height: gridSizePx } : { width: gridSizePx, height: gridSizePx * 3 };

    // Check for collision using actual screen coordinates
    if (
      actualBoxPosition.left < bullet.position.left + bulletSize.width &&
      actualBoxPosition.left + actualBoxPosition.width > bullet.position.left &&
      actualBoxPosition.top < bullet.position.top + bulletSize.height &&
      actualBoxPosition.top + actualBoxPosition.height > bullet.position.top
    ) {
      alert('Game Over');
      setBoxPosition({ top: 0, left: 0 });
      setBullets([]);
    }
  };
  useEffect(() => {
    bullets.forEach(detectCollision);
  }, [bullets, boxPosition]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base grid container */}
      <div className="w-full h-full">
      {bullets.map((bullet, index) => (
            <Bullet key={index} position={bullet.position} direction={bullet.direction} />
          ))}
        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          
          <div style={{ transform: `translate(${boxPosition.left}px, ${boxPosition.top}px)` }}>
            <FilledRectangle width={20} height={20} />
        
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <h2 className="text-xl mb-4">{sections[currentSection].title}</h2>
              {currentSection === 'home' ? (
                <div className="flex flex-col gap-2">
                  {sections[currentSection].links.map(link => (
                    <button key={link} className="text-white hover:text-gray-300">
                      {link}
                    </button>
                  ))}
                </div>
              ) : (
                <p>{sections[currentSection].content}</p>
              )}
            </div>
          </div>
          </div>
          {/* Navigation arrows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.up} onClick={() => handleArrowClick('up')} onlyBlackClickable={false} blackColor='bg-gray-300' />
          </div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.down} onClick={() => handleArrowClick('down')} onlyBlackClickable={false} blackColor='bg-gray-300' />
          </div>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.left} onClick={() => handleArrowClick('left')} onlyBlackClickable={false} blackColor='bg-gray-300' />
          </div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.right} onClick={() => handleArrowClick('right')} onlyBlackClickable={false} blackColor='bg-gray-300' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;