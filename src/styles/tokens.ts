export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
} as const;

export const typography = {
  h1: 'text-4xl font-bold tracking-tight',
  h2: 'text-3xl font-semibold tracking-tight',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  body: 'text-base',
  caption: 'text-sm text-gray-500',
} as const;

export const radius = {
  sm: '6px',
  md: '12px',
  lg: '16px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

export const transitions = {
  base: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
} as const;

export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleUp: 'animate-scale-up',
} as const;

export const editionThemes = {
  personal: {
    primary: '#22C55E', // Green
    background: '#F0FDF4',
    accent: '#86EFAC',
  },
  group: {
    primary: '#EAB308', // Yellow
    background: '#FEFCE8',
    accent: '#FEF08A',
  },
  community: {
    primary: '#3B82F6', // Blue
    background: '#EFF6FF',
    accent: '#93C5FD',
  },
  admin: {
    primary: '#4F46E5', // Indigo
    background: '#F8FAFC',
    accent: '#818CF8',
  },
} as const; 