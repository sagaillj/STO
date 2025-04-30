"use client";

import React, { useState } from 'react';

export default function GroupSettings() {
  const [notifications, setNotifications] = useState(true);
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Group Settings</h1>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Enable Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Show Members Publicly</span>
            <input
              type="checkbox"
              checked={showMembers}
              onChange={() => setShowMembers(!showMembers)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 