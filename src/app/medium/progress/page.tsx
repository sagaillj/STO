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
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import Card from '@/app/components/Card';
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
          <Card key={index} icon={FaChartLine} title={metric.label}>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-text-secondary">{metric.label}</p>
                  <p className="text-2xl font-semibold mt-1">{metric.value}</p>
                </div>
                <div className={`flex items-center gap-1 ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill Progress */}
        <Card className="md:col-span-2" icon={FaChartLine} title="Team Skill Progress">
          <div className="p-6">
            <div className="space-y-6">
              {skillMetrics.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">{skill.skill}</span>
                    <span className="text-text-primary">{skill.teamAverage}%</span>
                  </div>
                  <ProgressBar progress={skill.teamAverage} />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recent Achievements */}
        <Card icon={FaTrophy} title="Recent Achievements">
          <div className="p-6">
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-background-secondary">
                    <FaMedal className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-text-secondary">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card icon={FaUsers} title="Team Progress" className="mb-6">
        <div className="p-6">
          <div className="space-y-6">
            {teamMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{metric.label}</span>
                  <span className="text-text-primary">{metric.value}</span>
                </div>
                <ProgressBar progress={metric.value as number} />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card icon={FaCertificate} title="Certifications" className="mb-6">
        <div className="p-6">
          <div className="space-y-4">
            {teamMetrics.map((metric, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-background-secondary">
                  {metric.icon}
                </div>
                <div>
                  <p className="font-medium">{metric.label}</p>
                  <p className="text-sm text-text-secondary">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
} 