'use client';

import React, { useState } from 'react';
import { FaPlay, FaCheck, FaClock, FaBook, FaLightbulb, FaTrophy, FaChartLine, FaLock, FaUsers, FaCertificate, FaUserGraduate } from 'react-icons/fa';
import Card from '@/app/components/Card';
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

interface QuickTip {
  title: string;
  description: string;
}

const quickTips: QuickTip[] = [
  {
    title: 'Set aside dedicated time',
    description: 'Allocate specific time slots for learning each day to maintain consistency.',
  },
  {
    title: 'Take notes and reflect',
    description: 'Document your progress and reflect on what you\'ve learned.',
  },
  {
    title: 'Practice regularly',
    description: 'Regular practice helps reinforce new skills and knowledge.',
  },
  {
    title: 'Connect with others',
    description: 'Engage with peers to enhance your learning experience.',
  },
];

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
      <Card
        icon={FaChartLine}
        title="Training Statistics"
        className="p-6"
      >
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
      <Card
        icon={FaBook}
        title="Training Modules"
        className="md:col-span-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              icon={FaUserGraduate}
              title={module.title}
              className="p-6"
              onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{module.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">{module.description}</p>
                </div>
                {module.status === 'locked' ? (
                  <FaLock className="text-2xl text-text-secondary" />
                ) : module.status === 'completed' ? (
                  <FaCheck className="text-2xl text-success" />
                ) : (
                  <FaPlay className="text-2xl text-primary" />
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-secondary">Progress</span>
                    <span className="text-text-primary">{module.progress}%</span>
                  </div>
                  <ProgressBar progress={module.progress} size="sm" color="primary" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-text-secondary" />
                    <span className="text-text-secondary">{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-text-secondary" />
                    <span className="text-text-secondary">{module.completedLessons}/{module.lessons} Lessons</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Quick Tips */}
      <Card
        icon={FaLightbulb}
        title="Quick Tips"
        className="md:col-span-2"
      >
        <div className="space-y-4">
          {quickTips.map((tip: QuickTip, index: number) => (
            <Card
              key={index}
              icon={FaTrophy}
              title={`Tip ${index + 1}`}
              className="p-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-background-secondary">
                  <FaLightbulb className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{tip.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card
        icon={FaUsers}
        title="Team Progress"
        className="md:col-span-2"
      >
        <div className="space-y-6">
          {/* Team progress content */}
        </div>
      </Card>
    </div>
  );
} 