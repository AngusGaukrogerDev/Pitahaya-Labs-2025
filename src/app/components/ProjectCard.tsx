'use client'
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A comprehensive web application built with Next.js and TailwindCSS, featuring real-time data synchronization and responsive design.",
    image: "/placeholder.jpg" // Add actual image path
  },
  {
    id: 2,
    title: "Project Two",
    description: "Mobile-first e-commerce platform with integrated payment processing and inventory management system.",
    image: "/placeholder.jpg" // Add actual image path
  },
  {
    id: 3,
    title: "Project Three",
    description: "Custom CMS solution for content creators, featuring markdown support and automated deployment.",
    image: "/placeholder.jpg" // Add actual image path
  }
];

export default function ProjectCard() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full col-span-3 h-full">
      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 bg-yellow/10 dark:bg-yellow/5">
              {/* Add image here */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4">{project.title}</h3>
              <p>{project.description}</p>
              <button className="mt-4 text-yellow hover:underline font-medium">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
        {/* Tabs */}
        <div className="w-40 bg-white dark:bg-gray-900 border-r border-light-gray dark:border-gray-700 flex flex-col">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`h-24 flex items-center justify-center px-6 transition-colors ${
                activeTab === project.id
                ? 'bg-light-gray dark:bg-gray-800 border-l-8 border-yellow'
                : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <div className="font-medium text-center">
                {project.title}
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {projects.map((project) => (
            project.id === activeTab && (
              <div key={project.id} className="h-full flex flex-col">
                <div className="relative flex-1 bg-yellow/10 dark:bg-yellow/5">
                  {/* Add image here */}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                  <p className="text-lg mb-6">{project.description}</p>
                  <button className="text-yellow hover:underline font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 