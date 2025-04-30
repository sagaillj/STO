'use client';

import React, { useState } from 'react';
import { 
  FaBell, FaMoon, FaLanguage, FaUserCircle, 
  FaShieldAlt, FaEnvelope, FaToggleOn, FaToggleOff 
} from 'react-icons/fa';
import Card from '@/components/Card';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const notificationSettings: NotificationSetting[] = [
  {
    id: 'progress',
    title: 'Progress Updates',
    description: 'Receive notifications about your learning progress',
    enabled: true
  },
  {
    id: 'achievements',
    title: 'Achievement Alerts',
    description: 'Get notified when you earn new achievements',
    enabled: true
  },
  {
    id: 'tips',
    title: 'Learning Tips',
    description: 'Receive daily tips and learning recommendations',
    enabled: false
  }
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(notificationSettings);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleNotification = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, enabled: !notification.enabled }
        : notification
    ));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Account Settings */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaUserCircle className="text-primary" />
            Account Settings
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="flex gap-4">
                <input
                  type="email"
                  value="john.doe@example.com"
                  disabled
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                />
                <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Change Email
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaBell className="text-primary" />
            Notification Preferences
          </h2>
          <div className="space-y-6">
            {notifications.map(notification => (
              <div key={notification.id} className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {notification.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleNotification(notification.id)}
                  className="text-2xl text-primary"
                >
                  {notification.enabled ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Appearance & Language */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Appearance & Language</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaMoon className="text-primary" />
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Switch between light and dark themes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl text-primary"
              >
                {darkMode ? <FaToggleOn /> : <FaToggleOff />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaLanguage className="text-primary" />
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Choose your preferred language
                  </p>
                </div>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-primary" />
            Privacy & Security
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Add an extra layer of security to your account
              </p>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Enable 2FA
              </button>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Data Privacy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Manage your data and privacy preferences
              </p>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Support & Help */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            Support & Help
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Need help? Contact our support team or visit our help center.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Contact Support
              </button>
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Help Center
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 