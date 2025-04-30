import React from 'react';
import { dummyCourse } from '@/lib/dummyData';
import { FaBook } from 'react-icons/fa';
import { EditionBadge } from '@/components/EditionBadge';
import { ModuleCard } from '@/components/ModuleCard';
import { calculateModuleProgress } from '@/lib/utils';

const CoursePage: React.FC = () => {
  const currentModuleIndex = dummyCourse.modules.findIndex(
    (m) => m.status === 'in_progress'
  );

  const { progress, formattedProgress } = calculateModuleProgress(dummyCourse.modules);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary">
            Personal Training: {dummyCourse.title}
          </h1>
          <EditionBadge edition="Personal" />
          <p className="mt-2 text-gray-600">
            Complete this training at your own pace
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Your Progress
            </span>
            <span className="text-sm font-medium text-primary">
              {formattedProgress} modules
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Module List */}
        <div className="space-y-4">
          {dummyCourse.modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              isCompleted={module.status === 'completed'}
              isCurrent={index === currentModuleIndex}
              variant="personal"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage; 