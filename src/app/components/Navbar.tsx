'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LightLogo from './LightLogo';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure we reset the overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleScroll = (elementId: string) => {
    setIsMenuOpen(false);
    
    // If we're on the home page, scroll to the section
    if (pathname === '/') {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // If we're on another page, navigate to home with the hash
    window.location.href = `/#${elementId}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-extrabold text-yellow"
            onClick={() => {
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <LightLogo width={150} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-white hover:text-yellow transition-colors"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
            <button 
              onClick={() => handleScroll('about')} 
              className="text-white hover:text-yellow transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleScroll('case-studies')} 
              className="text-white hover:text-yellow transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-white hover:text-yellow transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleScroll('reviews')} 
              className="text-white hover:text-yellow transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleScroll('contact')} 
              className="btn-primary"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-yellow transition-colors"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
          <Link 
            href="/"
            className="text-white hover:text-yellow transition-colors text-xl"
            onClick={(e) => {
              setIsMenuOpen(false);
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </Link>
          <button 
            onClick={() => handleScroll('about')}
            className="text-white hover:text-yellow transition-colors text-xl"
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('case-studies')}
            className="text-white hover:text-yellow transition-colors text-xl"
          >
            Case Studies
          </button>
          <button 
            onClick={() => handleScroll('services')}
            className="text-white hover:text-yellow transition-colors text-xl"
          >
            Services
          </button>
          <button 
            onClick={() => handleScroll('reviews')}
            className="text-white hover:text-yellow transition-colors text-xl"
          >
            Reviews
          </button>
          <button 
            onClick={() => handleScroll('contact')}
            className="btn-primary text-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
} 