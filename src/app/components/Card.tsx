import { IconType } from 'react-icons';

export interface CardProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  icon: IconType;
}

export default function Card({ children, title, className = '', icon: Icon }: CardProps) {
  return (
    <div className={`bg-background-secondary p-6 rounded-xl ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-accent-yellow" />
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
} 