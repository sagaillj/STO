'use client';

import Link from 'next/link';
import { User } from '@/types';
import { classNames } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface NavbarProps {
  user: User;
  navItems: NavItem[];
  profileHref?: string;
  editionLabel?: string;
}

export function Navbar({ user, navItems, profileHref, editionLabel }: NavbarProps) {
  return (
    <nav className="w-64 h-screen bg-background-secondary border-r border-border-primary flex flex-col">
      {/* Logo and Edition Label */}
      <div className="p-4 border-b border-border-primary">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-text-primary">Seed to Oaks</span>
        </Link>
        {editionLabel && (
          <div className="mt-2 text-sm text-text-secondary">{editionLabel}</div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-8 overflow-y-auto">
        <div className="space-y-2 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-3 text-text-secondary hover:text-text-primary rounded-lg hover:bg-background-primary transition-colors group"
              >
                <Icon className="w-6 h-6 mr-3" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-border-primary">
        {profileHref ? (
          <Link
            href={profileHref}
            className="flex items-center space-x-3 cursor-pointer group hover:bg-background-primary rounded-lg p-2 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-n360-yellow text-text-primary flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-text-primary group-hover:underline">
                {user.name}
              </div>
              <div className="text-sm text-text-secondary">{user.role}</div>
            </div>
          </Link>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-n360-yellow text-text-primary flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-text-primary">{user.name}</div>
              <div className="text-sm text-text-secondary">{user.role}</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 