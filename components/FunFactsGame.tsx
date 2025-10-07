"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const funFacts = [
  {
    id: 1,
    question: "🎓 Education Achievement",
    answer: "Completed my college degree while still in high school!",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 2,
    question: "💼 Leadership Role",
    answer: "Led a team of 20-25 students as IT Help Desk Lead",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    question: "🚀 Fast Learner",
    answer: "Self-taught web design through tutorials and practice",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    question: "🎨 Design Passion",
    answer: "Currently pursuing Google UX Design Certification",
    color: "from-orange-400 to-red-500",
  },
];

export default function FunFactsGame() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [revealedAll, setRevealedAll] = useState(false);

  const handleCardClick = (id: number) => {
    if (!flippedCards.includes(id)) {
      const newFlipped = [...flippedCards, id];
      setFlippedCards(newFlipped);

      if (newFlipped.length === funFacts.length) {
        setTimeout(() => setRevealedAll(true), 500);
      }
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setRevealedAll(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ✨ Click to Reveal Fun Facts About Me
        </h3>
        <p className="text-gray-600">
          {revealedAll
            ? "🎉 All facts revealed! Click Reset to play again"
            : `${flippedCards.length}/${funFacts.length} facts discovered`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {funFacts.map((fact) => {
          const isFlipped = flippedCards.includes(fact.id);

          return (
            <motion.div
              key={fact.id}
              className="relative h-48 cursor-pointer"
              onClick={() => handleCardClick(fact.id)}
              whileHover={{ scale: isFlipped ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${fact.color} p-6 flex items-center justify-center shadow-lg border-2 border-white`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-4 text-white" size={40} />
                    <p className="text-white font-bold text-lg">{fact.question}</p>
                    <p className="text-white/80 text-sm mt-2">Click to reveal!</p>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl bg-white p-6 flex items-center justify-center shadow-lg border-2 border-gray-200"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-center">
                    <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                      {fact.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {revealedAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            🔄 Reset & Play Again
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
