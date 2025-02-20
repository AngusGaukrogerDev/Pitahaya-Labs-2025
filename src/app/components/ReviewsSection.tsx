'use client'
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Sample reviews data - this can be moved to a separate file or fetched from an API
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    review: "Working with Pitahaya Labs was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations.",
    rating: 5,
    image: "/client1.jpg" // Add actual image path
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Innovations",
    review: "The team at Pitahaya Labs delivered our project on time and with exceptional quality. Their technical expertise and communication were outstanding.",
    rating: 5,
    image: "/client2.jpg" // Add actual image path
  },
  {
    id: 3,
    name: "Emma Davis",
    company: "StartUp Hub",
    review: "From concept to execution, Pitahaya Labs guided us through the entire process with professionalism and expertise. Highly recommended!",
    rating: 5,
    image: "/client3.jpg" // Add actual image path
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useScrollAnimation();
  const reviewRef = useScrollAnimation();

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="reviews" className="py-20 bg-light-gray min-h-[800px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Client Reviews</h2>
          <p className="text-lg max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Previous Button - Desktop */}
          <button 
            onClick={previousReview}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 
                     text-black hover:text-yellow transition-colors z-10"
            aria-label="Previous review"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Review Card */}
          <div ref={reviewRef} className="bg-white rounded-lg shadow-lg p-4 sm:p-8 transition-all duration-300 transform fade-up delay-200">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full mr-3 sm:mr-4 flex items-center justify-center text-white text-lg sm:text-xl font-medium">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-medium text-lg sm:text-xl text-black">{reviews[currentIndex].name}</h4>
                <p className="text-mid-gray text-sm sm:text-base">{reviews[currentIndex].company}</p>
              </div>
            </div>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 italic text-black">
              "{reviews[currentIndex].review}"
            </p>
            <div className="flex text-yellow">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex justify-center items-center mt-6 space-x-8">
            <button 
              onClick={previousReview}
              className="bg-white rounded-lg p-3 text-black hover:text-yellow transition-colors shadow-md hover:shadow-lg"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellow' : 'bg-mid-gray'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextReview}
              className="bg-white rounded-lg p-3 text-black hover:text-yellow transition-colors shadow-md hover:shadow-lg"
              aria-label="Next review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Next Button - Desktop */}
          <button 
            onClick={nextReview}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 
                     text-black hover:text-yellow transition-colors z-10"
            aria-label="Next review"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Desktop Dots Indicator */}
          <div className="hidden sm:flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow' : 'bg-mid-gray'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 