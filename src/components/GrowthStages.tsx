import { FC } from 'react';
import { FaSeedling, FaLeaf, FaTree } from 'react-icons/fa';
import { GiPineTree, GiOak } from 'react-icons/gi';

export type GrowthStage = 'seed' | 'sapling' | 'small-tree' | 'large-tree' | 'oak-tree';

interface GrowthStagesProps {
  currentStage: GrowthStage;
  className?: string;
}

const stages = [
  { id: 'seed', label: 'Seed', icon: FaSeedling, color: 'text-accent-yellow' },
  { id: 'sapling', label: 'Sapling', icon: FaLeaf, color: 'text-accent-peach' },
  { id: 'small-tree', label: 'Small Tree', icon: FaTree, color: 'text-accent-green' },
  { id: 'large-tree', label: 'Large Tree', icon: GiPineTree, color: 'text-accent-green' },
  { id: 'oak-tree', label: 'Oak Tree', icon: GiOak, color: 'text-accent-green' },
];

const GrowthStages: FC<GrowthStagesProps> = ({ currentStage, className = '' }) => {
  const currentIndex = stages.findIndex(stage => stage.id === currentStage);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-background-elevated -translate-y-1/2">
          <div
            className="h-full bg-accent-green transition-all duration-500 ease-out"
            style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
          />
        </div>

        {/* Stages */}
        <div className="relative z-10 flex justify-between">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index <= currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <div
                key={stage.id}
                className="flex flex-col items-center"
                style={{ width: '20%' }}
              >
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300 transform
                    ${isActive ? `${stage.color} bg-background-elevated` : 'text-text-secondary bg-background-secondary'}
                    ${isCurrent ? 'scale-110 ring-2 ring-accent-green ring-offset-2 ring-offset-background-primary' : ''}
                  `}
                >
                  <Icon className={`w-6 h-6 ${isCurrent ? 'animate-pulse' : ''}`} />
                </div>
                <div className="mt-2 text-center">
                  <span
                    className={`
                      text-sm font-medium block
                      ${isActive ? 'text-text-primary' : 'text-text-secondary'}
                    `}
                  >
                    {stage.label}
                  </span>
                  {isCurrent && (
                    <span className="text-xs text-accent-green mt-1 block">
                      Current Stage
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowthStages; 