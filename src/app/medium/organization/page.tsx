'use client';

import React from 'react';
import {
  FaUserTie,
  FaUsers,
  FaCog,
  FaEnvelope,
  FaCalendarAlt,
  FaUserPlus,
  FaShieldAlt,
  FaBuilding,
  FaEllipsisH,
} from 'react-icons/fa';
import Card from '@/components/Card';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  status: 'active' | 'away' | 'offline';
  joinDate: string;
  lastActive: string;
}

interface TeamRole {
  name: string;
  count: number;
  permissions: string[];
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Team Lead',
    email: 'sarah.j@company.com',
    avatar: '/avatars/sarah.jpg',
    status: 'active',
    joinDate: '2023-06-15',
    lastActive: '2 minutes ago',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Developer',
    email: 'mike.c@company.com',
    avatar: '/avatars/mike.jpg',
    status: 'active',
    joinDate: '2023-08-01',
    lastActive: '5 minutes ago',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Designer',
    email: 'emma.d@company.com',
    avatar: '/avatars/emma.jpg',
    status: 'away',
    joinDate: '2023-07-20',
    lastActive: '1 hour ago',
  },
  {
    id: 4,
    name: 'Alex Thompson',
    role: 'Developer',
    email: 'alex.t@company.com',
    avatar: '/avatars/alex.jpg',
    status: 'offline',
    joinDate: '2023-09-10',
    lastActive: '2 days ago',
  },
];

const teamRoles: TeamRole[] = [
  {
    name: 'Team Lead',
    count: 1,
    permissions: ['Manage team', 'Assign roles', 'View analytics'],
    color: 'blue',
  },
  {
    name: 'Developer',
    count: 2,
    permissions: ['Access codebase', 'Submit reviews', 'Deploy code'],
    color: 'green',
  },
  {
    name: 'Designer',
    count: 1,
    permissions: ['Access design tools', 'Submit designs', 'View feedback'],
    color: 'purple',
  },
];

export default function OrganizationPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Organization Management</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Manage your team structure and settings
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
          <FaUserPlus />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Team Members List */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FaUsers className="text-primary" />
                  Team Members
                </h2>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                            member.status === 'active'
                              ? 'bg-green-500'
                              : member.status === 'away'
                              ? 'bg-yellow-500'
                              : 'bg-gray-500'
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {member.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Last active: {member.lastActive}
                      </div>
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <FaEllipsisH />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaBuilding className="text-primary" />
                Organization Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Total Members</span>
                  <span className="font-medium">{teamMembers.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Active Now</span>
                  <span className="font-medium">
                    {teamMembers.filter((m) => m.status === 'active').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Roles</span>
                  <span className="font-medium">{teamRoles.length}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Team Roles */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-primary" />
                Team Roles
              </h2>
              <div className="space-y-4">
                {teamRoles.map((role, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{role.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {role.count} members
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {role.permissions.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaCog className="text-primary" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full p-2 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2">
                  <FaUserPlus className="text-primary" />
                  Add New Member
                </button>
                <button className="w-full p-2 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2">
                  <FaShieldAlt className="text-primary" />
                  Manage Roles
                </button>
                <button className="w-full p-2 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2">
                  <FaCog className="text-primary" />
                  Organization Settings
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 