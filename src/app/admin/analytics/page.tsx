import React from 'react';

const dummyAnalytics = [
  { label: 'Active Users (30d)', value: 87 },
  { label: 'New Signups (30d)', value: 14 },
  { label: 'Projects Completed', value: 22 },
  { label: 'Messages Sent', value: 340 },
];

export default function AnalyticsReports() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyAnalytics.map(item => (
            <div key={item.label} className="bg-background-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-text-secondary">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 