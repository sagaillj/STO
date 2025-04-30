import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { Sidebar } from './Sidebar';
import { FaHome, FaBook, FaUsers, FaCog } from 'react-icons/fa';
import { EditionType, getEditionDisplay } from '@/types/editions';

interface LayoutProps {
  children: React.ReactNode;
  edition: Lowercase<EditionType>;
}

const navigationItems = {
  personal: [
    { href: '/small', label: 'Home', icon: FaHome },
    { href: '/small/course', label: 'My Course', icon: FaBook },
  ],
  group: [
    { href: '/medium', label: 'Home', icon: FaHome },
    { href: '/medium/course', label: 'Group Course', icon: FaBook },
    { href: '/medium/training', label: 'Training', icon: FaUsers },
  ],
  community: [
    { href: '/large', label: 'Home', icon: FaHome },
    { href: '/large/course', label: 'Community Course', icon: FaBook },
    { href: '/large/members', label: 'Members', icon: FaUsers },
  ],
  admin: [
    { href: '/admin', label: 'Dashboard', icon: FaHome },
    { href: '/admin/courses', label: 'Courses', icon: FaBook },
    { href: '/admin/users', label: 'Users', icon: FaUsers },
    { href: '/admin/settings', label: 'Settings', icon: FaCog },
  ],
};

export const Layout: React.FC<LayoutProps> = ({ children, edition }) => {
  // For admin, we'll use the community theme but with admin navigation
  const themeEdition = edition === 'admin' ? 'community' : edition;
  const displayEdition = getEditionDisplay(edition);
  
  // Don't render Sidebar for admin edition
  if (edition === 'admin') {
    return (
      <ThemeProvider edition={themeEdition}>
        <div className="min-h-screen bg-background">
          <main className="p-6">
            {children}
          </main>
        </div>
      </ThemeProvider>
    );
  }
  
  return (
    <ThemeProvider edition={themeEdition}>
      <div className="min-h-screen bg-background">
        <Sidebar
          navItems={navigationItems[edition]}
          edition={displayEdition as Exclude<EditionType, 'Admin'>}
        />
        <main className="md:ml-64 p-6">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}; 