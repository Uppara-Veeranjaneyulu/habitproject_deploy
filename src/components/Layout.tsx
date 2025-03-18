import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Plane as Plant, Trophy, User2, BarChart2 } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Plant className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">HabitQuest</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/" className="nav-link">
                <Trophy className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link to="/stats" className="nav-link">
                <BarChart2 className="h-5 w-5" />
                <span>Statistics</span>
              </Link>
              <Link to="/profile" className="nav-link">
                <User2 className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}