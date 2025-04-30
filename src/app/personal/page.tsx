'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Scene = 'welcome' | 'expectations' | 'first-quest' | 'dashboard';

export default function PersonalPage() {
  const [scene, setScene] = useState<Scene>('welcome');
  const [firstQuestCompleted, setFirstQuestCompleted] = useState(false);

  // Check if user has completed onboarding
  useEffect(() => {
    const completed = localStorage.getItem('n360_onboarding_completed');
    if (completed === 'true') {
      setScene('dashboard');
      setFirstQuestCompleted(true);
    }
  }, []);

  // Save onboarding state
  const completeFirstQuest = () => {
    setFirstQuestCompleted(true);
    setScene('dashboard');
    localStorage.setItem('n360_onboarding_completed', 'true');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background.png"
          alt="Neighborhood background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Welcome Screen */}
        {scene === 'welcome' && (
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
              <div className="relative w-full md:w-1/2 aspect-square">
                <img
                  src="/oak.png"
                  alt="Oak - Your neighborhood guide"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl font-bold text-gray-800">
                  Welcome to Neighborhood 360°
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  This isn't a program. It's a pathway to knowing and loving your neighbors in a deeper way.
                </p>
                <button
                  onClick={() => setScene('expectations')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Let's Begin
                </button>
              </div>
            </div>
          </div>
        )}

        {/* What to Expect Screen */}
        {scene === 'expectations' && (
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl w-full space-y-12 animate-fadeIn">
              <h1 className="text-4xl font-bold text-gray-800 text-center">
                Here's how it works
              </h1>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Listen First',
                    description: "You'll walk your neighborhood and observe",
                    icon: '👂'
                  },
                  {
                    title: 'Build Trust',
                    description: "You'll start simple conversations",
                    icon: '🤝'
                  },
                  {
                    title: 'Grow Impact',
                    description: "You'll take one intentional action each week",
                    icon: '🌱'
                  }
                ].map((card, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setScene('first-quest')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* First Quest Screen */}
        {scene === 'first-quest' && (
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-2xl w-full space-y-8 animate-fadeIn">
              <h1 className="text-4xl font-bold text-gray-800 text-center">
                The Gift of Listening
              </h1>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Before anything else, we listen. Your first mission is to take a slow walk around your block. Write down what you hear, see, and feel.
                </p>
                <button
                  onClick={completeFirstQuest}
                  className="w-full px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Mark as Complete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {scene === 'dashboard' && firstQuestCompleted && (
          <div className="min-h-screen p-8 animate-fadeIn">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Weekly Journey */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">This Week's Mission</h2>
                <div className="space-y-4">
                  <h3 className="text-xl">Gift #2: Presence</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-gray-600">45% complete</p>
                </div>
              </div>

              {/* Grid Layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Neighborhood Map */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Your Neighborhood</h2>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                    Your neighborhood will grow here soon.
                  </div>
                </div>

                {/* Reflections */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Daily Reflection</h2>
                  <p className="text-gray-600 mb-4">What surprised you most about your neighborhood walk?</p>
                  <textarea
                    className="w-full p-4 border rounded-lg"
                    rows={4}
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              {/* Game Mode Entry */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Want a more interactive version of this?</h2>
                    <p className="text-gray-600">Try our gamified experience for a different perspective.</p>
                  </div>
                  <Link
                    href="/game"
                    className="mt-4 md:mt-0 px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    Enter Game Mode
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 