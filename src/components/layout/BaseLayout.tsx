'use client';

import React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <main className="flex-grow">{children}</main>
    </div>
  );
}; 