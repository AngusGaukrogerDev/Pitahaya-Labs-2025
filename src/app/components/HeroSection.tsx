'use client'
import Image from "next/image";
import IsotopeWhite from "./IsotypeWhite";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-[500px] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <IsotopeWhite className="w-full h-full p-4 sm:p-8 md:p-12 lg:p-0" />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              Building the Future of Technology
            </h1>
            <p className="text-white text-lg sm:text-xl">
              We create innovative solutions that transform businesses and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 