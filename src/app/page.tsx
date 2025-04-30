'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTshirt, FaShieldAlt, FaHardHat, FaExclamationTriangle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface PathCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  size: 'Small' | 'Medium' | 'Large';
  iconColor: string;
  sizeColor: string;
}

const PathCard = ({ title, description, icon: Icon, href, size, iconColor, sizeColor }: PathCardProps) => {
  const [prefix, suffix] = title.split(': ');
  
  const glowColor = {
    Small: '#FFB800',
    Medium: '#FF6347',
    Large: '#00FF00'
  }[size];
  
  return (
    <Link
      href={href}
      className={`card group hover-shadow relative overflow-hidden rounded-xl border border-border-primary bg-background-secondary p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[${glowColor}20] w-full`}
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="flex items-center justify-center h-20 mb-6 relative">
          <Icon className={`w-16 h-16 ${iconColor} transition-transform group-hover:scale-110`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/seed_to_oaks_logo_no_words.png"
              alt="Logo"
              width={20}
              height={20}
              className="object-contain opacity-90"
            />
          </div>
        </div>
        <span className={`text-xl font-semibold ${sizeColor} mb-3 tracking-wide`}>{size} T-shirt</span>
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
          <span className="block">{prefix}:</span>
          <span className="block mt-1 text-lg">{suffix}</span>
        </h3>
        <p className="text-text-secondary text-lg group-hover:text-text-primary transition-colors">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen overflow-hidden bg-background-primary flex flex-col">
      {/* Header Bar with Logo and Admin Button */}
      <header className="w-full bg-background-secondary border-b border-border-primary py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <div className="flex-1 flex justify-start">
            <Image
              src="/seed_to_oaks_logo_stacked.png"
              alt="Seed to Oaks Logo"
              width={300}
              height={300}
              className="h-24 w-auto object-contain"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex items-center justify-center gap-3 mb-1">
              <FaExclamationTriangle className="text-yellow-400 w-6 h-6 animate-pulse" />
              <FaHardHat className="text-yellow-400 w-6 h-6" />
              <FaExclamationTriangle className="text-yellow-400 w-6 h-6 animate-pulse" />
            </div>
            <div className="text-white text-2xl font-bold bg-red-500 px-4 py-1 rounded-md transform -rotate-2 shadow-lg">
              {"Backend Prototype"}
            </div>
          </div>
          <Link
            href="/admin/dashboard"
            className="btn btn-ghost text-[#FF4444] hover:text-[#FF4444] text-xl px-7 py-3.5 hover:bg-transparent hover:shadow-lg hover:shadow-[#FF444420] transition-shadow rounded-xl"
          >
            <FaShieldAlt className="inline-block mr-3 text-xl" /> Admin Portal
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 max-w-4xl mx-auto">
              <span className="block text-white mb-2">Transform Your Community with</span>
              <span className="block text-accent-yellow">Neighborhood 360°</span>
            </h1>
            <p className="subheading text-text-secondary tracking-wide max-w-2xl mx-auto">
              Choose your path and begin the journey of meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div>
              <Link
                href="/small/dashboard"
                className={`card group hover-shadow relative overflow-hidden rounded-xl border border-border-primary bg-background-secondary p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[#FFB80020] w-full flex flex-col h-full`}
              >
                <div className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="flex items-center justify-center h-20 mb-6 relative">
                    <FaTshirt className={`w-16 h-16 text-accent-yellow transition-transform group-hover:scale-110`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/seed_to_oaks_logo_no_words.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="object-contain opacity-90"
                      />
                    </div>
                  </div>
                  <span className={`text-xl font-semibold text-accent-yellow mb-3 tracking-wide`}>Small T-shirt</span>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
                    <span className="block">Neighborhood 360°</span>
                  </h3>
                  <div className="bg-[#FFB800] bg-opacity-20 text-[#FFB800] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                    Personal Edition
                  </div>
                  <p className="text-text-secondary text-lg group-hover:text-text-primary transition-colors mb-8">
                    Start your personal journey of community transformation
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document.body.classList.add('fade-out');
                      setTimeout(() => router.push('/game'), 1200);
                    }}
                    className="px-8 py-4 bg-[#00FF00] text-black font-bold rounded-full
                             hover:bg-[#00E600] transition-all duration-300
                             transform hover:scale-105 active:scale-95
                             shadow-lg hover:shadow-xl shadow-[#00FF0040]
                             relative overflow-hidden group text-lg w-full"
                  >
                    <span className="relative z-10">Interactive Experience</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00] to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  animate-electricity"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00FF00] 
                                  group-hover:animate-electric-border rounded-full"></div>
                  </button>
                </div>
              </Link>
            </div>
            <Link
              href="/medium/dashboard"
              className={`card group hover-shadow relative overflow-hidden rounded-xl border border-border-primary bg-background-secondary p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[#FFAA7720] w-full`}
            >
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex items-center justify-center h-20 mb-6 relative">
                  <FaTshirt className={`w-16 h-16 text-accent-peach transition-transform group-hover:scale-110`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/seed_to_oaks_logo_no_words.png"
                      alt="Logo"
                      width={20}
                      height={20}
                      className="object-contain opacity-90"
                    />
                  </div>
                </div>
                <span className={`text-xl font-semibold text-accent-peach mb-3 tracking-wide`}>Medium T-shirt</span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
                  <span className="block">Neighborhood 360°</span>
                </h3>
                <div className="bg-[#FFAA77] bg-opacity-20 text-[#FFAA77] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  Group Edition
                </div>
                <p className="text-text-secondary text-lg group-hover:text-text-primary transition-colors">
                  Join with others to make a collective impact
                </p>
              </div>
            </Link>
            <Link
              href="/large/dashboard"
              className={`card group hover-shadow relative overflow-hidden rounded-xl border border-border-primary bg-background-secondary p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[#B4B62F20] w-full`}
            >
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex items-center justify-center h-20 mb-6 relative">
                  <FaTshirt className={`w-16 h-16 text-accent-green transition-transform group-hover:scale-110`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/seed_to_oaks_logo_no_words.png"
                      alt="Logo"
                      width={20}
                      height={20}
                      className="object-contain opacity-90"
                    />
                  </div>
                </div>
                <span className={`text-xl font-semibold text-accent-green mb-3 tracking-wide`}>Large T-shirt</span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
                  <span className="block">Neighborhood 360°</span>
                </h3>
                <div className="bg-[#B4B62F] bg-opacity-20 text-[#B4B62F] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  Community Edition
                </div>
                <p className="text-text-secondary text-lg group-hover:text-text-primary transition-colors">
                  Lead your organization in community transformation
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 