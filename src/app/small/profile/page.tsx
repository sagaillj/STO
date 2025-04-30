'use client';

import React from 'react';
import { FaUser, FaMedal, FaChartLine, FaClock, FaCalendar, FaTrophy, FaStar, FaCertificate } from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: JSX.Element;
  type: 'milestone' | 'skill' | 'completion';
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "First Module Completed",
    description: "Completed the Getting Started module",
    date: "2024-03-10",
    icon: <FaTrophy className="text-yellow-400" />,
    type: 'completion'
  },
  {
    id: 2,
    title: "Quick Learner",
    description: "Completed 3 lessons in one day",
    date: "2024-03-08",
    icon: <FaChartLine className="text-blue-400" />,
    type: 'milestone'
  },
  {
    id: 3,
    title: "Communication Pro",
    description: "Achieved advanced level in communication skills",
    date: "2024-03-05",
    icon: <FaStar className="text-purple-400" />,
    type: 'skill'
  }
];

const skills = [
  { name: "Personal Development", level: 75 },
  { name: "Communication", level: 60 },
  { name: "Goal Setting", level: 85 },
  { name: "Time Management", level: 70 }
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white">
            <FaUser className="w-12 h-12" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white border-2 border-white">
            <FaMedal className="w-4 h-4" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Personal Growth Enthusiast</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <FaCalendar className="w-4 h-4" />
              Joined March 2024
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <FaClock className="w-4 h-4" />
              12.5 hours invested
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills Section */}
        <Card
          icon={FaUser}
          title="Personal Information"
          className="md:col-span-2"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Skills Progress</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <ProgressBar
                    progress={skill.level}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Stats Card */}
        <Card
          icon={FaChartLine}
          title="Progress Overview"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Learning Stats</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Lessons Completed</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Achievements</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Avg. Score</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Achievements Section */}
      <Card
        icon={FaMedal}
        title="Achievements"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(achievement.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      achievement.type === 'milestone' ? 'bg-blue-100 text-blue-800' :
                      achievement.type === 'skill' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Certificates Section */}
      <Card
        icon={FaCertificate}
        title="Certifications"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <FaCertificate className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Personal Development Fundamentals</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Completed March 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 