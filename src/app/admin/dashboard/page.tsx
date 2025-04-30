'use client';

import React from 'react';
import {
  FaChartLine,
  FaUsers,
  FaRocket,
  FaUserPlus,
  FaUserFriends,
  FaBuilding,
  FaGraduationCap,
  FaCertificate,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Card from '@/app/components/Card';

interface Stat {
  label: string;
  value: number;
  icon: IconType;
}

interface Activity {
  user: string;
  action: string;
  time: string;
}

const dummyStats: Stat[] = [
  { label: 'Total Users', value: 128, icon: FaUsers },
  { label: 'Organizations', value: 12, icon: FaBuilding },
  { label: 'Active Projects', value: 34, icon: FaGraduationCap },
  { label: 'Reports', value: 7, icon: FaCertificate },
];

const teamActivity: Activity[] = [
  {
    user: 'John Doe',
    action: 'Completed training module',
    time: '2 hours ago',
  },
  {
    user: 'Jane Smith',
    action: 'Created new organization',
    time: '4 hours ago',
  },
  {
    user: 'Mike Johnson',
    action: 'Updated team settings',
    time: '6 hours ago',
  },
  {
    user: 'Sarah Williams',
    action: 'Added new team member',
    time: '8 hours ago',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dummyStats.map((stat, index) => (
          <Card
            key={index}
            icon={stat.icon}
            title={stat.label}
            className="text-center"
          >
            <div className="p-4">
              <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={FaChartLine}
          title="Performance Overview"
          className="md:col-span-2"
        >
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dummyStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-background-secondary">
                    <stat.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card
          icon={FaUsers}
          title="Team Activity"
          className="md:col-span-2"
        >
          <div className="p-6">
            <div className="space-y-6">
              {teamActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-background-secondary">
                      <FaUserFriends className="text-xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text-primary">{activity.user}</h3>
                      <p className="text-sm text-text-secondary">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-sm text-text-secondary">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card
          icon={FaRocket}
          title="Quick Actions"
          className="md:col-span-2"
        >
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="flex items-center gap-3 p-4 rounded-lg bg-background-secondary hover:bg-background-secondary/80 transition-colors">
                <FaUserPlus className="text-xl text-primary" />
                <span className="font-medium">Add New User</span>
              </button>
              <button className="flex items-center gap-3 p-4 rounded-lg bg-background-secondary hover:bg-background-secondary/80 transition-colors">
                <FaBuilding className="text-xl text-primary" />
                <span className="font-medium">Create Organization</span>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 