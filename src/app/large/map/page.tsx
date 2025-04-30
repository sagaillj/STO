import React from 'react';

const dummyEngagements = [
  { id: 1, location: 'Central Park', activity: 'Cleanup', participants: 15 },
  { id: 2, location: 'Main Library', activity: 'Book Drive', participants: 8 },
  { id: 3, location: 'Community Center', activity: 'Workshop', participants: 20 },
];

export default function CommunityMap() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Community Engagement Map</h1>
        <div className="mb-6 h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
          [Map Placeholder]
        </div>
        <ul className="space-y-4">
          {dummyEngagements.map(e => (
            <li key={e.id} className="flex items-center justify-between p-4 bg-background-secondary rounded">
              <div>
                <span className="font-medium">{e.location}</span>
                <span className="ml-2 text-sm text-gray-600">({e.activity})</span>
              </div>
              <span className="px-3 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">{e.participants} participants</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 