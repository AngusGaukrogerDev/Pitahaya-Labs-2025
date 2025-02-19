import PageLayout from './components/PageLayout';

export default function Loading() {
  return (
    <PageLayout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow"></div>
          <p className="mt-8 text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    </PageLayout>
  );
} 