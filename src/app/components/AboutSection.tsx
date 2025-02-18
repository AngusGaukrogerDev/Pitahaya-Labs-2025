export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-light-gray rounded-2xl"></div>
            {/* Add about image here */}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold">
              Who We Are
            </h2>
            <p className="text-lg">
              Pitahaya Labs is a forward-thinking technology company dedicated to creating innovative solutions 
              that help businesses thrive in the digital age. Our team of experts combines creativity with 
              technical excellence to deliver outstanding results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-yellow">100+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-yellow">50+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 