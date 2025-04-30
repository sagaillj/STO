'use client';

import React from 'react';
import {
  FaDollarSign,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaDownload,
  FaFilter,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface RevenueMetric {
  current: number;
  previous: number;
  percentageChange: number;
}

interface CustomerMetric {
  total: number;
  active: number;
  churned: number;
  percentageChurn: number;
}

const revenueMetrics = {
  mrr: {
    current: 89700,
    previous: 82500,
    percentageChange: 8.73,
  },
  arr: {
    current: 1076400,
    previous: 990000,
    percentageChange: 8.73,
  },
  ytd: {
    current: 805800,
    previous: 742500,
    percentageChange: 8.53,
  },
};

const customerMetrics: CustomerMetric = {
  total: 450,
  active: 432,
  churned: 18,
  percentageChurn: 4,
};

const monthlyRevenue = [
  { month: 'Jan', amount: 82500 },
  { month: 'Feb', amount: 84300 },
  { month: 'Mar', amount: 86100 },
  { month: 'Apr', amount: 87900 },
  { month: 'May', amount: 89700 },
];

const editionRevenue = [
  { name: 'Small', percentage: 25, amount: 22425 },
  { name: 'Medium', percentage: 45, amount: 40365 },
  { name: 'Large', percentage: 30, amount: 26910 },
];

export default function FinancePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Financial Overview</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track revenue, subscriptions, and financial metrics
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
            <FaDownload className="w-4 h-4" />
            Export Report
          </button>
          <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
            <FaFilter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* MRR Card */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaDollarSign className="text-primary" />
                Monthly Recurring Revenue
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">
                ${revenueMetrics.mrr.current.toLocaleString()}
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                revenueMetrics.mrr.percentageChange >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}>
                {revenueMetrics.mrr.percentageChange >= 0 ? (
                  <FaArrowUp className="w-3 h-3" />
                ) : (
                  <FaArrowDown className="w-3 h-3" />
                )}
                {Math.abs(revenueMetrics.mrr.percentageChange)}% from last month
              </div>
            </div>
          </div>
        </Card>

        {/* ARR Card */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaChartLine className="text-primary" />
                Annual Recurring Revenue
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">
                ${revenueMetrics.arr.current.toLocaleString()}
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                revenueMetrics.arr.percentageChange >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}>
                {revenueMetrics.arr.percentageChange >= 0 ? (
                  <FaArrowUp className="w-3 h-3" />
                ) : (
                  <FaArrowDown className="w-3 h-3" />
                )}
                {Math.abs(revenueMetrics.arr.percentageChange)}% from last year
              </div>
            </div>
          </div>
        </Card>

        {/* Customer Metrics Card */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaUsers className="text-primary" />
                Customer Metrics
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">{customerMetrics.active}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Active Customers
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Churn Rate</span>
                <span className="text-red-500">{customerMetrics.percentageChurn}%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Revenue Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Revenue Trend */}
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Monthly Revenue Trend</h3>
            <div className="space-y-4">
              {monthlyRevenue.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{month.month}</span>
                    <span>${month.amount.toLocaleString()}</span>
                  </div>
                  <ProgressBar
                    progress={(month.amount / 100000) * 100}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Revenue by Edition */}
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Revenue by Edition</h3>
            <div className="space-y-4">
              {editionRevenue.map((edition, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{edition.name} Edition</span>
                    <span>${edition.amount.toLocaleString()} ({edition.percentage}%)</span>
                  </div>
                  <ProgressBar
                    progress={edition.percentage}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6">Financial Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-3 font-medium">Metric</th>
                  <th className="pb-3 font-medium">Current</th>
                  <th className="pb-3 font-medium">Previous</th>
                  <th className="pb-3 font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4">Monthly Recurring Revenue</td>
                  <td className="py-4">${revenueMetrics.mrr.current.toLocaleString()}</td>
                  <td className="py-4">${revenueMetrics.mrr.previous.toLocaleString()}</td>
                  <td className={`py-4 ${
                    revenueMetrics.mrr.percentageChange >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}>
                    {revenueMetrics.mrr.percentageChange >= 0 ? '+' : ''}
                    {revenueMetrics.mrr.percentageChange}%
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4">Annual Recurring Revenue</td>
                  <td className="py-4">${revenueMetrics.arr.current.toLocaleString()}</td>
                  <td className="py-4">${revenueMetrics.arr.previous.toLocaleString()}</td>
                  <td className={`py-4 ${
                    revenueMetrics.arr.percentageChange >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}>
                    {revenueMetrics.arr.percentageChange >= 0 ? '+' : ''}
                    {revenueMetrics.arr.percentageChange}%
                  </td>
                </tr>
                <tr>
                  <td className="py-4">Year to Date Revenue</td>
                  <td className="py-4">${revenueMetrics.ytd.current.toLocaleString()}</td>
                  <td className="py-4">${revenueMetrics.ytd.previous.toLocaleString()}</td>
                  <td className={`py-4 ${
                    revenueMetrics.ytd.percentageChange >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}>
                    {revenueMetrics.ytd.percentageChange >= 0 ? '+' : ''}
                    {revenueMetrics.ytd.percentageChange}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
} 