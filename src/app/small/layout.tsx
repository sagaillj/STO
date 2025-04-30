'use client';

import React from 'react';
import { FaHome, FaBook, FaChartLine, FaUser, FaCog } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/components/ThemeProvider';

const navItems = [
  {
    icon: FaHome,
    label: 'Dashboard',
    href: '/small/dashboard',
  },
  {
    icon: FaBook,
    label: 'Training',
    href: '/small/training',
  },
  {
    icon: FaChartLine,
    label: 'Progress',
    href: '/small/progress',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/small/profile',
  },
  {
    icon: FaCog,
    label: 'Settings',
    href: '/small/settings',
  },
];

function SmallLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background-primary flex">
      <Sidebar edition="Personal" navItems={navItems} />
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function SmallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider edition="personal">
      <SidebarProvider>
        <SmallLayoutContent>{children}</SmallLayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  );
}