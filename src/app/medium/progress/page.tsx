'use client';

import React from 'react';
import {
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaCalendarCheck,
  FaLightbulb,
  FaMedal,
  FaCertificate,
  FaUserFriends,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface TeamMetric {
  label: string;
  value: string | number;
  change: number;
  icon: JSX.Element;
}

interface TeamAchievement {
  title: string;
  description: string;
  date: string;
  participants: number;
  icon: JSX.Element;
  type: 'milestone' | 'completion' | 'collaboration';
}

interface SkillMetric {
  skill: string;
  teamAverage: number;
  industryAverage: number;
  trend: 'up' | 'down' | 'stable';
}

const teamMetrics: TeamMetric[] = [
  {
    label: 'Team Engagement',
    value: '85%',
    change: 12,
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    label: 'Completion Rate',
    value: '92%',
    change: 8,
    icon: <FaCalendarCheck className="text-green-500" />,
  },
  {
    label: 'Active Members',
    value: '12/15',
    change: 2,
    icon: <FaUserFriends className="text-purple-500" />,
  },
  {
    label: 'Group Sessions',
    value: '24',
    change: 5,
    icon: <FaLightbulb className="text-yellow-500" />,
  },
];

const recentAchievements: TeamAchievement[] = [
  {
    title: 'Communication Excellence',
    description: 'Team completed advanced communication training with exceptional scores',
    date: '2 days ago',
    participants: 12,
    icon: <FaTrophy className="text-yellow-400" />,
    type: 'completion',
  },
  {
    title: 'Collaboration Milestone',
    description: 'Successfully completed 10 group projects with high satisfaction',
    date: '1 week ago',
    participants: 15,
    icon: <FaMedal className="text-blue-500" />,
    type: 'milestone',
  },
  {
    title: 'Perfect Attendance',
    description: 'Full team participation in leadership workshop series',
    date: '2 weeks ago',
    participants: 15,
    icon: <FaCertificate className="text-green-500" />,
    type: 'collaboration',
  },
];

const skillMetrics: SkillMetric[] = [
  {
    skill: 'Team Communication',
    teamAverage: 85,
    industryAverage: 75,
    trend: 'up',
  },
  {
    skill: 'Project Management',
    teamAverage: 78,
    industryAverage: 72,
    trend: 'up',
  },
  {
    skill: 'Problem Solving',
    teamAverage: 82,
    industryAverage: 70,
    trend: 'stable',
  },
];

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Team Progress Overview</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track your team's growth and achievements
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Download Report
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {teamMetrics.map((metric, index) => (
          <Card key={index}>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {metric.icon}
                </div>
                <div className={`text-sm font-medium ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{metric.value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill Progress */}
        <Card className="md:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaChartLine className="text-primary" />
              Team Skill Progress
            </h2>
            <div className="space-y-6">
              {skillMetrics.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Industry Avg: {skill.industryAverage}%
                      </span>
                      {skill.trend === 'up' && <span className="text-green-500">↑</span>}
                      {skill.trend === 'down' && <span className="text-red-500">↓</span>}
                      {skill.trend === 'stable' && <span className="text-gray-500">→</span>}
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <ProgressBar
                      progress={skill.teamAverage}
                      className="h-2"
                    />
                    <div className="absolute top-0 left-0 w-full h-2">
                      <div
                        className="absolute h-full w-1 bg-gray-400 dark:bg-gray-600"
                        style={{ left: `${skill.industryAverage}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Team Average: {skill.teamAverage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaTrophy className="text-primary" />
              Recent Achievements
            </h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3 transform transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>{achievement.date}</span>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-primary" />
                      <span>{achievement.participants} members</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 