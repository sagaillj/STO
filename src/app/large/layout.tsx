'use client';

import React from 'react';
import { FaHome, FaBook, FaChartLine, FaUsers, FaBuilding, FaUser, FaCog } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/components/ThemeProvider';

const navItems = [
  {
    icon: FaHome,
    label: 'Dashboard',
    href: '/large/dashboard',
  },
  {
    icon: FaBook,
    label: 'Training',
    href: '/large/training',
  },
  {
    icon: FaChartLine,
    label: 'Progress',
    href: '/large/progress',
  },
  {
    icon: FaUsers,
    label: 'Teams',
    href: '/large/teams',
  },
  {
    icon: FaBuilding,
    label: 'Organization',
    href: '/large/organization',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/large/profile',
  },
  {
    icon: FaCog,
    label: 'Settings',
    href: '/large/settings',
  },
];

function LargeLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background-primary flex">
      <Sidebar edition="Community" navItems={navItems} />
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function LargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider edition="community">
      <SidebarProvider>
        <LargeLayoutContent>{children}</LargeLayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  );
}