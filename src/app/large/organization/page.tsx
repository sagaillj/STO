'use client';

import React from 'react';
import {
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaUserPlus,
  FaUserFriends,
  FaUserTie,
  FaLayerGroup,
  FaChartBar
} from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Department {
  id: string;
  name: string;
  head: string;
  headTitle: string;
  memberCount: number;
  completionRate: number;
  engagementScore: number;
}

interface OrgMetrics {
  totalEmployees: number;
  departmentsCount: number;
  avgCompletion: number;
  avgEngagement: number;
  activeProjects: number;
  certifications: number;
}

const departments: Department[] = [
  {
    id: '1',
    name: 'Executive Leadership',
    head: 'Robert Smith',
    headTitle: 'CEO',
    memberCount: 8,
    completionRate: 95,
    engagementScore: 92
  },
  {
    id: '2',
    name: 'Operations',
    head: 'Maria Garcia',
    headTitle: 'COO',
    memberCount: 45,
    completionRate: 88,
    engagementScore: 85
  },
  {
    id: '3',
    name: 'Human Resources',
    head: 'James Wilson',
    headTitle: 'HR Director',
    memberCount: 12,
    completionRate: 92,
    engagementScore: 90
  },
  {
    id: '4',
    name: 'Technology',
    head: 'Sarah Chen',
    headTitle: 'CTO',
    memberCount: 65,
    completionRate: 85,
    engagementScore: 88
  }
];

const orgMetrics: OrgMetrics = {
  totalEmployees: 130,
  departmentsCount: 4,
  avgCompletion: 90,
  avgEngagement: 89,
  activeProjects: 12,
  certifications: 245
};

export default function OrganizationPage() {
  return (
    <div className="space-y-8">
      <Card
        icon={FaBuilding}
        title="Organization Overview"
        className="md:col-span-2"
      >
        <div>
          <p className="text-text-secondary mb-1">Total Employees</p>
          <h3 className="text-2xl font-bold text-text-primary">{orgMetrics.totalEmployees}</h3>
        </div>
      </Card>

      {/* Organization Metrics */}
      <Card
        icon={FaUsers}
        title="Team Structure"
        className="md:col-span-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={FaUsers}
            title="Total Employees"
            className="p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text-secondary mb-1">Total Employees</p>
                <h3 className="text-2xl font-bold text-text-primary">{orgMetrics.totalEmployees}</h3>
              </div>
              <FaUsers className="text-2xl text-primary" />
            </div>
          </Card>
          <Card
            icon={FaChartLine}
            title="Completion Rate"
            className="p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text-secondary mb-1">Avg. Completion Rate</p>
                <h3 className="text-2xl font-bold text-text-primary">{orgMetrics.avgCompletion}%</h3>
              </div>
              <FaChartLine className="text-2xl text-primary" />
            </div>
          </Card>
          <Card
            icon={FaLayerGroup}
            title="Certifications"
            className="p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text-secondary mb-1">Total Certifications</p>
                <h3 className="text-2xl font-bold text-text-primary">{orgMetrics.certifications}</h3>
              </div>
              <FaLayerGroup className="text-2xl text-primary" />
            </div>
          </Card>
        </div>
      </Card>

      {/* Department Overview */}
      <Card
        icon={FaUserPlus}
        title="Team Structure"
        className="md:col-span-2"
      >
        <div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map(dept => (
              <Card
                key={dept.id}
                icon={FaUserFriends}
                title={dept.name}
                className="p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{dept.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FaUserTie className="text-primary" />
                      <p className="text-sm text-text-secondary">
                        {dept.head} - {dept.headTitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-primary">{dept.memberCount}</div>
                    <div className="text-xs text-text-secondary">Members</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Completion Rate</span>
                      <span className="text-text-primary">{dept.completionRate}%</span>
                    </div>
                    <ProgressBar progress={dept.completionRate} size="sm" color="primary" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Engagement Score</span>
                      <span className="text-text-primary">{dept.engagementScore}%</span>
                    </div>
                    <ProgressBar progress={dept.engagementScore} size="sm" color="success" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* Organization Chart */}
      <Card
        icon={FaChartLine}
        title="Performance Metrics"
        className="md:col-span-2"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <FaBuilding className="text-3xl text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">{orgMetrics.departmentsCount}</div>
            <div className="text-sm text-text-secondary">Departments</div>
          </div>
          <div className="text-center">
            <FaUsers className="text-3xl text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">{orgMetrics.totalEmployees}</div>
            <div className="text-sm text-text-secondary">Employees</div>
          </div>
          <div className="text-center">
            <FaChartBar className="text-3xl text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">{orgMetrics.activeProjects}</div>
            <div className="text-sm text-text-secondary">Active Projects</div>
          </div>
          <div className="text-center">
            <FaLayerGroup className="text-3xl text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">{orgMetrics.certifications}</div>
            <div className="text-sm text-text-secondary">Certifications</div>
          </div>
        </div>
      </Card>
    </div>
  );
} 