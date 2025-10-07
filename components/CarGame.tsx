"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function CarGame() {
  const [carPosition, setCarPosition] = useState(50);
  const [obstacles, setObstacles] = useState<{ id: number; position: number }[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!gameStarted || gameOver) return;

    if (e.key === "ArrowLeft") {
      setCarPosition((prev) => Math.max(10, prev - 15));
    } else if (e.key === "ArrowRight") {
      setCarPosition((prev) => Math.min(90, prev + 15));
    }
  }, [gameStarted, gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const obstacleInterval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        { id: Date.now(), position: Math.random() * 80 + 10 },
      ]);
    }, 1500);

    const moveInterval = setInterval(() => {
      setObstacles((prev) => {
        const updated = prev
          .map((obs) => ({ ...obs, position: obs.position }))
          .filter((obs) => obs.id > Date.now() - 3000);

        // Check collision
        updated.forEach((obs) => {
          const obstacleAge = Date.now() - obs.id;
          if (obstacleAge > 2000 && obstacleAge < 2200) {
            if (Math.abs(obs.position - carPosition) < 12) {
              setGameOver(true);
            }
          }
        });

        return updated;
      });
      setScore((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(obstacleInterval);
      clearInterval(moveInterval);
    };
  }, [gameStarted, gameOver, carPosition]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setCarPosition(50);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-gray-700">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">🏎️ Speed Run</h3>
          <p className="text-gray-400 text-sm">Use ← → arrows to dodge!</p>
          <div className="text-3xl font-bold text-pink-400 mt-2">
            Score: {score}
          </div>
        </div>

        {/* Game Area */}
        <div className="relative bg-gray-700 rounded-xl overflow-hidden h-96 border-4 border-gray-600">
          {/* Road lines */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-yellow-400 opacity-30 animate-pulse"></div>
          </div>

          {!gameStarted || gameOver ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
              <div className="text-center">
                {gameOver && (
                  <div className="mb-4">
                    <p className="text-red-400 text-2xl font-bold mb-2">Game Over!</p>
                    <p className="text-white text-xl">Final Score: {score}</p>
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  {gameOver ? "Play Again" : "Start Game"}
                </motion.button>
              </div>
            </div>
          ) : null}

          {/* Obstacles */}
          {obstacles.map((obstacle) => {
            const age = Date.now() - obstacle.id;
            const top = (age / 3000) * 100;

            return (
              <motion.div
                key={obstacle.id}
                className="absolute w-12 h-12 text-4xl"
                style={{
                  left: `${obstacle.position}%`,
                  top: `${top}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                🚧
              </motion.div>
            );
          })}

          {/* Player Car */}
          {gameStarted && !gameOver && (
            <motion.div
              className="absolute bottom-8 w-12 h-16 text-5xl"
              animate={{ left: `${carPosition}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transform: "translateX(-50%)" }}
            >
              🏎️
            </motion.div>
          )}
        </div>

        <div className="mt-4 text-center text-gray-400 text-xs">
          <p>Pro tip: Stay focused and dodge those obstacles! 🎮</p>
        </div>
      </div>
    </div>
  );
}
