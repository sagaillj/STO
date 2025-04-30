"use client";

import React, { useState } from 'react';

export default function OrganizationSettings() {
  const [publicProfile, setPublicProfile] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Organization Settings</h1>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Public Profile</span>
            <input
              type="checkbox"
              checked={publicProfile}
              onChange={() => setPublicProfile(!publicProfile)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Receive Email Updates</span>
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 