'use client';

import React from 'react';
import {
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaCalendarCheck,
  FaLightbulb,
  FaMedal,
  FaCertificate,
  FaUserFriends,
  FaProjectDiagram,
  FaBuilding,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface DepartmentProgress {
  name: string;
  totalMembers: number;
  completedModules: number;
  totalModules: number;
  avgScore: number;
  trend: number;
}

const departmentProgress: DepartmentProgress[] = [
  {
    name: 'Executive Team',
    totalMembers: 5,
    completedModules: 45,
    totalModules: 50,
    avgScore: 92,
    trend: 8
  },
  {
    name: 'Management',
    totalMembers: 15,
    completedModules: 120,
    totalModules: 150,
    avgScore: 88,
    trend: 12
  },
  {
    name: 'Operations',
    totalMembers: 25,
    completedModules: 175,
    totalModules: 250,
    avgScore: 85,
    trend: 15
  }
];

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: IconType;
  color: string;
  progress: number;
  total: number;
}

const achievements: Achievement[] = [
  {
    title: 'Team Leadership',
    description: 'Lead and manage enterprise teams effectively',
    progress: 75,
    total: 100,
    icon: FaUsers,
    date: '2024-03-15',
    color: 'text-primary'
  },
  {
    title: 'Project Management',
    description: 'Handle complex enterprise projects',
    progress: 60,
    total: 100,
    icon: FaProjectDiagram,
    date: '2024-03-10',
    color: 'text-accent-blue'
  },
  {
    title: 'Enterprise Architecture',
    description: 'Design scalable enterprise solutions',
    progress: 45,
    total: 100,
    icon: FaBuilding,
    date: '2024-03-05',
    color: 'text-accent-yellow'
  }
];

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Organizational Progress</h1>
        <p className="text-text-secondary">Track your organization's learning journey</p>
      </div>

      {/* Overall Progress */}
      <Card
        icon={FaChartLine}
        title="Progress Overview"
        className="md:col-span-2"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-background-secondary text-primary">
            <FaChartLine className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Overall Progress</h2>
            <p className="text-text-secondary">Combined progress across all departments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-sm text-text-secondary">Modules Completed</div>
            <div className="text-2xl font-bold text-text-primary">340/450</div>
            <ProgressBar progress={75} size="lg" color="primary" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-text-secondary">Average Score</div>
            <div className="text-2xl font-bold text-text-primary">88%</div>
            <ProgressBar progress={88} size="lg" color="peach" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-text-secondary">Team Participation</div>
            <div className="text-2xl font-bold text-text-primary">92%</div>
            <ProgressBar progress={92} size="lg" color="green" />
          </div>
        </div>
      </Card>

      {/* Department Progress */}
      <Card
        icon={FaUsers}
        title="Team Performance"
        className="md:col-span-2"
      >
        <h2 className="text-xl font-semibold text-text-primary mb-6">Department Progress</h2>
        <div className="space-y-8">
          {departmentProgress.map((dept, index) => (
            <div key={dept.name} className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-text-primary">{dept.name}</h3>
                  <p className="text-sm text-text-secondary">
                    {dept.totalMembers} members | {dept.completedModules} of {dept.totalModules} modules completed
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-text-primary">{dept.avgScore}%</div>
                  <div className="text-sm text-green-400">+{dept.trend}%</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Module Completion</span>
                  <span className="text-text-primary">
                    {Math.round((dept.completedModules / dept.totalModules) * 100)}%
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-full">
                  <ProgressBar
                    progress={(dept.completedModules / dept.totalModules) * 100}
                    size="sm"
                    color={index === 0 ? 'primary' : index === 1 ? 'peach' : 'green'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card
        icon={FaTrophy}
        title="Achievements"
        className="md:col-span-2"
      >
        <h2 className="text-xl font-semibold text-text-primary mb-6">Organization Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const progress = (achievement.progress / achievement.total) * 100;

            return (
              <div key={achievement.title} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-background-secondary text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{achievement.title}</h3>
                    <p className="text-sm text-text-secondary">{achievement.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Progress</span>
                    <span className="text-text-primary">{Math.round(progress)}%</span>
                  </div>
                  <div className="relative overflow-hidden rounded-full">
                    <ProgressBar
                      progress={progress}
                      size="sm"
                      color="primary"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
} 