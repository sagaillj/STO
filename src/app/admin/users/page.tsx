import React from 'react';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Member' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  { id: 3, name: 'Mike Brown', email: 'mike@example.com', role: 'Member' },
];

export default function UserManagement() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map(user => (
              <tr key={user.id} className="border-t border-border-primary">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 