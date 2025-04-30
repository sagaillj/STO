'use client';

import React from 'react';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaBuilding, 
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaLock,
  FaCalendar,
  FaChartBar,
  FaUserGraduate,
  FaArrowUp,
  FaArrowDown,
  FaChartPie,
  FaLightbulb,
  FaStar,
  FaBookReader,
  FaBook,
  FaCertificate,
  FaUserFriends,
  FaTrophy,
  FaPlay,
  FaCheck,
} from 'react-icons/fa';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface EditionStats {
  edition: 'Small' | 'Medium' | 'Large';
  icon: React.ElementType;
  totalUsers: number;
  activeUsers: number;
  completionRate: number;
  averageProgress: number;
  topModule: string;
  trend: number;
}

const editionStats: EditionStats[] = [
  {
    edition: 'Small',
    icon: FaGraduationCap,
    totalUsers: 250,
    activeUsers: 180,
    completionRate: 72,
    averageProgress: 65,
    topModule: 'Introduction to Community Leadership',
    trend: 12
  },
  {
    edition: 'Medium',
    icon: FaUsers,
    totalUsers: 150,
    activeUsers: 120,
    completionRate: 80,
    averageProgress: 75,
    topModule: 'Team Building Fundamentals',
    trend: 15
  },
  {
    edition: 'Large',
    icon: FaBuilding,
    totalUsers: 80,
    activeUsers: 65,
    completionRate: 81,
    averageProgress: 78,
    topModule: 'Organizational Leadership',
    trend: 18
  }
];

interface GlobalMetric {
  label: string;
  value: string;
  change: number;
  icon: React.ElementType;
}

const globalMetrics: GlobalMetric[] = [
  {
    label: 'Total Learners',
    value: '480',
    change: 15,
    icon: FaUsers
  },
  {
    label: 'Completion Rate',
    value: '76%',
    change: 8,
    icon: FaCheckCircle
  },
  {
    label: 'Avg. Time per Module',
    value: '2.5h',
    change: -10,
    icon: FaClock
  },
  {
    label: 'Active Modules',
    value: '12',
    change: 25,
    icon: FaSpinner
  }
];

interface TimeMetric {
  period: string;
  completions: number;
  newEnrollments: number;
}

const timeMetrics: TimeMetric[] = [
  { period: 'Jan', completions: 45, newEnrollments: 62 },
  { period: 'Feb', completions: 52, newEnrollments: 58 },
  { period: 'Mar', completions: 58, newEnrollments: 65 },
  { period: 'Apr', completions: 65, newEnrollments: 72 },
  { period: 'May', completions: 72, newEnrollments: 68 },
  { period: 'Jun', completions: 78, newEnrollments: 75 }
];

interface DetailedStats {
  label: string;
  current: number;
  previous: number;
  trend: number;
}

const detailedStats: DetailedStats[] = [
  {
    label: 'Average Completion Time',
    current: 14,
    previous: 16,
    trend: -12.5
  },
  {
    label: 'User Retention Rate',
    current: 92,
    previous: 88,
    trend: 4.5
  },
  {
    label: 'Module Engagement',
    current: 85,
    previous: 78,
    trend: 9
  },
  {
    label: 'Learning Path Progress',
    current: 68,
    previous: 62,
    trend: 9.7
  }
];

interface ModuleAnalytics {
  moduleName: string;
  completionRate: number;
  avgTimeSpent: number;
  satisfaction: number;
  difficulty: number;
  engagement: number;
}

const moduleAnalytics: ModuleAnalytics[] = [
  {
    moduleName: 'Introduction to Community Leadership',
    completionRate: 85,
    avgTimeSpent: 1.8,
    satisfaction: 4.5,
    difficulty: 2.8,
    engagement: 92
  },
  {
    moduleName: 'Team Building Fundamentals',
    completionRate: 78,
    avgTimeSpent: 2.2,
    satisfaction: 4.7,
    difficulty: 3.2,
    engagement: 88
  },
  {
    moduleName: 'Organizational Leadership',
    completionRate: 72,
    avgTimeSpent: 3.5,
    satisfaction: 4.3,
    difficulty: 4.1,
    engagement: 85
  }
];

interface LearningPathMetrics {
  pathName: string;
  enrollments: number;
  completion: number;
  avgProgress: number;
}

const learningPaths: LearningPathMetrics[] = [
  {
    pathName: 'Community Leader',
    enrollments: 250,
    completion: 72,
    avgProgress: 68
  },
  {
    pathName: 'Team Manager',
    enrollments: 150,
    completion: 80,
    avgProgress: 75
  },
  {
    pathName: 'Organization Director',
    enrollments: 80,
    completion: 85,
    avgProgress: 82
  }
];

export default function AdminTrainingPage() {
  const [selectedEdition, setSelectedEdition] = React.useState<EditionStats['edition'] | null>(null);
  const [selectedTimeRange, setSelectedTimeRange] = React.useState('6M');
  const [showDetails, setShowDetails] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<'overview' | 'modules' | 'paths'>('overview');

  // Calculate max values for chart scaling
  const maxCompletions = Math.max(...timeMetrics.map(m => m.completions));
  const maxEnrollments = Math.max(...timeMetrics.map(m => m.newEnrollments));
  const maxValue = Math.max(maxCompletions, maxEnrollments);

  return (
    <div className="space-y-8">
      <div className="transform transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Training Overview</h1>
        <p className="text-text-secondary">Monitor and analyze training progress across all editions</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-2">
        {['1M', '3M', '6M', '1Y'].map((range) => (
          <button
            key={range}
            onClick={() => setSelectedTimeRange(range)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedTimeRange === range
                ? 'bg-primary text-text-primary'
                : 'bg-background-secondary text-text-secondary hover:bg-background-hover'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-border-primary">
        {[
          { id: 'overview', label: 'Overview', icon: FaChartLine },
          { id: 'modules', label: 'Module Analytics', icon: FaBookReader },
          { id: 'paths', label: 'Learning Paths', icon: FaChartPie }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {selectedTab === 'overview' && (
        <>
          {/* Global Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  icon={Icon}
                  title={metric.label}
                  className="p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-background-secondary text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">{metric.label}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-text-primary">
                          {metric.value}
                        </span>
                        <span className={`text-xs ${
                          metric.change > 0 ? 'text-green-400' : 'text-red-400'
                        } animate-pulse`}>
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Trend Chart */}
          <Card
            icon={FaChartLine}
            title="Training Progress Trends"
            className="p-6"
          >
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-text-primary">Training Progress Trends</h3>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            <div className="h-64 relative">
              {/* Chart Grid */}
              <div className="absolute inset-0 grid grid-cols-6 gap-0.5">
                {timeMetrics.map((_, index) => (
                  <div key={index} className="border-r border-border-primary h-full opacity-10" />
                ))}
              </div>
              
              {/* Completions Line */}
              <div className="absolute inset-0 flex items-end">
                <div className="relative w-full h-full flex items-end">
                  {timeMetrics.map((metric, index) => (
                    <div
                      key={`completion-${index}`}
                      className="flex-1 group relative"
                      style={{ height: '100%' }}
                    >
                      <div
                        className="absolute bottom-0 left-1/2 w-2 bg-primary rounded-t transition-all duration-500 hover:w-3 hover:bg-opacity-80"
                        style={{
                          height: `${(metric.completions / maxValue) * 100}%`,
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background-secondary px-2 py-1 rounded text-xs whitespace-nowrap">
                          {metric.completions} completions
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enrollments Line */}
              <div className="absolute inset-0 flex items-end">
                <div className="relative w-full h-full flex items-end">
                  {timeMetrics.map((metric, index) => (
                    <div
                      key={`enrollment-${index}`}
                      className="flex-1 group relative"
                      style={{ height: '100%' }}
                    >
                      <div
                        className="absolute bottom-0 left-1/2 w-2 bg-accent-peach rounded-t transition-all duration-500 hover:w-3 hover:bg-opacity-80"
                        style={{
                          height: `${(metric.newEnrollments / maxValue) * 100}%`,
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background-secondary px-2 py-1 rounded text-xs whitespace-nowrap">
                          {metric.newEnrollments} enrollments
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* X-axis Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 py-4">
                {timeMetrics.map((metric, index) => (
                  <div key={index} className="text-text-secondary text-sm">
                    {metric.period}
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Legend */}
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded" />
                <span className="text-sm text-text-secondary">Completions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-peach rounded" />
                <span className="text-sm text-text-secondary">New Enrollments</span>
              </div>
            </div>
          </Card>

          {/* Detailed Stats */}
          {showDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {detailedStats.map((stat, index) => (
                <Card
                  key={index}
                  icon={FaChartLine}
                  title={stat.label}
                  className="p-4 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-sm text-text-secondary mb-2">{stat.label}</h4>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-semibold">{stat.current}%</span>
                    <span className={`text-sm ${stat.trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend >= 0 ? '+' : ''}{stat.trend}%
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Edition Stats */}
          <div className="grid grid-cols-1 gap-6">
            {editionStats.map((edition) => {
              const Icon = edition.icon;
              const isSelected = selectedEdition === edition.edition;

              return (
                <Card
                  key={edition.edition}
                  icon={Icon}
                  title={`${edition.edition} Edition`}
                  className={`transition-all duration-300 ${
                    isSelected ? 'shadow-xl ring-2 ring-primary' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedEdition(isSelected ? null : edition.edition)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-lg bg-background-secondary text-primary transition-all duration-300 ${
                          isSelected ? 'scale-110' : ''
                        }`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary">
                            {edition.edition} Edition
                          </h3>
                          <p className="text-text-secondary">
                            {edition.activeUsers} active users
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-text-primary">
                          {edition.completionRate}%
                        </div>
                        <div className="text-sm text-text-secondary">
                          Completion Rate
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-text-secondary">
                              Average Progress
                            </span>
                            <span className="text-sm font-medium text-text-primary">
                              {edition.averageProgress}%
                            </span>
                          </div>
                          <div className="relative overflow-hidden rounded-full">
                            <ProgressBar
                              progress={edition.averageProgress}
                              size="sm"
                              color="primary"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-text-secondary mb-1">User Engagement</p>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-semibold text-text-primary">
                                {Math.round((edition.activeUsers / edition.totalUsers) * 100)}%
                              </span>
                              <span className="text-xs text-green-400 animate-pulse">
                                +{edition.trend}%
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-text-secondary mb-1">Total Users</p>
                            <span className="text-lg font-semibold text-text-primary">
                              {edition.totalUsers}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm text-text-secondary mb-2">Top Performing Module</h4>
                          <p className="text-text-primary font-medium">{edition.topModule}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300">
                            <div className="text-sm text-text-secondary mb-1">Active</div>
                            <div className="text-lg font-semibold text-text-primary">
                              {edition.activeUsers}
                            </div>
                          </div>
                          <div className="p-3 rounded-lg bg-background-secondary hover:bg-background-hover transition-colors duration-300">
                            <div className="text-sm text-text-secondary mb-1">Completed</div>
                            <div className="text-lg font-semibold text-text-primary">
                              {Math.round(edition.totalUsers * (edition.completionRate / 100))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {selectedTab === 'modules' && (
        <div className="space-y-6">
          <Card
            icon={FaBook}
            title="Module Performance Analysis"
            className="p-6"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">Module Performance Analysis</h3>
            <div className="space-y-8">
              {moduleAnalytics.map((module, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-text-primary font-medium">{module.moduleName}</h4>
                      <p className="text-sm text-text-secondary mt-1">
                        Avg. Time: {module.avgTimeSpent}h | Satisfaction: {module.satisfaction}/5
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-text-secondary">Completion</div>
                        <div className="text-lg font-semibold text-text-primary">
                          {module.completionRate}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-text-secondary">Engagement</div>
                        <div className="text-lg font-semibold text-text-primary">
                          {module.engagement}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Module Metrics Visualization */}
                  <div className="grid grid-cols-5 gap-2">
                    {['Completion', 'Time Spent', 'Satisfaction', 'Difficulty', 'Engagement'].map((metric, i) => {
                      const value = [
                        module.completionRate,
                        (module.avgTimeSpent / 4) * 100, // Normalize to percentage
                        (module.satisfaction / 5) * 100,
                        (module.difficulty / 5) * 100,
                        module.engagement
                      ][i];
                      
                      return (
                        <div key={metric} className="space-y-2">
                          <div className="h-24 bg-background-secondary rounded-lg relative overflow-hidden">
                            <div
                              className="absolute bottom-0 w-full bg-primary transition-all duration-500 hover:opacity-80"
                              style={{ height: `${value}%` }}
                            />
                          </div>
                          <div className="text-xs text-text-secondary text-center">{metric}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {selectedTab === 'paths' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Paths Overview */}
            <Card
              icon={FaChartPie}
              title="Learning Paths Distribution"
              className="p-6"
            >
              <div className="relative h-64">
                {/* Pie Chart Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {learningPaths.map((path, index) => {
                      const total = learningPaths.reduce((sum, p) => sum + p.enrollments, 0);
                      const percentage = (path.enrollments / total) * 100;
                      const rotate = index * (360 / learningPaths.length);
                      
                      return (
                        <div
                          key={path.pathName}
                          className="absolute inset-0 transition-all duration-500 hover:scale-105"
                          style={{
                            clipPath: `conic-gradient(from ${rotate}deg, currentColor ${percentage}%, transparent ${percentage}%)`,
                            color: index === 0 ? 'var(--primary)' : index === 1 ? 'var(--accent-peach)' : 'var(--accent-green)'
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
                  {learningPaths.map((path, index) => (
                    <div key={path.pathName} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: index === 0 ? 'var(--primary)' : index === 1 ? 'var(--accent-peach)' : 'var(--accent-green)'
                        }}
                      />
                      <span className="text-sm text-text-secondary">{path.pathName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Path Performance Metrics */}
            <Card
              icon={FaChartLine}
              title="Path Performance"
              className="p-6"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6">Path Performance</h3>
              <div className="space-y-6">
                {learningPaths.map((path, index) => (
                  <div key={path.pathName} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-text-primary font-medium">{path.pathName}</h4>
                        <p className="text-sm text-text-secondary">
                          {path.enrollments} enrollments
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-text-primary">
                          {path.completion}%
                        </div>
                        <div className="text-sm text-text-secondary">
                          completion rate
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Average Progress</span>
                        <span className="text-text-primary">{path.avgProgress}%</span>
                      </div>
                      <div className="relative overflow-hidden rounded-full">
                        <ProgressBar
                          progress={path.avgProgress}
                          size="sm"
                          color={index === 0 ? 'primary' : index === 1 ? 'peach' : 'green'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
} 