'use client'
import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and disabled
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookiesAccepted', 'true');
    alert('Your cookie preferences have been saved.');
  };

  const handleToggleAll = () => {
    setPreferences({
      ...preferences,
      preferences: true,
      statistics: true,
      marketing: true,
    });
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8">Cookie Preferences</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-6">
              We use cookies to help you navigate efficiently and perform certain functions. You can change your 
              cookie settings below. Find out more about the cookies we use in our{' '}
              <a href="/cookie-policy" className="text-yellow hover:underline">
                Cookie Policy
              </a>.
            </p>
          </section>

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Necessary Cookies</h3>
                  <p className="text-gray-600 mt-1">
                    These cookies are required for the website to function and cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-5 w-5 rounded border-light-gray text-yellow focus:ring-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Preferences Cookies</h3>
                  <p className="text-gray-600 mt-1">
                    These cookies allow the website to remember choices you make and provide enhanced functionality.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                    className="h-5 w-5 rounded border-light-gray text-yellow focus:ring-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Statistics Cookies */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Statistics Cookies</h3>
                  <p className="text-gray-600 mt-1">
                    These cookies collect information about how you use our website, helping us improve our services.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.statistics}
                    onChange={(e) => setPreferences({ ...preferences, statistics: e.target.checked })}
                    className="h-5 w-5 rounded border-light-gray text-yellow focus:ring-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Marketing Cookies</h3>
                  <p className="text-gray-600 mt-1">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="h-5 w-5 rounded border-light-gray text-yellow focus:ring-yellow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
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