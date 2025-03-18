import React from 'react';
import { BarChart2, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  const weeklyData = [
    { day: 'Mon', completed: 5, total: 6 },
    { day: 'Tue', completed: 4, total: 6 },
    { day: 'Wed', completed: 6, total: 6 },
    { day: 'Thu', completed: 3, total: 6 },
    { day: 'Fri', completed: 5, total: 6 },
    { day: 'Sat', completed: 4, total: 6 },
    { day: 'Sun', completed: 6, total: 6 },
  ];

  const achievements = [
    { name: 'Early Bird', description: 'Complete morning routine 7 days in a row', progress: 5, total: 7 },
    { name: 'Bookworm', description: 'Read for 30 days total', progress: 15, total: 30 },
    { name: 'Fitness Fanatic', description: 'Exercise 20 times', progress: 12, total: 20 },
  ];

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <BarChart2 className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Weekly Overview</h2>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {weeklyData.map((day, index) => (
            <motion.div 
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="h-32 bg-gray-700 rounded-lg relative">
                <div 
                  className="absolute bottom-0 w-full bg-green-500 rounded-b-lg transition-all duration-300"
                  style={{ height: `${(day.completed / day.total) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 font-medium">{day.day}</p>
              <p className="text-sm text-gray-400">{day.completed}/{day.total}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Award className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-4"
            >
              <h3 className="font-semibold">{achievement.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
              <div className="h-2 bg-gray-600 rounded-full">
                <div 
                  className="h-2 bg-yellow-500 rounded-full transition-all duration-300"
                  style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{achievement.progress}/{achievement.total}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}