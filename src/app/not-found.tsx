import Link from 'next/link';
import PageLayout from './components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-9xl font-extrabold text-yellow mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary inline-block">
            Return Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
} 