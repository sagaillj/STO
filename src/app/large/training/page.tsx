'use client';

import React from 'react';
import { 
  FaBook, 
  FaLock, 
  FaCheckCircle, 
  FaPlay, 
  FaClock, 
  FaUsers, 
  FaUserFriends,
  FaBuilding,
  FaChartLine
} from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Department {
  id: number;
  name: string;
  membersCompleted: number;
  totalMembers: number;
}

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'locked';
  lessons: number;
  completedLessons: number;
  organizationProgress: {
    departments: Department[];
    totalCompleted: number;
    total: number;
  };
  impact: {
    metric: string;
    value: string;
    trend: number;
  };
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Organizational Leadership',
    description: 'Develop strategic leadership skills for managing large organizations.',
    duration: '8 hours',
    progress: 100,
    status: 'completed',
    lessons: 10,
    completedLessons: 10,
    organizationProgress: {
      departments: [
        { id: 1, name: 'Executive', membersCompleted: 5, totalMembers: 5 },
        { id: 2, name: 'Management', membersCompleted: 15, totalMembers: 15 },
        { id: 3, name: 'Operations', membersCompleted: 25, totalMembers: 25 }
      ],
      totalCompleted: 45,
      total: 45
    },
    impact: {
      metric: 'Leadership Effectiveness',
      value: '92%',
      trend: 15
    }
  },
  {
    id: 2,
    title: 'Change Management',
    description: 'Master strategies for implementing organizational change effectively.',
    duration: '10 hours',
    progress: 65,
    status: 'in-progress',
    lessons: 12,
    completedLessons: 8,
    organizationProgress: {
      departments: [
        { id: 1, name: 'Executive', membersCompleted: 4, totalMembers: 5 },
        { id: 2, name: 'Management', membersCompleted: 12, totalMembers: 15 },
        { id: 3, name: 'Operations', membersCompleted: 18, totalMembers: 25 }
      ],
      totalCompleted: 34,
      total: 45
    },
    impact: {
      metric: 'Change Adoption Rate',
      value: '78%',
      trend: 12
    }
  },
  {
    id: 3,
    title: 'Strategic Planning',
    description: 'Learn to develop and execute organizational strategies.',
    duration: '12 hours',
    progress: 0,
    status: 'locked',
    lessons: 15,
    completedLessons: 0,
    organizationProgress: {
      departments: [
        { id: 1, name: 'Executive', membersCompleted: 0, totalMembers: 5 },
        { id: 2, name: 'Management', membersCompleted: 0, totalMembers: 15 },
        { id: 3, name: 'Operations', membersCompleted: 0, totalMembers: 25 }
      ],
      totalCompleted: 0,
      total: 45
    },
    impact: {
      metric: 'Strategy Implementation',
      value: '0%',
      trend: 0
    }
  },
  {
    id: 4,
    title: 'Organizational Culture',
    description: 'Build and maintain a strong organizational culture.',
    duration: '8 hours',
    progress: 0,
    status: 'locked',
    lessons: 10,
    completedLessons: 0,
    organizationProgress: {
      departments: [
        { id: 1, name: 'Executive', membersCompleted: 0, totalMembers: 5 },
        { id: 2, name: 'Management', membersCompleted: 0, totalMembers: 15 },
        { id: 3, name: 'Operations', membersCompleted: 0, totalMembers: 25 }
      ],
      totalCompleted: 0,
      total: 45
    },
    impact: {
      metric: 'Employee Engagement',
      value: '0%',
      trend: 0
    }
  }
];

const getStatusIcon = (status: Module['status']) => {
  switch (status) {
    case 'completed':
      return FaCheckCircle;
    case 'in-progress':
      return FaPlay;
    case 'locked':
      return FaLock;
  }
};

const getStatusColor = (status: Module['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-400';
    case 'in-progress':
      return 'text-yellow-400';
    case 'locked':
      return 'text-gray-400';
  }
};

export default function TrainingPage() {
  const [hoveredModule, setHoveredModule] = React.useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = React.useState<number[]>([]);

  const toggleDetails = (moduleId: number) => {
    setExpandedDetails(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="space-y-8">
      <div className="transform transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Organizational Training</h1>
        <p className="text-text-secondary">Transform your organization through strategic learning</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {modules.map((module) => {
          const StatusIcon = getStatusIcon(module.status);
          const statusColor = getStatusColor(module.status);
          const orgProgress = Math.round((module.organizationProgress.totalCompleted / module.organizationProgress.total) * 100);
          const isExpanded = expandedDetails.includes(module.id);

          return (
            <Card
              key={module.id}
              icon={FaBook}
              title={module.title}
              className={`transition-all duration-300 ${
                hoveredModule === module.id 
                  ? 'shadow-xl transform -translate-y-1' 
                  : 'hover:shadow-lg'
              } ${
                module.status !== 'locked' ? 'cursor-pointer' : 'opacity-75'
              }`}
              onMouseEnter={() => setHoveredModule(module.id)}
              onMouseLeave={() => setHoveredModule(null)}
              onClick={() => module.status !== 'locked' && toggleDetails(module.id)}
            >
              <div className="flex items-start gap-4 p-4">
                <div className={`p-4 rounded-lg bg-background-secondary ${statusColor} transition-all duration-300 ${
                  hoveredModule === module.id ? 'scale-110' : ''
                }`}>
                  <StatusIcon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {module.title}
                      </h3>
                      <span className="text-sm text-text-secondary flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                        <FaClock className="w-4 h-4" />
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary mt-1 transition-all duration-300 group-hover:text-text-primary">
                      {module.description}
                    </p>
                  </div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${
                    isExpanded ? 'opacity-100' : 'opacity-90'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-text-secondary">
                            Course Progress: {module.completedLessons} of {module.lessons} lessons
                          </span>
                          <span className="text-sm font-medium text-text-primary">
                            {module.progress}%
                          </span>
                        </div>
                        <div className="relative overflow-hidden rounded-full">
                          <ProgressBar
                            progress={module.progress}
                            size="sm"
                            color={
                              module.status === 'completed'
                                ? 'green'
                                : module.status === 'in-progress'
                                ? 'yellow'
                                : 'gray'
                            }
                          />
                          {hoveredModule === module.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-text-secondary flex items-center gap-2">
                            <FaBuilding className="w-4 h-4" />
                            Organization Progress
                          </span>
                          <span className="text-sm font-medium text-text-primary">
                            {orgProgress}%
                          </span>
                        </div>
                        <div className="relative overflow-hidden rounded-full">
                          <ProgressBar
                            progress={orgProgress}
                            size="sm"
                            color="peach"
                          />
                          {hoveredModule === module.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary flex items-center gap-2">
                          <FaChartLine className="w-4 h-4" />
                          {module.impact.metric}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text-primary">
                            {module.impact.value}
                          </span>
                          {module.impact.trend > 0 && (
                            <span className="text-xs text-green-400 animate-pulse">
                              +{module.impact.trend}%
                            </span>
                          )}
                        </div>
                      </div>

                      <div className={`space-y-2 transition-all duration-500 ${
                        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-[100px] opacity-90'
                      }`}>
                        <span className="text-sm text-text-secondary">Department Progress</span>
                        {module.organizationProgress.departments.map((dept) => (
                          <div 
                            key={dept.id} 
                            className="flex items-center justify-between text-sm transition-all duration-300 hover:bg-background-secondary rounded-lg p-2"
                          >
                            <span className="text-text-secondary">{dept.name}</span>
                            <span className="text-text-primary">
                              {dept.membersCompleted}/{dept.totalMembers}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {module.status === 'in-progress' && (
                    <button 
                      className="mt-4 w-full bg-background-secondary hover:bg-background-hover text-text-primary py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <FaPlay className="w-4 h-4" />
                      Continue Module
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={FaUsers}
          title="Team Progress"
          className="md:col-span-2"
        >
          {/* Team progress content */}
        </Card>
      </div>
    </div>
  );
} 