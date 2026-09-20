'use client';

import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  previewType: 'dashboard' | 'decision' | 'portfolio';
}

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [currentDecisionImageIndex, setCurrentDecisionImageIndex] = React.useState(0);
  const [isHoveringDecision, setIsHoveringDecision] = React.useState(false);

  const dashboardImages = [
    '/projects/shrimp-dashboard-1.jpeg',
    '/projects/shrimp-dashboard-2.jpeg',
    '/projects/shrimp-dashboard-3.jpeg',
    '/projects/shrimp-dashboard-4.jpeg',
  ];

  const decisionImages = [
    '/projects/irigasi-pintar-1.jpeg',
    '/projects/irigasi-pintar-2.jpeg',
    '/projects/irigasi-pintar-3.jpeg',
    '/projects/irigasi-pintar-4.jpeg',
  ];

  // Auto slideshow on hover for dashboard
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev === dashboardImages.length - 1 ? 0 : prev + 1));
      }, 2500);
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovering, dashboardImages.length]);

  // Auto slideshow on hover for decision
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHoveringDecision) {
      interval = setInterval(() => {
        setCurrentDecisionImageIndex((prev) => (prev === decisionImages.length - 1 ? 0 : prev + 1));
      }, 2500);
    } else {
      setCurrentDecisionImageIndex(0);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHoveringDecision, decisionImages.length]);

  const projects: Project[] = [
    {
      id: 1,
      category: 'Dashboard Application',
      title: 'Shrimp Harvest Dashboard',
      description: 'Dashboard monitoring data hasil panen udang berdasarkan petak dan siklus, dengan informasi partial harvest, DOC, size, tonase, serta visualisasi data.',
      technologies: ['React', 'Node.js', 'Firebase'],
      demoUrl: '#',
      githubUrl: 'https://github.com/AlfarabyCVD/Shrimp-Harvest-Dashboard.git',
      previewType: 'dashboard',
    },
    {
      id: 2,
      category: 'Decision Support System',
      title: 'Sistem Pendukung Keputusan Irigasi Pintar',
      description: 'An intelligent irrigation decision support system that helps farmers optimize water usage through data-driven recommendations and ranking analysis.',
      technologies: ['PHP', 'MySQL', 'Laravel', 'Decision Algorithm'],
      demoUrl: '#',
      githubUrl: '#',
      previewType: 'decision',
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with Next.js and TypeScript, showcasing projects and professional experience with clean design.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      demoUrl: '#',
      githubUrl: '#',
      previewType: 'portfolio',
    },
  ];

  const renderPreview = (type: 'dashboard' | 'decision' | 'portfolio') => {
    if (type === 'dashboard') {
      return (
        <div 
          className="relative w-full h-64 bg-slate-900 rounded-t-xl overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Carousel Images */}
          <div className="relative w-full h-full">
            {dashboardImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dashboard screenshot ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentImageIndex
                    ? 'opacity-0 -translate-x-4'
                    : 'opacity-0 translate-x-4'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? dashboardImages.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev === dashboardImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {dashboardImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-cyan-400 w-8' : 'bg-slate-500 w-1.5 hover:bg-slate-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    if (type === 'decision') {
      return (
        <div 
          className="relative w-full h-64 bg-slate-900 rounded-t-xl overflow-hidden"
          onMouseEnter={() => setIsHoveringDecision(true)}
          onMouseLeave={() => setIsHoveringDecision(false)}
        >
          {/* Carousel Images */}
          <div className="relative w-full h-full">
            {decisionImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Decision system screenshot ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-in-out ${
                  index === currentDecisionImageIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentDecisionImageIndex
                    ? 'opacity-0 -translate-x-4'
                    : 'opacity-0 translate-x-4'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentDecisionImageIndex((prev) => (prev === 0 ? decisionImages.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentDecisionImageIndex((prev) => (prev === decisionImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {decisionImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDecisionImageIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentDecisionImageIndex ? 'bg-cyan-400 w-8' : 'bg-slate-500 w-1.5 hover:bg-slate-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // portfolio type
    return (
      <div className="relative w-full h-56 bg-slate-900 rounded-t-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
          </div>
        </div>
        {/* Portfolio page */}
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-20 h-2 bg-cyan-500/50 rounded"></div>
            <div className="flex gap-2">
              <div className="w-12 h-2 bg-slate-700 rounded"></div>
              <div className="w-12 h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
          {/* Hero section */}
          <div className="space-y-2 mb-3">
            <div className="w-32 h-3 bg-slate-700 rounded"></div>
            <div className="w-24 h-2 bg-slate-700 rounded"></div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-800 rounded p-2 border border-slate-700 h-12"></div>
            <div className="bg-slate-800 rounded p-2 border border-slate-700 h-12"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      className=""
    >
      {/* Section intro */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-slate-400 text-base leading-relaxed">
          A collection of projects showcasing my work in web development, data systems, and decision support applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl overflow-hidden hover:border-slate-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1"
          >
            {/* Preview */}
            <div className="relative overflow-hidden">
              {renderPreview(project.previewType)}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">
              {/* Category */}
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.15em] letter-spacing-wider">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-md hover:border-slate-600/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3">
                {project.demoUrl && project.demoUrl !== '#' ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all duration-200 text-center hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    Live Demo
                  </a>
                ) : (
                  <div className="flex-1 px-4 sm:px-5 py-2.5 text-sm font-medium text-slate-500 bg-slate-800/50 border border-slate-700/50 rounded-lg text-center cursor-not-allowed">
                    <span className="flex items-center justify-center gap-2">
                      <span>Live Demo</span>
                      <span className="text-[10px] text-slate-600 uppercase tracking-wider">Coming Soon</span>
                    </span>
                  </div>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all duration-200 text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
