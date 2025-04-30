import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ className, children, style, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-xl border border-border shadow-sm',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

export type { CardProps }; 