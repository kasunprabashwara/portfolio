"use client";
import { GridBox, GridSection,FilledRectangle, Bullet, GridBullet } from '@/components/GridComponents';
import { arrowPatterns, sections } from '@/data/Data';
import React, { useState, useEffect } from 'react';


const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [nextBulletId, setNextBulletId] = useState(0);

  // Bullet animation logic
  useEffect(() => {
    // Create new bullets
    const bulletInterval = setInterval(() => {
      setBullets(prev => {
        const newBullet = {
          id: nextBulletId,
          position: -3, // Start off-screen
          row: Math.floor(Math.random() * 50)
        };
        setNextBulletId(prev => prev + 1);
        return [...prev, newBullet];
      });
    }, 5000); // New bullet every 2 seconds

    // Move bullets
    const moveInterval = setInterval(() => {
      setBullets(prev => 
        prev
          .map(bullet => ({
            ...bullet,
            position: bullet.position + 1
          }))
          .filter(bullet => bullet.position < 100) // Remove bullets that are off-screen
      );
    }, 100); 

    return () => {
      clearInterval(bulletInterval);
      clearInterval(moveInterval);
    };
  }, [nextBulletId]);

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

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base grid container */}
      <div className="w-full h-full">
        {/* Bullets container */}
        <div className="absolute inset-0">
          {bullets.map(bullet => (
            <GridBullet 
              key={bullet.id}
              position={bullet.position}
              row={bullet.row}
            />
          ))}
        </div>

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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

          {/* Navigation arrows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.up} onClick={() => handleArrowClick('up')} onlyBlackClickable={false} />
          </div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.down} onClick={() => handleArrowClick('down')} onlyBlackClickable={false} />
          </div>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.left} onClick={() => handleArrowClick('left')} onlyBlackClickable={false} />
          </div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 cursor-pointer">
            <GridSection pattern={arrowPatterns.right} onClick={() => handleArrowClick('right')} onlyBlackClickable={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;