'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background-primary border-b border-border-primary">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/seed_to_oaks_logo_stacked.png"
              alt="Seed to Oaks Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-semibold text-text-primary">Seed to Oaks</span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/courses"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/projects"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-accent-primary text-white px-4 py-2 rounded-md hover:bg-accent-secondary transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/projects"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                About
              </Link>
              <div className="pt-4 border-t border-border-primary">
                <Link
                  href="/login"
                  className="block text-text-secondary hover:text-text-primary transition-colors mb-4"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block w-full bg-accent-primary text-white px-4 py-2 rounded-md hover:bg-accent-secondary transition-colors text-center"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 