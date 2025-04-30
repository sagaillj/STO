'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { transitions, shadows, radius } from '@/styles/tokens';
import { IconType } from 'react-icons';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isHoverable?: boolean;
  isAnimated?: boolean;
  title?: string;
  subtitle?: string;
  icon?: IconType;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md',
    isHoverable = true,
    isAnimated = true,
    title,
    subtitle,
    icon: Icon,
    hover,
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const variantClasses = {
      default: 'bg-white border border-border-primary shadow-sm',
      outline: 'bg-transparent border border-border-primary',
      ghost: 'bg-background-tertiary',
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-lg',
          
          // Variant styles
          variantClasses[variant],
          
          // Size styles
          sizeClasses[size],
          
          // Hover effects
          (isHoverable || hover) && 'hover:shadow-lg hover:scale-[1.02]',
          
          // Animation
          isAnimated && 'animate-fade-in',
          
          // Transitions
          transitions.base,
          
          className
        )}
        {...props}
      >
        {(title || subtitle || Icon) && (
          <div className="mb-4">
            {Icon && (
              <div className="mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            )}
            {title && (
              <h3 className="text-lg font-semibold text-text-primary">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-text-secondary mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card'; 