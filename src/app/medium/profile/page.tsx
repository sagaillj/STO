'use client';

import React from 'react';
import {
  FaUser,
  FaEdit,
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
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface TeamContribution {
  project: string;
  role: string;
  duration: string;
  status: 'completed' | 'in-progress';
  contribution: number;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
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

const teamContributions: TeamContribution[] = [
  {
    project: 'Project Management System',
    role: 'Lead Developer',
    duration: '3 months',
    status: 'completed',
    contribution: 85,
  },
  {
    project: 'Client Portal Redesign',
    role: 'Frontend Developer',
    duration: '2 months',
    status: 'in-progress',
    contribution: 60,
  },
  {
    project: 'API Integration',
    role: 'Backend Developer',
    duration: '1 month',
    status: 'in-progress',
    contribution: 40,
  },
];

const certifications: Certification[] = [
  {
    name: 'Advanced Team Leadership',
    issuer: 'Management Institute',
    date: 'Dec 2023',
    icon: <FaCertificate className="text-yellow-400" />,
  },
  {
    name: 'Project Management Professional',
    issuer: 'PMI',
    date: 'Oct 2023',
    icon: <FaBriefcase className="text-blue-500" />,
  },
];

const skills = [
  { name: 'Team Leadership', level: 90 },
  { name: 'Project Management', level: 85 },
  { name: 'Technical Development', level: 80 },
  { name: 'Communication', level: 95 },
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
    amount: 299,
    status: 'paid',
    invoice: 'INV-2024-001',
  },
  {
    id: '2',
    date: '2024-04-01',
    amount: 299,
    status: 'paid',
    invoice: 'INV-2024-002',
  },
  {
    id: '3',
    date: '2024-03-01',
    amount: 299,
    status: 'paid',
    invoice: 'INV-2024-003',
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Member Profile</h1>
        <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Information */}
        <Card className="md:col-span-2">
          <div className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src="/avatars/profile.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  <FaCamera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Sarah Johnson</h2>
                    <p className="text-gray-600 dark:text-gray-300">Senior Developer</p>
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
                    <FaUsers className="text-primary" />
                    <span>Development Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="text-primary" />
                    <span>Joined June 2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experienced developer with a passion for building scalable applications and leading
                development teams. Focused on creating efficient solutions and mentoring team members.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <ProgressBar
                      progress={skill.level}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team Contributions */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaChartLine className="text-primary" />
                Team Contributions
              </h3>
              <div className="space-y-4">
                {teamContributions.map((contribution, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3"
                  >
                    <div>
                      <h4 className="font-medium">{contribution.project}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {contribution.role} • {contribution.duration}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Contribution</span>
                        <span>{contribution.contribution}%</span>
                      </div>
                      <ProgressBar
                        progress={contribution.contribution}
                        className="h-1.5"
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span
                        className={`px-2 py-1 rounded-full ${
                          contribution.status === 'completed'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        }`}
                      >
                        {contribution.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaCertificate className="text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                      {cert.icon}
                    </div>
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </div>
                      <div className="text-sm text-gray-500">{cert.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Billing Section - Full Width */}
        <Card className="md:col-span-3">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaCreditCard className="text-primary" />
                Billing & Subscription
              </h2>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Update Payment Method
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Subscription */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Current Plan</h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Medium Edition</span>
                    <span className="text-green-500 flex items-center gap-1">
                      <FaCheckCircle className="w-4 h-4" />
                      Active
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-2">$299/month</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Next billing date: March 1, 2024
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 text-sm text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
                      Change Plan
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
                      Cancel Subscription
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