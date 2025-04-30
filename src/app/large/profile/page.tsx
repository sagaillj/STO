'use client';

import React from 'react';
import {
  FaUser,
  FaCamera,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaBriefcase,
  FaCalendarAlt,
  FaLink,
  FaGithub,
  FaLinkedin,
  FaCreditCard,
  FaFileInvoice,
  FaClock,
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  progress: number;
}

interface OrganizationMetric {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface BillingHistory {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoice: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Team Lead',
    progress: 85,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Developer',
    progress: 75,
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Product Manager',
    progress: 90,
  },
];

const organizationMetrics: OrganizationMetric[] = [
  {
    label: 'Team Completion Rate',
    value: 87,
    change: 5,
    trend: 'up',
  },
  {
    label: 'Active Members',
    value: 45,
    change: 3,
    trend: 'up',
  },
  {
    label: 'Avg. Engagement',
    value: 92,
    change: 7,
    trend: 'up',
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'Visa',
    last4: '4242',
    expiry: '12/24',
    isDefault: true,
  },
  {
    id: '2',
    type: 'Mastercard',
    last4: '8888',
    expiry: '06/25',
    isDefault: false,
  },
];

const billingHistory: BillingHistory[] = [
  {
    id: '1',
    date: '2024-05-01',
    amount: 999,
    status: 'paid',
    invoice: 'INV-2024-001',
  },
  {
    id: '2',
    date: '2024-04-01',
    amount: 999,
    status: 'paid',
    invoice: 'INV-2024-002',
  },
  {
    id: '3',
    date: '2024-03-01',
    amount: 999,
    status: 'paid',
    invoice: 'INV-2024-003',
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Organization Profile</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Manage Team
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Organization Information */}
        <Card className="md:col-span-2">
          <div className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src="/avatars/organization.jpg"
                  alt="Organization"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  <FaCamera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">TechCorp Solutions</h2>
                    <p className="text-gray-600 dark:text-gray-300">Enterprise Organization</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaBuilding className="text-primary" />
                    <span>Technology Sector</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaUsers className="text-primary" />
                    <span>50-100 employees</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="text-primary" />
                    <span>Member since January 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Metrics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {organizationMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </div>
                  <div className="mt-1 flex items-end gap-2">
                    <div className="text-2xl font-bold">{metric.value}%</div>
                    <div
                      className={`flex items-center text-sm ${
                        metric.trend === 'up'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {metric.trend === 'up' ? '+' : '-'}
                      {metric.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Members */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Team Progress</h3>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {member.role}
                        </div>
                      </div>
                      <div className="text-sm font-medium">{member.progress}%</div>
                    </div>
                    <ProgressBar
                      progress={member.progress}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Organization Admin */}
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaUserTie className="text-primary" />
              Organization Admin
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/avatars/admin.jpg"
                  alt="Admin"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">Robert Wilson</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Chief Learning Officer
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Contact Information
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaLink className="text-primary w-4 h-4" />
                    <span>robert.wilson@techcorp.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Billing Section - Full Width */}
        <Card className="md:col-span-3">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaCreditCard className="text-primary" />
                Enterprise Billing
              </h2>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Manage Billing
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Plan */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Current Plan</h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Large Edition</span>
                    <span className="text-green-500 flex items-center gap-1">
                      <FaCheckCircle className="w-4 h-4" />
                      Active
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-2">$999/month</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Next billing date: June 1, 2024
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 text-sm text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
                      Change Plan
                    </button>
                    <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                      View Features
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Methods</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-gray-700 rounded">
                          <FaCreditCard className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">
                            {method.type} ending in {method.last4}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Expires {method.expiry}
                          </div>
                        </div>
                      </div>
                      {method.isDefault && (
                        <span className="text-sm text-primary">Default</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing History */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Invoice</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingHistory.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-200 dark:border-gray-700"
                        >
                          <td className="py-4">
                            {new Date(item.date).toLocaleDateString()}
                          </td>
                          <td className="py-4">{item.invoice}</td>
                          <td className="py-4">${item.amount.toFixed(2)}</td>
                          <td className="py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                item.status === 'paid'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                  : item.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 text-right">
                            <button className="text-primary hover:text-primary/80 transition-colors">
                              <FaFileInvoice className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 