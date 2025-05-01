'use client';

import React, { useState } from 'react';
import { FaTrophy, FaChartLine, FaCheckCircle, FaStopwatch, FaMedal, FaLightbulb, FaStar, FaLock, FaCheck, FaMapMarkerAlt, FaSeedling, FaTree, FaUsers, FaCalendarCheck, FaCertificate, FaUserFriends } from 'react-icons/fa';
import { GiOakLeaf, GiTreeBranch, GiGrowth } from 'react-icons/gi';
import { IconType } from 'react-icons';
import Card from '@/app/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface TeamMember {
  name: string;
  role: string;
  progress: number;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface Skill {
  skill: string;
  level: number;
  progress: number;
  recentGain: number;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: IconType;
  color: string;
}

interface LearningLevel {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  position: {
    x: number;
    y: number;
  };
  connections: number[]; // IDs of connected levels
  stars: number;
  totalStars: number;
}

interface TreeStage {
  title: string;
  description: string;
  icon: IconType;
  color: string;
  isCompleted: boolean;
  size: string;
}

const teamProgress: TeamMember[] = [
  { name: 'John Doe', role: 'Team Lead', progress: 85 },
  { name: 'Jane Smith', role: 'Developer', progress: 65 },
  { name: 'Mike Johnson', role: 'Designer', progress: 75 },
];

const certifications: Certification[] = [
  { name: 'Advanced Leadership', issuer: 'Leadership Academy', date: '2023-12-15' },
  { name: 'Project Management', issuer: 'PMI', date: '2023-11-20' },
  { name: 'Agile Certification', issuer: 'Scrum Alliance', date: '2023-10-05' },
];

const skillProgress: Skill[] = [
  { skill: 'Personal Development', level: 3, progress: 75, recentGain: 15 },
  { skill: 'Communication', level: 2, progress: 45, recentGain: 10 },
  { skill: 'Leadership', level: 4, progress: 90, recentGain: 5 },
];

const recentAchievements: Achievement[] = [
  {
    title: 'Leadership Milestone',
    description: 'Completed advanced leadership training',
    date: '2023-12-15',
    icon: FaTrophy,
    color: 'text-primary',
  },
  {
    title: 'Team Collaboration',
    description: 'Led successful team project',
    date: '2023-11-20',
    icon: FaUsers,
    color: 'text-primary',
  },
  {
    title: 'Skill Mastery',
    description: 'Achieved expert level in communication',
    date: '2023-10-05',
    icon: FaStar,
    color: 'text-primary',
  },
];

const weeklyStats = {
  xpGained: 120,
  hoursSpent: 8.5,
  tasksCompleted: 12,
  streakDays: 5,
};

const learningLevels: LearningLevel[] = [
  {
    id: 1,
    title: 'Getting Started',
    description: 'Begin your learning journey',
    status: 'completed',
    position: { x: 20, y: 50 },
    connections: [2],
    stars: 3,
    totalStars: 3
  },
  {
    id: 2,
    title: 'Basic Concepts',
    description: 'Master the fundamentals',
    status: 'completed',
    position: { x: 40, y: 50 },
    connections: [3, 4],
    stars: 2,
    totalStars: 3
  },
  {
    id: 3,
    title: 'Advanced Topics',
    description: 'Dive deeper into complex subjects',
    status: 'current',
    position: { x: 60, y: 65 },
    connections: [5],
    stars: 1,
    totalStars: 3
  },
  {
    id: 4,
    title: 'Practical Skills',
    description: 'Apply your knowledge',
    status: 'locked',
    position: { x: 60, y: 35 },
    connections: [5],
    stars: 0,
    totalStars: 3
  },
  {
    id: 5,
    title: 'Final Challenge',
    description: 'Put everything together',
    status: 'locked',
    position: { x: 80, y: 50 },
    connections: [],
    stars: 0,
    totalStars: 3
  }
];

const treeStages = {
  seed: {
    title: 'Seed',
    icon: FaSeedling,
    color: 'text-green-300',
    size: 'w-8 h-8',
    description: 'A tiny seed, full of potential',
    isCompleted: false,
  },
  sprout: {
    title: 'Sprout',
    icon: GiGrowth,
    color: 'text-green-400',
    size: 'w-10 h-10',
    description: 'Breaking through the soil',
    isCompleted: false,
  },
  sapling: {
    title: 'Sapling',
    icon: GiTreeBranch,
    color: 'text-green-500',
    size: 'w-12 h-12',
    description: 'Growing stronger each day',
    isCompleted: false,
  },
  youngTree: {
    title: 'Young Tree',
    icon: GiOakLeaf,
    color: 'text-green-600',
    size: 'w-14 h-14',
    description: 'Developing sturdy branches',
    isCompleted: false,
  },
  matureTree: {
    title: 'Mature Tree',
    icon: FaTree,
    color: 'text-green-700',
    size: 'w-16 h-16',
    description: 'A mighty oak tree',
    isCompleted: false,
  }
};

export default function ProgressPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [showTreeStages, setShowTreeStages] = useState(false);

  const getStatusColor = (status: LearningLevel['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'current': return 'bg-primary animate-pulse';
      case 'locked': return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: LearningLevel['status']) => {
    switch (status) {
      case 'completed': return <FaCheck className="w-6 h-6 text-white" />;
      case 'current': return <FaMapMarkerAlt className="w-6 h-6 text-white" />;
      case 'locked': return <FaLock className="w-6 h-6 text-white" />;
    }
  };

  const getTreeStage = (level: LearningLevel) => {
    if (level.status === 'locked') return 'seed';
    if (level.status === 'completed') {
      return level.stars === 3 ? 'matureTree' : 
             level.stars === 2 ? 'youngTree' : 'sapling';
    }
    return 'sprout';
  };

  const handleLevelClick = (level: LearningLevel) => {
    if (level.status !== 'locked') {
      setSelectedLevel(selectedLevel === level.id ? null : level.id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Growth Journey</h1>
        <div className="flex items-center space-x-2">
          <FaTrophy className="text-yellow-400" />
          <span className="text-sm font-medium">Level 3 Achiever</span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={FaTrophy}
          title="Achievements"
          className="col-span-full md:col-span-2"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement: Achievement, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-background-secondary transform transition-all hover:scale-[1.02]"
                >
                  <div className="p-2 rounded-full bg-background-primary">
                    {React.createElement(achievement.icon, { className: 'w-5 h-5 text-primary' })}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-text-secondary">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-text-secondary">{achievement.date}</span>
                  </div>
                  <FaCheckCircle className="text-primary" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card
          icon={FaChartLine}
          title="Performance Metrics"
          className="md:col-span-1"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Skill Progress</h2>
            <div className="space-y-6">
              {skillProgress.map((skill: Skill) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-text-secondary">
                      Level {skill.level}
                    </span>
                  </div>
                  <ProgressBar
                    progress={skill.progress}
                    className="h-2"
                  />
                  <div className="text-sm text-primary">
                    +{skill.recentGain}% this week
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card
          icon={FaUsers}
          title="Team Progress"
          className="md:col-span-1"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Team Progress</h2>
            <div className="space-y-4">
              {teamProgress.map((member: TeamMember, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-background-secondary"
                >
                  <div className="p-2 rounded-full bg-background-primary">
                    <FaUserFriends className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {member.role}
                    </p>
                    <div className="mt-2">
                      <ProgressBar
                        progress={member.progress}
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card
          icon={FaCertificate}
          title="Certifications"
          className="md:col-span-1"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert: Certification, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-background-secondary"
                >
                  <div className="p-2 rounded-full bg-background-primary">
                    <FaCertificate className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {cert.issuer}
                    </p>
                    <span className="text-xs text-text-secondary">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <Card
        icon={FaTree}
        title="Learning Journey"
        className="p-6 relative overflow-hidden"
        style={{ minHeight: '600px', background: 'linear-gradient(180deg, #5B9BD5 0%, #83CEE7 100%)' }}
      >
        {/* Tree Stages Guide Button */}
        <button
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
          onClick={() => setShowTreeStages(!showTreeStages)}
        >
          <FaTree className="w-6 h-6 text-green-600" />
        </button>

        {/* Tree Stages Guide Modal */}
        {showTreeStages && (
          <div className="absolute top-16 right-4 bg-white/95 p-4 rounded-lg shadow-lg border-2 border-[#8B4513] z-20 w-64">
            <h3 className="text-lg font-semibold mb-4">Growth Stages</h3>
            <div className="space-y-4">
              {Object.entries(treeStages).map(([stage, data]) => (
                <div key={stage} className="flex items-center gap-3">
                  <data.icon className={`${data.color} ${data.size}`} />
                  <div>
                    <div className="font-medium capitalize">{stage}</div>
                    <div className="text-xs text-gray-600">{data.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Multiple hill layers for depth - more organized */}
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#2E7D32] to-[#4CAF50] opacity-80" />
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#388E3C] to-[#66BB6A] opacity-90" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#43A047] to-transparent opacity-95" />
          
          {/* Background Hills - more strategic placement */}
          <div className="absolute bottom-0 left-[15%] w-48 h-48 rounded-full bg-[#2E7D32] blur-sm transform translate-y-24" />
          <div className="absolute bottom-0 right-[15%] w-48 h-48 rounded-full bg-[#2E7D32] blur-sm transform translate-y-24" />
          <div className="absolute bottom-0 left-[50%] w-48 h-48 rounded-full bg-[#2E7D32] blur-sm transform translate-y-24" />
          
          {/* Decorative clouds - more organized placement */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`cloud-${i}`}
              className="absolute bg-white rounded-full opacity-90 animate-float"
              style={{
                width: `${40 + (i % 3) * 20}px`,
                height: `${20 + (i % 3) * 10}px`,
                top: `${10 + (i * 8)}%`,
                left: `${10 + (i * 12)}%`,
                animationDelay: `${i * 1.5}s`,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                filter: 'blur(1px)'
              }}
            />
          ))}
          
          {/* Small bushes/decorations - aligned with path */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`bush-${i}`}
              className="absolute rounded-full bg-[#1B5E20]"
              style={{
                width: `${30 + (i % 3) * 10}px`,
                height: `${30 + (i % 3) * 10}px`,
                bottom: `${5 + (i % 3) * 8}%`,
                left: `${15 + (i * 6)}%`,
                boxShadow: 'inset -2px -4px 4px rgba(0,0,0,0.2)',
                opacity: 0.9
              }}
            />
          ))}

          {/* Decorative coins - aligned with path */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`coin-${i}`}
              className="absolute animate-coin"
              style={{
                left: `${20 + (i * 4)}%`,
                top: `${45 + (i % 3) * 5}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-4 h-4 bg-[#FFD700] rounded-full" style={{
                boxShadow: '0 0 10px rgba(255,215,0,0.5), inset -2px -2px 4px rgba(0,0,0,0.2)'
              }} />
            </div>
          ))}

          {/* Small flowers and grass - organized along the bottom */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`flower-${i}`}
              className="absolute"
              style={{
                bottom: `${2 + (i % 4) * 3}%`,
                left: `${5 + (i * 5)}%`,
              }}
            >
              <div className="w-2 h-4 bg-[#43A047] rounded-full transform -rotate-12" />
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#FFD700', '#FFFFFF', '#FF69B4'][i % 3]
                }}
              />
            </div>
          ))}

          {/* Path decorations - aligned with the learning path */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={`path-deco-${i}`}
                className="absolute w-6 h-1 bg-[#8B4513] rounded-full opacity-30"
                style={{
                  left: `${20 + (i * 6)}%`,
                  top: `${45 + (i % 2) * 10}%`,
                  transform: `rotate(${(i % 2) * 45}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Map */}
        <div className="relative z-10">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="pathGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {learningLevels.map(level =>
              level.connections.map(targetId => {
                const target = learningLevels.find(l => l.id === targetId);
                if (!target) return null;
                
                const startX = level.position.x;
                const startY = level.position.y;
                const endX = target.position.x;
                const endY = target.position.y;
                const midX = (startX + endX) / 2;
                const midY = (startY + endY) / 2 + 15;

                return (
                  <g key={`${level.id}-${targetId}`}>
                    {/* Path shadow */}
                    <path
                      d={`M ${startX}% ${startY}% Q ${midX}% ${midY}% ${endX}% ${endY}%`}
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="16"
                      strokeLinecap="round"
                      fill="none"
                      transform="translate(2, 2)"
                    />
                    {/* Main path with gradient */}
                    <path
                      d={`M ${startX}% ${startY}% Q ${midX}% ${midY}% ${endX}% ${endY}%`}
                      stroke={level.status === 'locked' ? '#9CA3AF' : 'url(#pathGradient)'}
                      strokeWidth="14"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        filter: level.status !== 'locked' ? 'url(#pathGlow)' : 'none'
                      }}
                    />
                    {/* Path highlights */}
                    <path
                      d={`M ${startX}% ${startY}% Q ${midX}% ${midY}% ${endX}% ${endY}%`}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      transform="translate(0, -2)"
                    />
                    {/* Decorative dots along the path */}
                    {level.status !== 'locked' && [...Array(5)].map((_, i) => {
                      const t = (i + 1) / 6;
                      const x = startX + (endX - startX) * t;
                      const y = startY + (endY - startY) * t + Math.sin(t * Math.PI) * 15;
                      return (
                        <circle
                          key={i}
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="3"
                          fill="#FFD700"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      );
                    })}
                  </g>
                );
              })
            )}
          </svg>

          {/* Level Nodes */}
          {learningLevels.map(level => {
            const treeStage = treeStages[getTreeStage(level)];
            
            return (
              <div
                key={level.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${level.position.x}%`, top: `${level.position.y}%` }}
              >
                <div className="group relative">
                  {/* Outer Glow Effect */}
                  <div className={`absolute -inset-4 rounded-full blur-md transition-opacity duration-300
                    ${level.status === 'completed' ? 'bg-green-500/30' : 
                      level.status === 'current' ? 'bg-primary/30 animate-pulse' : 
                      'bg-gray-400/20'}`}
                  />
                  
                  {/* Platform shadow with more depth */}
                  <div className="absolute -bottom-6 w-32 h-8 bg-black/30 rounded-full blur-md transform -translate-x-1/4" />
                  
                  {/* Enhanced Platform */}
                  <div className="absolute -bottom-4 w-28 h-6 rounded-lg transform -translate-x-1/4 overflow-hidden">
                    {/* Platform gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#A0522D]" />
                    {/* Platform texture */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-[1px] bg-white/30"
                          style={{ 
                            left: '0',
                            right: '0',
                            top: `${(i + 1) * 20}%`,
                            transform: 'rotate(-5deg)'
                          }}
                        />
                      ))}
                    </div>
                    {/* Platform highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/40" />
                  </div>
                  
                  {/* Level Node with Enhanced Effects */}
                  <div
                    className={`w-20 h-20 rounded-full ${getStatusColor(level.status)} 
                      flex items-center justify-center relative cursor-pointer
                      transform transition-all duration-300 hover:scale-110
                      ${level.status !== 'locked' ? 'hover:rotate-3' : ''}
                      border-4 ${level.status === 'locked' ? 'border-gray-400' : 'border-[#FFD700]'}`}
                    style={{
                      boxShadow: level.status !== 'locked' 
                        ? '0 0 30px rgba(255, 215, 0, 0.3), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.2)' 
                        : 'inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.2)'
                    }}
                    onClick={() => handleLevelClick(level)}
                  >
                    {/* Inner glow for active nodes */}
                    {level.status !== 'locked' && (
                      <div className="absolute inset-0 rounded-full bg-white/20 filter blur-sm" />
                    )}
                    
                    {/* Tree icon with enhanced effects */}
                    <treeStage.icon 
                      className={`${treeStage.color} ${treeStage.size} transform transition-all duration-300
                        ${selectedLevel === level.id ? 'scale-125' : ''}
                        ${level.status !== 'locked' ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}
                    />
                    
                    {/* Pulse effect for current level */}
                    {level.status === 'current' && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                      </>
                    )}
                  </div>

                  {/* Enhanced Stars Display */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {[...Array(level.totalStars)].map((_, i) => (
                      <div key={i} className="relative">
                        <FaStar
                          className={`w-6 h-6 ${
                            i < level.stars 
                              ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]' 
                              : 'text-gray-300'
                          } ${i < level.stars ? 'animate-bounce' : ''}`}
                          style={{ 
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                        {i < level.stars && (
                          <div className="absolute inset-0 w-6 h-6 bg-yellow-400/30 rounded-full animate-ping" 
                            style={{ animationDelay: `${i * 200}ms` }} 
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Interactive Tooltip */}
                  {selectedLevel === level.id && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full -top-4
                      opacity-100 transition-all duration-300 z-30">
                      <div className="bg-gray-900/95 text-white p-4 rounded-lg shadow-lg
                        border-2 border-[#FFD700] min-w-[250px]">
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                          w-4 h-4 bg-gray-900 border-r-2 border-b-2 border-[#FFD700]
                          rotate-45" />
                        <h3 className="font-semibold text-lg mb-2 text-yellow-400">{level.title}</h3>
                        <p className="text-sm text-gray-300 mb-3">{level.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            {[...Array(level.totalStars)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-5 h-5 ${
                                  i < level.stars ? 'text-yellow-400' : 'text-gray-500'
                                }`}
                              />
                            ))}
                          </div>
                          {level.status === 'current' && (
                            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm 
                              hover:bg-primary/80 transition-colors transform hover:scale-105
                              shadow-lg hover:shadow-primary/50">
                              Continue
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Legend */}
        <div className="absolute bottom-4 right-4 bg-white/95 p-4 rounded-lg shadow-lg border-2 border-[#8B4513]">
          <div className="text-sm font-semibold mb-2 text-gray-900">World Map Legend</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-[#FFD700] shadow-inner" />
              <span className="text-sm text-gray-900">Completed Level</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse border-2 border-[#FFD700] shadow-inner" />
              <span className="text-sm text-gray-900">Current Level</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-400 shadow-inner" />
              <span className="text-sm text-gray-900">Locked Level</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Current Level Details */}
      <Card
        icon={FaStar}
        title="Current Level"
        className="p-6"
      >
        <h2 className="text-xl font-semibold text-text-primary mb-4">Advanced Topics</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-secondary">Level Progress</span>
              <span className="text-text-primary">33%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '33%' }} />
            </div>
          </div>
          <p className="text-text-secondary">
            You're making great progress! Complete this level to unlock new challenges and continue your journey.
          </p>
        </div>
      </Card>

      <Card
        icon={FaChartLine}
        title="Learning Path"
        className="p-6"
      >
        <div className="space-y-6">
          {learningLevels.map((level) => (
            <div
              key={level.id}
              className="flex items-center justify-between p-4 rounded-lg bg-background-secondary"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${getStatusColor(level.status)}`}>
                  {getStatusIcon(level.status)}
                </div>
                <div>
                  <h3 className="font-medium">{level.title}</h3>
                  <p className="text-sm text-text-secondary">{level.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">
                  {level.stars}/{level.totalStars} stars
                </span>
                <button
                  onClick={() => handleLevelClick(level)}
                  className="p-2 rounded-full bg-background-primary hover:bg-background-secondary"
                >
                  <FaCheck className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
} 