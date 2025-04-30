'use client';

import React from 'react';
import { FaBook, FaCheckCircle, FaTrophy, FaCalendar, FaChartLine, FaRocket } from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { EditionBadge } from '@/components/EditionBadge';

interface ActivityItem {
  type: 'milestone' | 'training' | 'goal';
  title: string;
  timestamp: string;
  description?: string;
}

const recentActivity: ActivityItem[] = [
  {
    type: 'milestone',
    title: 'First Module Completed!',
    timestamp: '2 hours ago',
    description: 'Completed Introduction to Leadership'
  },
  {
    type: 'training',
    title: 'Training Progress',
    timestamp: '1 day ago',
    description: 'Completed 2 lessons in Communication Skills'
  },
  {
    type: 'goal',
    title: 'Weekly Goal Progress',
    timestamp: '2 days ago',
    description: '75% of weekly learning goals achieved'
  }
];

const getActivityIcon = (type: ActivityItem['type']): React.ElementType => {
  switch (type) {
    case 'milestone':
      return FaTrophy;
    case 'training':
      return FaBook;
    case 'goal':
      return FaCheckCircle;
    default:
      return FaCheckCircle;
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome Back!</h1>
          <p className="text-text-secondary">Your personal growth journey continues</p>
        </div>
        <EditionBadge edition="Personal" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={FaBook}
          title="Learning Journey"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">4/12</p>
            <p className="text-sm text-gray-400">Modules completed</p>
            <ProgressBar progress={33} size="sm" color="yellow" />
          </div>
        </Card>

        <Card
          icon={FaCheckCircle}
          title="Weekly Goals"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">75%</p>
            <p className="text-sm text-gray-400">Progress this week</p>
            <ProgressBar progress={75} size="sm" color="peach" />
          </div>
        </Card>

        <Card
          icon={FaCalendar}
          title="Upcoming Tasks"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-gray-400">Due this week</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={FaRocket}
          title="Recent Activity"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="divide-y divide-gray-700">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-background-secondary group-hover:scale-110 transition-transform">
                    {React.createElement(getActivityIcon(activity.type), {
                      className: 'w-5 h-5 text-text-secondary'
                    })}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-400">{activity.timestamp}</p>
                    {activity.description && (
                      <p className="text-sm text-text-secondary mt-1">{activity.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          icon={FaRocket}
          title="Quick Actions"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="space-y-4">
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaBook className="text-text-secondary" />
              <span>Continue Learning</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaChartLine className="text-text-secondary" />
              <span>View Progress</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaRocket className="text-text-secondary" />
              <span>Set New Goals</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
} 