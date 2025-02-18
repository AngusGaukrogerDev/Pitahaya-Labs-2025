export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-light-gray min-h-[800px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Client Reviews</h2>
          <p className="text-lg max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Client Name</h4>
                  <p className="text-sm">Company</p>
                </div>
              </div>
              <p className="mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="flex text-yellow">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 