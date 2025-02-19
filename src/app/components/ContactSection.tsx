'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert('Please accept the privacy policy to proceed.');
      return;
    }
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white min-h-[800px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold">Get in Touch</h2>
            <p className="text-lg">
              Have a project in mind? Let's talk about how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>hello@pitahayalabs.com</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-light-gray bg-white text-black placeholder-mid-gray focus:outline-none focus:border-yellow transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-light-gray bg-white text-black placeholder-mid-gray focus:outline-none focus:border-yellow transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border border-light-gray bg-white text-black placeholder-mid-gray focus:outline-none focus:border-yellow transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded-lg border border-light-gray bg-white text-black placeholder-mid-gray focus:outline-none focus:border-yellow transition-colors resize-none"
            ></textarea>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-light-gray text-yellow focus:ring-yellow focus:ring-offset-0 focus:ring-2 focus:ring-opacity-50 checked:bg-yellow checked:hover:bg-yellow checked:focus:bg-yellow cursor-pointer"
                required
              />
              <label htmlFor="privacy-policy" className="text-sm">
                I agree to the processing of my data as outlined in the{' '}
                <Link href="/privacy-policy" className="text-yellow hover:underline">
                  Privacy Policy
                </Link>. I understand that I can withdraw my consent at any time.
              </label>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
} 