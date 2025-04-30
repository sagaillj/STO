import { dummyCourse } from '@/lib/dummyData';
import { FaBook } from 'react-icons/fa';
import { EditionBadge } from '@/components/EditionBadge';
import { ModuleCard } from '@/components/ModuleCard';
import { calculateModuleProgress } from '@/lib/utils';

export default function GroupCoursePage() {
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
            Group Training: {dummyCourse.title}
          </h1>
          <EditionBadge edition="Group" />
          <p className="mt-2 text-gray-600">
            Complete this training together as a group
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Group Progress
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
              variant="group"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 