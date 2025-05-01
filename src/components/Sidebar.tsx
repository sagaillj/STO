import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaChevronLeft, FaChevronRight, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { EditionBadge } from './EditionBadge';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { transitions, typography } from '@/styles/tokens';
import { EditionType } from '@/types/editions';
import { IconType } from 'react-icons';

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  children?: NavItem[];
}

interface SidebarProps {
  edition: EditionType;
  navItems: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ edition, navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  // Filter out the Profile nav item as we'll handle it in the bottom section
  const filteredNavItems = navItems.filter(item => !item.href.endsWith('/profile'));
  const profileItem = navItems.find(item => item.href.endsWith('/profile'));

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={cn(
          'md:hidden fixed top-4 left-4 z-50 p-2 rounded-md',
          'bg-white shadow-md',
          transitions.base
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={cn(
          'h-screen fixed left-0 top-0 bg-background-secondary border-r border-border-primary flex flex-col z-50 transition-all duration-300',
          isCollapsed ? 'w-20' : 'w-64',
          'md:translate-x-0',
          !isOpen && 'md:translate-x-0 -translate-x-full'
        )}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center pt-8 pb-6">
          <Link href="/">
            <Image
              src={isCollapsed ? "/seed_to_oaks_logo_no_words.png" : "/seed_to_oaks_logo_stacked.png"}
              alt="Seed to Oaks"
              width={160}
              height={160}
              className={`transition-all duration-300 ${isCollapsed ? 'h-12 w-12' : 'h-32 w-auto'} object-contain hover:opacity-80`}
            />
          </Link>
          {!isCollapsed && <EditionBadge edition={edition} className="mt-4" />}
        </div>

        {/* Navigation */}
        <nav className={`flex-1 ${isCollapsed ? 'px-2' : 'px-4'} mt-6`}>
          <ul className="space-y-2">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-lg
                      transition-all duration-200 group
                      ${isActive 
                        ? 'bg-background-tertiary text-text-primary' 
                        : 'text-text-secondary hover:bg-background-tertiary/50 hover:text-text-primary'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={`w-5 h-5 ${!isCollapsed && 'mr-3'}`} />
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-background-elevated rounded-md text-text-primary text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section - User Profile */}
        <div className="border-t border-border-primary mt-auto">
          {profileItem && (
            <Link
              href={profileItem.href}
              className={`
                flex items-center p-4 hover:bg-background-tertiary/50 transition-colors
                ${isCollapsed ? 'justify-center' : ''}
              `}
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center text-text-secondary">
                <FaUser className="w-4 h-4" />
              </div>
              {!isCollapsed && (
                <div className="ml-3">
                  <div className="text-sm font-medium text-text-primary">John Doe</div>
                  <div className="text-xs text-text-secondary">View Profile</div>
                </div>
              )}
            </Link>
          )}
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-background-secondary border border-border-primary rounded-r-lg flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
        >
          {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
        </button>
      </aside>
    </>
  );
};

export default Sidebar; 