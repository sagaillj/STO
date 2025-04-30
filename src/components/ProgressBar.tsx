'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { transitions } from '@/styles/tokens';

interface ProgressBarProps {
  progress: number;
  className?: string;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className,
  color = 'bg-primary',
  showLabel = false,
  size = 'md',
  animated = true,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      setCurrentProgress(0);
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCurrentProgress(progress);
    }
  }, [progress, animated]);

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className="w-full">
      <div className={cn('bg-gray-200 rounded-full overflow-hidden', sizeClasses[size], className)}>
        <div
          className={cn(
            'h-full rounded-full',
            color,
            transitions.base
          )}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-gray-600">
          {currentProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar; 