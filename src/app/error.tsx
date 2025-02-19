'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import PageLayout from './components/PageLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-9xl font-extrabold text-yellow mb-4">500</h1>
          <h2 className="text-4xl font-bold mb-6">Something Went Wrong</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, but there was an error processing your request.
          </p>
          <div className="space-x-4">
            <button onClick={reset} className="btn-primary">
              Try Again
            </button>
            <Link href="/" className="btn-secondary inline-block">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 