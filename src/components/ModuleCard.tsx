import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FaCheck, FaLock, FaPlay, FaUsers, FaClock } from 'react-icons/fa';
import { CourseModule } from '@/types';
import ProgressBar from './ProgressBar';
import { cn } from '@/lib/utils';
import { typography, transitions } from '@/styles/tokens';

interface ModuleCardProps {
  module: CourseModule;
  isCompleted: boolean;
  isCurrent: boolean;
  variant?: 'personal' | 'group';
  onContinue?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  module, 
  isCompleted, 
  isCurrent,
  variant = 'personal',
  onContinue 
}) => (
  <Card
    className={cn(
      'overflow-hidden',
      isCurrent && 'border-2 border-primary',
      transitions.base
    )}
  >
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className={cn(typography.h3, 'text-secondary mb-2')}>
            {module.title}
          </h3>
          <p className={cn(typography.body, 'text-gray-600')}>
            {module.description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className={cn('flex items-center', typography.caption)}>
            <FaClock className="mr-2" />
            {module.duration}
          </div>
          {isCompleted ? (
            <div className="text-primary">
              <FaCheck className="w-6 h-6" />
            </div>
          ) : isCurrent ? (
            <Button 
              size="sm" 
              onClick={onContinue}
              className={transitions.base}
            >
              <FaPlay className="mr-2" />
              Continue
            </Button>
          ) : (
            <div className="text-gray-400">
              <FaLock className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>

      {variant === 'group' && module.totalParticipants && (
        <div className={cn('flex items-center justify-between', typography.caption)}>
          <div className="flex items-center gap-2">
            <FaUsers className="text-primary" />
            <span>
              {module.activeParticipants}/{module.totalParticipants} Participating
            </span>
          </div>
          <span>{module.progress}% Complete</span>
        </div>
      )}

      <ProgressBar
        progress={module.progress}
        className="h-2"
        color={variant === 'personal' ? 'bg-accent-yellow' : 'bg-primary'}
        animated
      />
    </div>
  </Card>
); 