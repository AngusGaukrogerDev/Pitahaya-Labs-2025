export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-light-gray pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
              Building the Future of Technology
            </h1>
            <p className="text-xl">
              We create innovative solutions that transform businesses and enhance user experiences.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-yellow/10 rounded-2xl"></div>
            {/* Add hero image here */}
          </div>
        </div>
      </div>
    </section>
  );
} 