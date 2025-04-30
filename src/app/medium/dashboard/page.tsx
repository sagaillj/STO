'use client';

import React from 'react';
import { FaBook, FaUsers, FaCalendar, FaChartLine, FaTrophy, FaCheckCircle, FaRocket } from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { EditionBadge } from '@/components/EditionBadge';

interface ActivityItem {
  type: 'team' | 'training' | 'achievement';
  title: string;
  timestamp: string;
  description?: string;
}

const recentActivity: ActivityItem[] = [
  {
    type: 'team',
    title: 'Team Milestone Achieved',
    timestamp: '1 hour ago',
    description: 'Team completed Module 2 training'
  },
  {
    type: 'training',
    title: 'New Course Available',
    timestamp: '3 hours ago',
    description: 'Advanced Leadership Skills now available'
  },
  {
    type: 'achievement',
    title: 'Team Recognition',
    timestamp: '1 day ago',
    description: '90% team participation rate this month'
  }
];

const getActivityIcon = (type: ActivityItem['type']): React.ElementType => {
  switch (type) {
    case 'team':
      return FaUsers;
    case 'training':
      return FaBook;
    case 'achievement':
      return FaTrophy;
    default:
      return FaCheckCircle;
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Team Dashboard</h1>
          <p className="text-text-secondary">Track your team's progress and achievements</p>
        </div>
        <EditionBadge edition="Group" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={FaUsers}
          title="Active Members"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">12/15</p>
            <p className="text-sm text-gray-400">Team members active</p>
            <ProgressBar progress={80} size="sm" color="yellow" />
          </div>
        </Card>

        <Card
          icon={FaBook}
          title="Team Progress"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-gray-400">Training completion</p>
            <ProgressBar progress={85} size="sm" color="peach" />
          </div>
        </Card>

        <Card
          icon={FaCalendar}
          title="Upcoming Sessions"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">4</p>
            <p className="text-sm text-gray-400">This week</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={FaChartLine}
          title="Team Performance"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Course Completion</p>
                <p className="text-sm text-gray-400">85%</p>
              </div>
              <ProgressBar progress={85} size="md" color="yellow" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Participation Rate</p>
                <p className="text-sm text-gray-400">90%</p>
              </div>
              <ProgressBar progress={90} size="md" color="peach" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Assessment Scores</p>
                <p className="text-sm text-gray-400">78%</p>
              </div>
              <ProgressBar progress={78} size="md" color="green" />
            </div>
          </div>
        </Card>

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
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card
          icon={FaRocket}
          title="Quick Actions"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaBook className="text-text-secondary" />
              <span>Schedule Training</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaChartLine className="text-text-secondary" />
              <span>View Team Analytics</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaRocket className="text-text-secondary" />
              <span>Set Team Goals</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
} 