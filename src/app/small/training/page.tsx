'use client';

import React, { useState } from 'react';
import { FaPlay, FaCheck, FaClock, FaBook, FaLightbulb, FaTrophy, FaChartLine, FaLock } from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'locked';
  lessons: number;
  completedLessons: number;
  thumbnail: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Getting Started with Personal Growth",
    description: "Learn the fundamentals of personal development and set your growth goals.",
    duration: "2 hours",
    progress: 100,
    status: 'completed',
    lessons: 5,
    completedLessons: 5,
    thumbnail: "🌱"
  },
  {
    id: 2,
    title: "Building Strong Foundations",
    description: "Develop core skills and habits for continuous improvement.",
    duration: "3 hours",
    progress: 60,
    status: 'in-progress',
    lessons: 6,
    completedLessons: 4,
    thumbnail: "🏗️"
  },
  {
    id: 3,
    title: "Advanced Personal Development",
    description: "Take your personal growth to the next level with advanced concepts.",
    duration: "4 hours",
    progress: 0,
    status: 'locked',
    lessons: 8,
    completedLessons: 0,
    thumbnail: "🚀"
  },
  {
    id: 4,
    title: "Mastering Self-Improvement",
    description: "Learn advanced techniques for maximizing your potential.",
    duration: "5 hours",
    progress: 0,
    status: 'locked',
    lessons: 10,
    completedLessons: 0,
    thumbnail: "🎯"
  }
];

export default function TrainingPage() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const getStatusColor = (status: Module['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-primary';
      case 'locked': return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: Module['status']) => {
    switch (status) {
      case 'completed': return <FaCheck className="w-5 h-5" />;
      case 'in-progress': return <FaPlay className="w-5 h-5" />;
      case 'locked': return <FaLock className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Personal Training Journey</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master essential skills for personal growth and development
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">60%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Overall Progress</div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
              <FaBook className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Lessons Completed</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
              <FaClock className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">8.5h</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Time Invested</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
              <FaTrophy className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Achievements Earned</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
              <FaChartLine className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">15%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Growth</div>
          </div>
        </div>
      </Card>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Card 
            key={module.id}
            className={`relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer
              ${module.status === 'locked' ? 'opacity-75' : ''}`}
            onClick={() => module.status !== 'locked' && setSelectedModule(module.id === selectedModule ? null : module.id)}
          >
            <div className="absolute top-0 left-0 w-2 h-full" style={{ 
              backgroundColor: module.status === 'locked' ? '#9CA3AF' : '#3B82F6'
            }} />
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="text-4xl mb-4">{module.thumbnail}</div>
                  <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {module.description}
                  </p>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getStatusColor(module.status)} text-white`}>
                  {getStatusIcon(module.status)}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaClock className="w-4 h-4 mr-2" />
                    {module.duration}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaBook className="w-4 h-4 mr-2" />
                    {module.completedLessons}/{module.lessons} Lessons
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="font-medium">{module.progress}%</span>
                  </div>
                  <ProgressBar
                    progress={module.progress}
                    className="h-2"
                  />
                </div>

                {selectedModule === module.id && module.status !== 'locked' && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                      {module.status === 'completed' ? 'Review Module' : 'Continue Learning'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <FaLightbulb className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Learning Tips</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Set aside dedicated time for learning each day</li>
              <li>• Take notes and reflect on your progress</li>
              <li>• Practice new skills regularly</li>
              <li>• Connect with others in your learning journey</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
} 