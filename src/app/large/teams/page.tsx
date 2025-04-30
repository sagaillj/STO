'use client';

import React, { useState } from 'react';
import { FaUsers, FaChartBar, FaUserPlus, FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  completedModules: number;
  totalModules: number;
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  progress: number;
  performance: number;
  engagement: number;
}

const teams: Team[] = [
  {
    id: '1',
    name: 'Leadership Development',
    description: 'Senior management and emerging leaders',
    members: [
      {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Team Lead',
        avatar: '/avatars/sarah.jpg',
        completedModules: 15,
        totalModules: 20
      },
      {
        id: '2',
        name: 'Michael Chen',
        role: 'Manager',
        avatar: '/avatars/michael.jpg',
        completedModules: 18,
        totalModules: 20
      }
    ],
    progress: 85,
    performance: 92,
    engagement: 88
  },
  {
    id: '2',
    name: 'Innovation Hub',
    description: 'Product development and research team',
    members: [
      {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Product Lead',
        avatar: '/avatars/emily.jpg',
        completedModules: 12,
        totalModules: 15
      },
      {
        id: '4',
        name: 'David Kim',
        role: 'Developer',
        avatar: '/avatars/david.jpg',
        completedModules: 10,
        totalModules: 15
      }
    ],
    progress: 78,
    performance: 85,
    engagement: 90
  }
];

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFilter === 'all' || 
     (selectedFilter === 'high-performing' && team.performance >= 90) ||
     (selectedFilter === 'needs-attention' && team.performance < 75))
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Teams</h1>
          <p className="text-text-secondary">Manage and track team performance</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <FaUserPlus className="w-4 h-4" />
          <span>Create Team</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search teams..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-border bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="all">All Teams</option>
          <option value="high-performing">High Performing</option>
          <option value="needs-attention">Needs Attention</option>
        </select>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTeams.map(team => (
          <Card
            key={team.id}
            icon={FaUsers}
            title={team.name}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text-primary">{team.name}</h3>
                <p className="text-sm text-text-secondary">{team.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {team.members.map(member => (
                    <div
                      key={member.id}
                      className="w-8 h-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden"
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  {team.members.length} members
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Progress</span>
                  <span className="text-text-primary">{team.progress}%</span>
                </div>
                <ProgressBar progress={team.progress} size="sm" color="primary" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FaChartBar className="text-primary" />
                    <span className="text-sm text-text-secondary">Performance</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">
                    {team.performance}%
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-primary" />
                    <span className="text-sm text-text-secondary">Engagement</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">
                    {team.engagement}%
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 