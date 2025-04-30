'use client';

import React from 'react';
import {
  FaBook,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaUserGraduate,
  FaLightbulb,
  FaTrophy,
  FaPlay,
  FaCheck,
  FaClock,
  FaLock,
  FaCheckCircle,
  FaUserFriends,
} from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Module {
  id: number;
  title: string;
  description: string;
  status: 'locked' | 'completed' | 'in-progress';
  progress: number;
  duration: string;
  completedLessons: number;
  lessons: number;
  points: number;
}

interface TeamMember {
  name: string;
  role: string;
  completed: number;
  progress: number;
}

const teamProgress: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Team Lead',
    completed: 8,
    progress: 80,
  },
  {
    name: 'Jane Smith',
    role: 'Developer',
    completed: 6,
    progress: 60,
  },
  {
    name: 'Mike Johnson',
    role: 'Designer',
    completed: 4,
    progress: 40,
  },
  {
    name: 'Sarah Williams',
    role: 'QA Engineer',
    completed: 7,
    progress: 70,
  },
];

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
    points: 100,
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
    points: 60,
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
    points: 0,
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
    points: 0,
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
              icon={FaBook}
              title={module.title}
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
                          Team Progress: {teamProgress.find(member => member.name === 'John Doe')?.completed} of {teamProgress.length} members
                        </span>
                        <span className="text-sm font-medium text-text-primary">
                          {Math.round((teamProgress.find(member => member.name === 'John Doe')?.progress || 0) / 100 * 100)}%
                        </span>
                      </div>
                      <ProgressBar
                        progress={(teamProgress.find(member => member.name === 'John Doe')?.progress || 0) / 100}
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

      <Card
        icon={FaUsers}
        title="Team Progress"
        className="md:col-span-2"
      >
        <div className="space-y-6">
          {teamProgress.map((member, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaUserFriends className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">{member.name}</h3>
                  <p className="text-sm text-text-secondary">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-text-primary">{member.completed}</div>
                  <div className="text-xs text-text-secondary">Completed</div>
                </div>
                <ProgressBar progress={member.progress} size="sm" color="primary" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
} 