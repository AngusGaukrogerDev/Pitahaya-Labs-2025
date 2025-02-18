export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Our Projects</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our latest work and see how we've helped our clients achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 bg-yellow/10">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Project {project}</h3>
                <p className="mb-4">
                  A brief description of the project and the solutions we provided.
                </p>
                <button className="text-yellow hover:underline font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 