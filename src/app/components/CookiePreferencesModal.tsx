'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

export default function CookiePreferencesModal({ isOpen, onClose, onSave }: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    if (isOpen) {
      // Load saved preferences when modal opens
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure we reset the overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  const handleToggleAll = () => {
    setPreferences({
      ...preferences,
      preferences: true,
      statistics: true,
      marketing: true,
    });
  };

  if (!isOpen) return null;

  const checkboxStyle = "h-5 w-5 rounded border-light-gray text-yellow focus:ring-yellow focus:ring-offset-0 focus:ring-2 focus:ring-opacity-50 checked:bg-yellow checked:hover:bg-yellow checked:focus:bg-yellow cursor-pointer";

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-extrabold">Cookie Preferences</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-gray-600">
            We use cookies to help you navigate efficiently and perform certain functions. You can change your 
            cookie settings below. Find out more about the cookies we use in our{' '}
            <Link href="/cookie-policy" className="text-yellow hover:underline">
              Cookie Policy
            </Link>.
          </p>

          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-bold">Necessary Cookies</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    These cookies are required for the website to function and cannot be disabled.
                  </p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className={checkboxStyle}
                  />
                </div>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-bold">Preferences Cookies</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    These cookies allow the website to remember choices you make and provide enhanced functionality.
                  </p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                    className={checkboxStyle}
                  />
                </div>
              </div>
            </div>

            {/* Statistics Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-bold">Statistics Cookies</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    These cookies collect information about how you use our website, helping us improve our services.
                  </p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={preferences.statistics}
                    onChange={(e) => setPreferences({ ...preferences, statistics: e.target.checked })}
                    className={checkboxStyle}
                  />
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-bold">Marketing Cookies</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className={checkboxStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t">
            <button
              onClick={handleToggleAll}
              className="btn-secondary"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="btn-primary"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}