'use client';

import React from 'react';
import { FaBook, FaLock, FaCheckCircle, FaPlay, FaClock, FaUsers, FaUserFriends } from 'react-icons/fa';
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
  teamProgress: {
    total: number;
    completed: number;
  };
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Team Building Fundamentals',
    description: 'Learn essential strategies for building and maintaining effective teams.',
    duration: '4 hours',
    progress: 100,
    status: 'completed',
    lessons: 6,
    completedLessons: 6,
    teamProgress: {
      total: 15,
      completed: 15
    }
  },
  {
    id: 2,
    title: 'Collaborative Leadership',
    description: 'Develop leadership skills focused on team collaboration and growth.',
    duration: '5 hours',
    progress: 60,
    status: 'in-progress',
    lessons: 8,
    completedLessons: 5,
    teamProgress: {
      total: 15,
      completed: 12
    }
  },
  {
    id: 3,
    title: 'Conflict Resolution',
    description: 'Master techniques for resolving team conflicts and building consensus.',
    duration: '3 hours',
    progress: 0,
    status: 'locked',
    lessons: 5,
    completedLessons: 0,
    teamProgress: {
      total: 15,
      completed: 0
    }
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'Learn effective project management techniques for team success.',
    duration: '6 hours',
    progress: 0,
    status: 'locked',
    lessons: 8,
    completedLessons: 0,
    teamProgress: {
      total: 15,
      completed: 0
    }
  }
];

const getStatusIcon = (status: Module['status']) => {
  switch (status) {
    case 'completed':
      return FaCheckCircle;
    case 'in-progress':
      return FaPlay;
    case 'locked':
      return FaLock;
  }
};

const getStatusColor = (status: Module['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-400';
    case 'in-progress':
      return 'text-yellow-400';
    case 'locked':
      return 'text-gray-400';
  }
};

export default function TrainingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Team Training Modules</h1>
        <p className="text-text-secondary">Strengthen your team's skills and collaboration</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {modules.map((module) => {
          const StatusIcon = getStatusIcon(module.status);
          const statusColor = getStatusColor(module.status);

          return (
            <Card
              key={module.id}
              className={`transition-all duration-300 hover:shadow-lg ${
                module.status !== 'locked' ? 'cursor-pointer' : 'opacity-75'
              }`}
            >
              <div className="flex items-start gap-4 p-2">
                <div className={`p-4 rounded-lg bg-background-secondary ${statusColor}`}>
                  <StatusIcon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">{module.title}</h3>
                      <span className="text-sm text-text-secondary flex items-center gap-2">
                        <FaClock className="w-4 h-4" />
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary mt-1">{module.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-text-secondary">
                          Your Progress: {module.completedLessons} of {module.lessons} lessons
                        </span>
                        <span className="text-sm font-medium text-text-primary">
                          {module.progress}%
                        </span>
                      </div>
                      <ProgressBar
                        progress={module.progress}
                        size="sm"
                        color={
                          module.status === 'completed'
                            ? 'green'
                            : module.status === 'in-progress'
                            ? 'yellow'
                            : 'gray'
                        }
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-text-secondary flex items-center gap-2">
                          <FaUserFriends className="w-4 h-4" />
                          Team Progress: {module.teamProgress.completed} of {module.teamProgress.total} members
                        </span>
                        <span className="text-sm font-medium text-text-primary">
                          {Math.round((module.teamProgress.completed / module.teamProgress.total) * 100)}%
                        </span>
                      </div>
                      <ProgressBar
                        progress={(module.teamProgress.completed / module.teamProgress.total) * 100}
                        size="sm"
                        color="peach"
                      />
                    </div>
                  </div>

                  {module.status === 'in-progress' && (
                    <button className="mt-4 w-full bg-background-secondary hover:bg-background-hover text-text-primary py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                      <FaPlay className="w-4 h-4" />
                      Continue Module
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 