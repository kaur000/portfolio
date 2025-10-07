"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Smile, Star, Sparkles, ThumbsUp, Zap } from "lucide-react";

interface Reaction {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

interface ReactionCount {
  emoji: string;
  count: number;
  icon: any;
  color: string;
}

export default function EmojiReactions() {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [reactionCounts, setReactionCounts] = useState<ReactionCount[]>([
    { emoji: "❤️", count: 0, icon: Heart, color: "text-red-500" },
    { emoji: "😊", count: 0, icon: Smile, color: "text-yellow-500" },
    { emoji: "⭐", count: 0, icon: Star, color: "text-purple-500" },
    { emoji: "✨", count: 0, icon: Sparkles, color: "text-pink-500" },
    { emoji: "👍", count: 0, icon: ThumbsUp, color: "text-blue-500" },
    { emoji: "⚡", count: 0, icon: Zap, color: "text-orange-500" },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [nextId, setNextId] = useState(0);

  // Load counts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("emojiReactionCounts");
    if (saved) {
      try {
        const counts = JSON.parse(saved);
        setReactionCounts((prev) =>
          prev.map((r) => ({
            ...r,
            count: counts[r.emoji] || 0,
          }))
        );
      } catch (e) {
        console.error("Failed to load reaction counts");
      }
    }
  }, []);

  // Save counts to localStorage
  const saveReactionCounts = (newCounts: ReactionCount[]) => {
    const counts = newCounts.reduce((acc, r) => {
      acc[r.emoji] = r.count;
      return acc;
    }, {} as Record<string, number>);
    localStorage.setItem("emojiReactionCounts", JSON.stringify(counts));
  };

  const addReaction = (emoji: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    const newReaction: Reaction = {
      id: nextId,
      emoji,
      x,
      y,
    };

    setReactions((prev) => [...prev, newReaction]);
    setNextId((prev) => prev + 1);

    // Update count
    setReactionCounts((prev) => {
      const updated = prev.map((r) =>
        r.emoji === emoji ? { ...r, count: r.count + 1 } : r
      );
      saveReactionCounts(updated);
      return updated;
    });

    // Remove after animation
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
    }, 2000);
  };

  const totalReactions = reactionCounts.reduce((sum, r) => sum + r.count, 0);

  return (
    <>
      {/* Floating Reactions */}
      <AnimatePresence>
        {reactions.map((reaction) => (
          <motion.div
            key={reaction.id}
            initial={{ x: reaction.x, y: reaction.y, opacity: 1, scale: 0 }}
            animate={{
              y: reaction.y - 200,
              opacity: 0,
              scale: 2,
              x: reaction.x + (Math.random() - 0.5) * 100,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed z-50 pointer-events-none text-4xl"
            style={{ left: 0, top: 0 }}
          >
            {reaction.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Reaction Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 left-6 z-40"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-pink-500/20 p-3 mb-2"
            >
              <div className="flex gap-2 mb-3">
                {reactionCounts.map((reaction) => (
                  <motion.button
                    key={reaction.emoji}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => addReaction(reaction.emoji, e)}
                    className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
                    title={`${reaction.count} reactions`}
                  >
                    {reaction.emoji}
                  </motion.button>
                ))}
              </div>

              {/* Reaction Counts */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {reactionCounts.map((reaction) => (
                    <div
                      key={reaction.emoji}
                      className="flex items-center gap-1 text-gray-600 dark:text-pink-100/70"
                    >
                      <span>{reaction.emoji}</span>
                      <span className="font-medium">{reaction.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <Heart size={24} className="fill-current" />

          {/* Total Count Badge */}
          {totalReactions > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            >
              {totalReactions > 99 ? "99+" : totalReactions}
            </motion.div>
          )}
        </motion.button>

        {/* Hover Hint */}
        {!isExpanded && totalReactions === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-pink-600 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap pointer-events-none"
          >
            Leave a reaction! 👋
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900 dark:border-r-pink-600" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
