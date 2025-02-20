'use client'
import Image from "next/image";
import IsotopeWhite from "./IsotypeWhite";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const logoRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={logoRef as React.RefObject<HTMLDivElement>} className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-[500px] mx-auto fade-in">
            <div className="absolute inset-0 flex items-center justify-center">
              <IsotopeWhite className="w-full h-full p-4 sm:p-8 md:p-12 lg:p-0" />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div ref={contentRef as React.RefObject<HTMLDivElement>} className="fade-up">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Building the Future of Technology
              </h1>
              <p className="text-white text-lg sm:text-xl mt-4">
                We create innovative solutions that transform businesses and enhance user experiences.
              </p>
            </div>
            <div ref={buttonsRef as React.RefObject<HTMLDivElement>} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 