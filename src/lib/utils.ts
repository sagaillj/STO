import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CourseModule } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const calculateModuleProgress = (modules: CourseModule[]) => {
  const totalModules = modules.length;
  const completedModules = modules.filter(m => m.status === 'completed').length;
  const progress = (completedModules / totalModules) * 100;

  return {
    totalModules,
    completedModules,
    progress,
    formattedProgress: `${completedModules}/${totalModules}`,
  };
}; 