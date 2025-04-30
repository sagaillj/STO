'use client';

import React, { useState } from 'react';
import { 
  FaCog, FaUsers, FaDatabase, FaChartBar, FaEnvelope, 
  FaShieldAlt, FaGlobe, FaToggleOn, FaToggleOff, FaServer, FaBell, FaPalette, FaUserCog, FaUsersCog, FaKey 
} from 'react-icons/fa';
import Card from '@/app/components/Card';

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
      <Card
        icon={FaCog}
        title="System Configuration"
        className="mb-6"
      >
        <div className="p-6">
          <div className="space-y-6">
            {settings.map(setting => (
              <div key={setting.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{setting.title}</h3>
                  <p className="text-sm text-text-secondary">{setting.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-secondary">{setting.enabled ? 'Enabled' : 'Disabled'}</span>
                  <button
                    onClick={() => toggleSetting(setting.id)}
                    className="p-2 rounded-lg bg-background-secondary hover:bg-background-hover"
                  >
                    <FaCog className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Email Configuration */}
      <Card
        icon={FaEnvelope}
        title="Email Configuration"
        className="mb-6"
      >
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">SMTP Server</h3>
              <input
                type="text"
                value={emailSettings.smtpServer}
                onChange={(e) => setEmailSettings({ ...emailSettings, smtpServer: e.target.value })}
                className="w-full p-2 rounded-lg bg-background-secondary"
                placeholder="smtp.example.com"
              />
            </div>
            <div>
              <h3 className="font-medium mb-2">Port</h3>
              <input
                type="number"
                value={emailSettings.smtpPort}
                onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                className="w-full p-2 rounded-lg bg-background-secondary"
                placeholder="587"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="font-medium mb-2">Sender Email</h3>
              <input
                type="email"
                value={emailSettings.senderEmail}
                onChange={(e) => setEmailSettings({ ...emailSettings, senderEmail: e.target.value })}
                className="w-full p-2 rounded-lg bg-background-secondary"
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
      <Card
        icon={FaShieldAlt}
        title="Security Settings"
        className="mb-6"
      >
        <div className="p-6">
          <div className="space-y-6">
            <div className="p-4 bg-background-secondary rounded-lg">
              <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-text-secondary mb-4">
                Enable 2FA for additional security
              </p>
              <button className="px-4 py-2 rounded-lg bg-primary text-white">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Analytics & Reporting */}
      <Card
        icon={FaChartBar}
        title="Analytics & Reporting"
        className="mb-6"
      >
        <div className="p-6">
          <div className="space-y-4">
            <div className="p-4 bg-background-secondary rounded-lg">
              <h3 className="font-medium mb-2">Data Retention</h3>
              <p className="text-sm text-text-secondary">
                Configure how long to keep analytics data
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card
        icon={FaBell}
        title="Notification Settings"
        className="mb-6"
      >
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-text-secondary">Receive email updates</p>
              </div>
              <button className="p-2 rounded-lg bg-background-secondary hover:bg-background-hover">
                <FaToggleOn className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </Card>

      <Card
        icon={FaPalette}
        title="Appearance Settings"
        className="mb-6"
      >
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-text-secondary">Enable dark theme</p>
              </div>
              <button className="p-2 rounded-lg bg-background-secondary hover:bg-background-hover">
                <FaToggleOn className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 