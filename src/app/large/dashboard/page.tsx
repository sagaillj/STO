'use client';

import React from 'react';
import { FaUsers, FaBuilding, FaCalendar, FaChartLine, FaTrophy, FaCheckCircle, FaRocket, FaBook } from 'react-icons/fa';
import Card from '../../components/Card';
import ProgressBar from '@/components/ProgressBar';
import { EditionBadge } from '@/components/EditionBadge';

interface ActivityItem {
  type: 'organization' | 'department' | 'achievement';
  title: string;
  timestamp: string;
  description?: string;
}

const recentActivity: ActivityItem[] = [
  {
    type: 'organization',
    title: 'Organization Milestone',
    timestamp: '2 hours ago',
    description: 'Reached 1000 members milestone'
  },
  {
    type: 'department',
    title: 'Department Update',
    timestamp: '4 hours ago',
    description: 'Engineering team completed advanced training'
  },
  {
    type: 'achievement',
    title: 'Company Recognition',
    timestamp: '1 day ago',
    description: 'Awarded for excellence in community impact'
  }
];

const getActivityIcon = (type: ActivityItem['type']): React.ElementType => {
  switch (type) {
    case 'organization':
      return FaBuilding;
    case 'department':
      return FaUsers;
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
          <h1 className="text-3xl font-bold text-text-primary mb-2">Organization Dashboard</h1>
          <p className="text-text-secondary">Monitor your organization's growth and impact</p>
        </div>
        <EditionBadge edition="Community" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={FaUsers}
          title="Total Members"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">1,248</p>
            <p className="text-sm text-gray-400">Across all departments</p>
            <p className="text-xs text-green-400">+15% from last month</p>
          </div>
        </Card>

        <Card
          icon={FaBuilding}
          title="Departments"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-gray-400">Active departments</p>
            <ProgressBar progress={92} size="sm" color="peach" />
          </div>
        </Card>

        <Card
          icon={FaCalendar}
          title="Training Sessions"
          className="hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-gray-400">Scheduled this month</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={FaChartLine}
          title="Department Performance"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Engineering</p>
                <p className="text-sm text-gray-400">92%</p>
              </div>
              <ProgressBar progress={92} size="md" color="yellow" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Marketing</p>
                <p className="text-sm text-gray-400">88%</p>
              </div>
              <ProgressBar progress={88} size="md" color="peach" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Operations</p>
                <p className="text-sm text-gray-400">85%</p>
              </div>
              <ProgressBar progress={85} size="md" color="green" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Sales</p>
                <p className="text-sm text-gray-400">90%</p>
              </div>
              <ProgressBar progress={90} size="md" color="blue" />
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
          icon={FaChartLine}
          title="Organization Metrics"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Training Completion</p>
              <p className="text-2xl font-bold">89%</p>
              <ProgressBar progress={89} size="sm" color="yellow" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Employee Engagement</p>
              <p className="text-2xl font-bold">92%</p>
              <ProgressBar progress={92} size="sm" color="peach" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Growth Rate</p>
              <p className="text-2xl font-bold">15%</p>
              <ProgressBar progress={75} size="sm" color="green" />
            </div>
          </div>
        </Card>

        <Card
          icon={FaRocket}
          title="Quick Actions"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaBook className="text-text-secondary" />
              <span>Training Hub</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaChartLine className="text-text-secondary" />
              <span>Analytics</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaUsers className="text-text-secondary" />
              <span>Departments</span>
            </button>
            <button className="w-full p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300 flex items-center gap-3">
              <FaRocket className="text-text-secondary" />
              <span>Goals</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
} 