'use client';

import Link from 'next/link';
import DarkLogo from './DarkLogo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-yellow">
            <DarkLogo width={150} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-yellow transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-white hover:text-yellow transition-colors">
              Projects
            </Link>
            <Link href="#services" className="text-white hover:text-yellow transition-colors">
              Services
            </Link>
            <Link href="#reviews" className="text-white hover:text-yellow transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 