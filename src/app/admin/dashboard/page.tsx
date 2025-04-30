'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { FaUsers, FaBuilding, FaProjectDiagram, FaChartBar } from 'react-icons/fa';

const dummyStats = [
  { label: 'Total Users', value: 128, icon: FaUsers },
  { label: 'Organizations', value: 12, icon: FaBuilding },
  { label: 'Active Projects', value: 34, icon: FaProjectDiagram },
  { label: 'Reports', value: 7, icon: FaChartBar },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-3">
          Admin Dashboard
        </h1>
        <p className="text-lg text-text-secondary">
          Overview of system-wide statistics and management tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dummyStats.map(stat => (
          <Card
            key={stat.label}
            icon={stat.icon}
            title={stat.value.toString()}
            subtitle={stat.label}
            className="text-center"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="User Management"
          icon={FaUsers}
          className="cursor-pointer hover:scale-[1.02] transition-all duration-200"
          onClick={() => window.location.href = '/admin/users'}
        >
          <p className="text-text-secondary">Manage user accounts and permissions</p>
        </Card>

        <Card
          title="Organization Management"
          icon={FaBuilding}
          className="cursor-pointer hover:scale-[1.02] transition-all duration-200"
          onClick={() => window.location.href = '/admin/organizations'}
        >
          <p className="text-text-secondary">Oversee organization settings and members</p>
        </Card>

        <Card
          title="Analytics & Reports"
          icon={FaChartBar}
          className="cursor-pointer hover:scale-[1.02] transition-all duration-200"
          onClick={() => window.location.href = '/admin/analytics'}
        >
          <p className="text-text-secondary">View detailed system analytics</p>
        </Card>
      </div>
    </div>
  );
} 