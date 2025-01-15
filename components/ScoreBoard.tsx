import React, { useEffect, useState } from "react";

const Scoreboard = (
  { isGameOver, onRestart }: { isGameOver: Boolean; onRestart: () => void },
) => {
  const [score, setScore] = useState(0);
  const handleRestart = () => {
    setScore(0);
    onRestart();
  };
  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isGameOver]);

  return (
    <div className="fixed top-4 right-4 bg-gray-400 p-4 ">
      <h2 className="text-xl font-bold">Score: {score}</h2>
      {isGameOver && (
        <button
          className="mt-4 bg-white text-black px-4 py-2"
          onClick={handleRestart}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Scoreboard;
