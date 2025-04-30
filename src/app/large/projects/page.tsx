import React from 'react';

const dummyProjects = [
  { id: 1, name: 'Community Garden', status: 'Active' },
  { id: 2, name: 'Neighborhood Cleanup', status: 'Completed' },
  { id: 3, name: 'Youth Mentorship', status: 'Active' },
];

export default function ProjectsArea() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Community Projects</h1>
        <ul className="space-y-4">
          {dummyProjects.map(project => (
            <li key={project.id} className="flex items-center justify-between p-4 bg-background-secondary rounded">
              <span className="font-medium">{project.name}</span>
              <span className={`px-3 py-1 rounded text-xs font-semibold ${project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{project.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 