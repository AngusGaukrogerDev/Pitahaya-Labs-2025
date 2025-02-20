'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CookiePreferencesModal from './CookiePreferencesModal';

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = () => {
    const preferences: CookiePreferences = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{' '}
              <Link href="/privacy-policy" className="text-yellow hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="text-yellow hover:underline">
                Cookie Policy
              </Link>{' '}
              to learn more.
            </div>
            <div className="flex gap-4">
              <button
                onClick={acceptAllCookies}
                className="btn-primary whitespace-nowrap"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-secondary whitespace-nowrap"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePreferences}
      />
    </>
  );
}