import React from 'react';
import { User2, Award, Star, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
  const user = {
    name: 'John Doe',
    level: 5,
    joinedDate: 'January 2024',
    totalHabits: 12,
    completionRate: 85,
    badges: [
      { name: 'Early Starter', icon: '🌅' },
      { name: 'Consistent', icon: '📈' },
      { name: 'Achiever', icon: '🏆' },
    ]
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center">
            <User2 className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-400">Member since {user.joinedDate}</p>
            <div className="mt-2 flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">Level {user.level}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-purple-500" />
            <h2 className="text-xl font-bold">Badges</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {user.badges.map((badge, index) => (
              <motion.div 
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-4 text-center"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="font-medium">{badge.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-bold">Statistics</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Total Habits</span>
                <span className="font-medium">{user.totalHabits}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Completion Rate</span>
                <span className="font-medium">{user.completionRate}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div 
                  className="h-2 bg-green-500 rounded-full" 
                  style={{ width: `${user.completionRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}