'use client'
import CaseStudyCard from './CaseStudyCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CaseStudiesSection() {
  const headerRef = useScrollAnimation();
  const studiesRef = useScrollAnimation();

  return (
    <section id="case-studies" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Our Case Studies</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our latest work and see how we&apos;ve helped our clients achieve their goals.
          </p>
        </div>
        
        <div ref={studiesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch min-h-[600px] fade-up delay-200">
          <CaseStudyCard />
        </div>
      </div>
    </section>
  );
} 