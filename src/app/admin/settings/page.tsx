'use client';

import React, { useState } from 'react';
import { 
  FaCog, FaUsers, FaDatabase, FaChartBar, FaEnvelope, 
  FaShieldAlt, FaGlobe, FaToggleOn, FaToggleOff, FaServer 
} from 'react-icons/fa';
import Card from '@/components/Card';

interface SystemSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  category: 'security' | 'performance' | 'features';
}

const systemSettings: SystemSetting[] = [
  {
    id: 'auto_backup',
    title: 'Automatic Backups',
    description: 'Automatically backup system data daily',
    enabled: true,
    category: 'security'
  },
  {
    id: 'analytics',
    title: 'Usage Analytics',
    description: 'Collect anonymous usage data for system improvement',
    enabled: true,
    category: 'performance'
  },
  {
    id: 'maintenance',
    title: 'Maintenance Mode',
    description: 'Enable maintenance mode for system updates',
    enabled: false,
    category: 'features'
  }
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(systemSettings);
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.example.com',
    smtpPort: '587',
    senderEmail: 'noreply@seedtooaks.com'
  });

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting =>
      setting.id === id
        ? { ...setting, enabled: !setting.enabled }
        : setting
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-50 dark:bg-green-900/20">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <FaServer className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">System Status</h3>
                <p className="text-green-600">Operational</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="bg-blue-50 dark:bg-blue-900/20">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/20">
                <FaUsers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Active Users</h3>
                <p className="text-blue-600">1,234</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="bg-purple-50 dark:bg-purple-900/20">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/20">
                <FaDatabase className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Database Size</h3>
                <p className="text-purple-600">2.1 GB</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* System Configuration */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaCog className="text-primary" />
            System Configuration
          </h2>
          <div className="space-y-6">
            {settings.map(setting => (
              <div key={setting.id} className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium">{setting.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {setting.description}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block
                    ${setting.category === 'security' ? 'bg-red-100 text-red-800' :
                      setting.category === 'performance' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'}`}>
                    {setting.category.charAt(0).toUpperCase() + setting.category.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => toggleSetting(setting.id)}
                  className="text-2xl text-primary"
                >
                  {setting.enabled ? <FaToggleOn /> : <FaToggleOff />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Email Configuration */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            Email Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">SMTP Server</label>
              <input
                type="text"
                value={emailSettings.smtpServer}
                onChange={(e) => setEmailSettings({ ...emailSettings, smtpServer: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">SMTP Port</label>
              <input
                type="text"
                value={emailSettings.smtpPort}
                onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Sender Email</label>
              <input
                type="email"
                value={emailSettings.senderEmail}
                onChange={(e) => setEmailSettings({ ...emailSettings, senderEmail: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Test Email Configuration
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-primary" />
            Security Settings
          </h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Password Policy</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="rounded text-primary" />
                  <label>Require minimum 8 characters</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="rounded text-primary" />
                  <label>Require special characters</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked className="rounded text-primary" />
                  <label>Require numbers</label>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Session Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    value="30"
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Analytics & Reporting */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaChartBar className="text-primary" />
            Analytics & Reporting
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-4">Report Generation</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Generate System Report
                </button>
                <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Export Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 