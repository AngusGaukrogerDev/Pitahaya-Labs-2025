'use client'
import { usePathname } from 'next/navigation';
import LightLogo from './LightLogo';

export default function Footer() {
  const pathname = usePathname();

  const handleNavigation = (elementId: string) => {
    // If we're on the home page, scroll to the section
    if (pathname === '/') {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // If we're on another page, navigate to home with the hash
    window.location.href = `/#${elementId}`;
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <button onClick={handleLogoClick} className="text-2xl font-extrabold text-yellow">
              <LightLogo width={150} />
            </button>
            <p className="text-white">
              Building the future of technology with innovative solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={handleLogoClick} className="text-white hover:text-yellow transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('about')} className="text-white hover:text-yellow transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('case-studies')} className="text-white hover:text-yellow transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('services')} className="text-white hover:text-yellow transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('reviews')} className="text-white hover:text-yellow transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('contact')} className="text-white hover:text-yellow transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white">hello@pitahayalabs.com</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-light-gray text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Pitahaya Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 