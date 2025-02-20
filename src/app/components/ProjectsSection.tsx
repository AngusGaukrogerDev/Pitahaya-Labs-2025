'use client'
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProjectsSection() {
  const headerRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12 fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Our Projects</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our latest work and see how we&apos;ve helped our clients achieve their goals.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch min-h-[600px] fade-up delay-200">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
} 