import React from 'react';
import { Leaf, Trophy, Target, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const habits = [
    { id: '1', name: 'Morning Meditation', streak: 5, points: 100, completedToday: false, category: 'Wellness' },
    { id: '2', name: 'Read 30 Minutes', streak: 3, points: 75, completedToday: true, category: 'Learning' },
    { id: '3', name: 'Exercise', streak: 7, points: 150, completedToday: false, category: 'Health' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h2 className="text-xl font-bold">Level 5</h2>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">750/1000 XP to next level</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <Flame className="h-8 w-8 text-orange-500" />
            <h2 className="text-xl font-bold">Current Streak</h2>
          </div>
          <p className="text-3xl font-bold mt-4">7 Days</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <Target className="h-8 w-8 text-purple-500" />
            <h2 className="text-xl font-bold">Total Points</h2>
          </div>
          <p className="text-3xl font-bold mt-4">325</p>
        </motion.div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Today's Habits</h2>
        <div className="space-y-4">
          {habits.map((habit) => (
            <motion.div 
              key={habit.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <div>
                  <h3 className="font-semibold">{habit.name}</h3>
                  <p className="text-sm text-gray-400">{habit.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm">Streak: {habit.streak} days</p>
                  <p className="text-sm text-gray-400">{habit.points} points</p>
                </div>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium ${
                    habit.completedToday 
                      ? 'bg-green-600 text-white cursor-not-allowed'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  disabled={habit.completedToday}
                >
                  {habit.completedToday ? 'Completed' : 'Complete'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}