import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Our Projects</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our latest work and see how we've helped our clients achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch min-h-[600px]">
          <ProjectCard />
          
        
        </div>
      </div>
    </section>
  );
} 