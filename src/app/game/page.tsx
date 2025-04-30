'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Scene = 'intro' | 'welcome' | 'message';

export default function GamePage() {
  const [scene, setScene] = useState<Scene>('intro');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fade in effect on mount
    setIsVisible(true);
    document.body.classList.add('fade-in');
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);

  const handleNextScene = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (scene === 'intro') setScene('welcome');
      else if (scene === 'welcome') setScene('message');
      else router.push('/personal');
      setIsVisible(true);
    }, 500);
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Seed to Oaks Logo */}
      <div className="absolute left-8 top-8 w-[128px] h-[128px]">
        <Image
          src="/seed_to_oaks_logo_stacked.png"
          alt="Seed to Oaks Logo"
          fill
          className="object-contain"
          sizes="128px"
          unoptimized
        />
      </div>

      {/* Jack Character */}
      <div className="absolute left-8 top-64 w-[614px] h-[614px]">
        <Image
          src="/images/jack.PNG"
          alt="Jack"
          fill
          className="object-contain"
          sizes="614px"
          unoptimized
        />
      </div>

      {/* Scene Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {scene === 'intro' && (
          <div className={`transition-all duration-500 transform
            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-float flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/seed_to_oaks_logo_no_words.png"
                  alt="Seed to Oaks Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                  unoptimized
                />
              </div>
              <h1 className="text-5xl font-bold text-white animate-float-delayed">
                Neighborhood 360°
              </h1>
            </div>
            <button
              onClick={handleNextScene}
              className="px-8 py-4 bg-[#0BBFBC] text-white text-2xl font-bold rounded-full 
                       shadow-lg hover:shadow-xl hover:bg-[#107580] transition-all duration-300
                       transform hover:scale-105 active:scale-95 block mx-auto animate-float-delayed-2"
            >
              Start!
            </button>
          </div>
        )}

        {(scene === 'welcome' || scene === 'message') && (
          <div className={`transition-all duration-500 transform
            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <div className="bg-white/95 p-8 rounded-2xl max-w-md mx-4 shadow-xl backdrop-blur-sm">
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                {scene === 'welcome' 
                  ? "Welcome! You're here to discover how to truly connect with your neighborhood."
                  : "This isn't about pizza giveaways. It's about real relationships."}
              </p>
              <button
                onClick={handleNextScene}
                className="w-full px-6 py-3 bg-[#0BBFBC] text-white font-semibold rounded-full
                         hover:bg-[#107580] transition-all duration-300
                         transform hover:scale-105 active:scale-95"
              >
                {scene === 'welcome' ? 'Next' : "Let's Begin"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 