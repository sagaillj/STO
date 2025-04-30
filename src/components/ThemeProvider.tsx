'use client';

import React from 'react';
import { editionThemes } from '@/styles/tokens';
import { EditionType } from '@/types/editions';

type ThemeEdition = Lowercase<EditionType>;

interface ThemeProviderProps {
  edition: ThemeEdition;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ edition, children }) => {
  const theme = editionThemes[edition];

  return (
    <div
      style={{
        '--primary': theme.primary,
        '--background-primary': '#FFFFFF',
        '--background-secondary': '#F8FAFC',
        '--background-tertiary': '#F1F5F9',
        '--background-elevated': '#FFFFFF',
        '--text-primary': '#1E293B',
        '--text-secondary': '#475569',
        '--border-primary': '#E2E8F0',
        '--border-secondary': '#F1F5F9',
        '--accent': theme.accent,
        '--accent-yellow': '#FFB800',
        '--accent-peach': '#FF6347',
        '--accent-green': '#22C55E',
        '--accent-blue': '#3B82F6',
      } as React.CSSProperties}
      className="min-h-screen transition-colors duration-300"
    >
      {children}
    </div>
  );
}; 