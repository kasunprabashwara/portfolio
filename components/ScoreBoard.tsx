import { addScore, LeaderboardEntry } from "@/utils/Leaderboard";
import React, { useState } from "react";

const Scoreboard = (
  { isGameOver, onRestart, leaderboard, score, setScore }: {
    isGameOver: boolean;
    onRestart: () => void;
    leaderboard: LeaderboardEntry[];
    score: number;
    setScore: (arg0: number) => void;
  },
) => {
  const [playerName, setPlayerName] = useState("");

  // Save score to Firebase when game is over and name is provided
  const handleSaveScore = async () => {
    if (playerName.trim() && isGameOver && playerName.length <= 100) {
      await addScore(playerName, score);
      setPlayerName("");
      setScore(0);
    }
  };
  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4">
      <h2 className="text-xl font-bold">Score: {score}</h2>
      {(isGameOver && leaderboard.length > 3 && score > leaderboard[3].score) &&
        (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white mb-2"
              maxLength={100}
            />
            <button
              onClick={handleSaveScore}
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4`}
              disabled={playerName.length > 100}
            >
              Save Score
            </button>
          </div>
        )}
      {isGameOver && (
        <button
          onClick={onRestart}
          className="w-full mt-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4"
        >
          Restart
        </button>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Leaderboard</h3>
        <div className="flex-col gap-2">
          {/* get the top 4 entries */}
          {leaderboard.slice(0, 4).map((entry, index) => (
            <div
              key={index}
              className="p-2 bg-gray-700 flex items-center"
            >
              <span className="font-bold mr-2">{entry.score}</span>:
              <div className="relative group flex-1 overflow-hidden">
                <div className="overflow-hidden whitespace-nowrap max-w-xs">
                  {entry.name.length > 15
                    ? entry.name.slice(0, 15) + "..."
                    : entry.name}
                </div>
                {entry.name.length > 15 && (
                  <div className="absolute left-0 top-0 w-full h-full bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="whitespace-nowrap group-hover:animate-scroll">
                      {entry.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
