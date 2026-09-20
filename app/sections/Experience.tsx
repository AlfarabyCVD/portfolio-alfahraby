import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'IT Programmer Intern',
      company: 'PT Sinar Sukses Persada — Galesong Group',
      location: 'Makassar, Indonesia',
      period: 'Feb 2026 – Apr 2026',
      description: 'Contributed to the development and improvement of a web-based shrimp harvest monitoring dashboard for aquaculture operations.',
      responsibilities: [
        'Developed features for a shrimp harvest monitoring dashboard',
        'Processed and organized shrimp harvest and pond data',
        'Implemented filtering based on pond, cycle, and harvest information',
        'Created interactive charts and data visualizations',
        'Worked on report export and data presentation features',
        'Helped transition manually managed Excel/WhatsApp data into a centralized digital dashboard',
        'Collaborated with the IT and aquaculture teams to understand operational requirements'
      ],
      technologies: ['React', 'JavaScript', 'Firebase', 'Data Visualization', 'Excel']
    },
    {
      role: 'Academic Project',
      company: 'Smart Solar Irrigation Decision Support System',
      location: 'Universitas Bosowa',
      period: '2025 – 2026',
      description: 'Developed a web-based decision support system for smart irrigation scheduling using the Simple Additive Weighting (SAW) method.',
      responsibilities: [
        'Designed the web interface for the decision support system',
        'Implemented criteria weighting and normalization',
        'Implemented SAW-based ranking',
        'Created data visualization for decision results',
        'Implemented data management using Supabase and PostgreSQL'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'PostgreSQL', 'Chart.js']
    }
  ];

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      className=""
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Content card */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                        {exp.role}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{exp.location}</p>
                  </div>
                  
                  <div className="sm:text-right flex-shrink-0">
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-2xl">
                  {exp.description}
                </p>
                
                {/* Responsibilities */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 list-none">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 text-[11px] sm:text-xs font-medium hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
