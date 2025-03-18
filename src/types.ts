export interface Habit {
  id: string;
  name: string;
  streak: number;
  points: number;
  completedToday: boolean;
  category: string;
  createdAt: string;
}

export interface User {
  level: number;
  experience: number;
  totalPoints: number;
  badges: string[];
}