import React from 'react';

const dummyMembers = [
  { id: 1, name: 'Sarah Johnson', role: 'Admin' },
  { id: 2, name: 'Mike Brown', role: 'Member' },
  { id: 3, name: 'Jane Smith', role: 'Member' },
];

export default function MembersArea() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Organization Members</h1>
        <ul className="space-y-4">
          {dummyMembers.map(member => (
            <li key={member.id} className="flex items-center justify-between p-4 bg-background-secondary rounded">
              <span className="font-medium">{member.name}</span>
              <span className="px-3 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 