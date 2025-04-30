'use client';

import React from 'react';
import { FaChartBar, FaUsers, FaCog, FaBook, FaBuilding } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/components/ThemeProvider';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: FaChartBar },
  { href: '/admin/users', label: 'User Management', icon: FaUsers },
  { href: '/admin/organizations', label: 'Organization Management', icon: FaBuilding },
  { href: '/admin/analytics', label: 'Analytics/Reports', icon: FaBook },
  { href: '/admin/settings', label: 'Settings', icon: FaCog },
];

function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-primary flex">
      <Sidebar edition="Admin" navItems={navItems} />
      <main className={`flex-1 transition-all duration-300 ml-64`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider edition="admin">
      <SidebarProvider>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  );
} 