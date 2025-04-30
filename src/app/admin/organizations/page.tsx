import React from 'react';

const dummyOrgs = [
  { id: 1, name: 'Seed to Oaks', members: 24 },
  { id: 2, name: 'Neighborhood 360', members: 12 },
  { id: 3, name: 'Community Builders', members: 18 },
];

export default function OrganizationManagement() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Organization Management</h1>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Organization</th>
              <th className="px-4 py-2 text-left">Members</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrgs.map(org => (
              <tr key={org.id} className="border-t border-border-primary">
                <td className="px-4 py-2">{org.name}</td>
                <td className="px-4 py-2">{org.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 