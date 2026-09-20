import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      items: [
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
      ],
    },
    {
      title: 'Database & Backend',
      items: [
        'Supabase',
        'PostgreSQL',
        'Firebase',
      ],
    },
    {
      title: 'Tools & Technologies',
      items: [
        'Git',
        'GitHub',
        'Vercel',
        'Chart.js',
        'Responsive Web Design',
        'Data Visualization',
        'Dashboard Development',
        'Simple Additive Weighting (SAW)',
      ],
    },
    {
      title: 'Soft Skills',
      items: [
        'Problem Solving',
        'Analytical Thinking',
        'Communication',
        'Teamwork & Collaboration',
        'Adaptability',
        'Time Management',
        'Attention to Detail',
        'Continuous Learning',
        'Initiative',
        'Responsibility',
      ],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      className=""
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white border-b border-slate-800 pb-2 sm:pb-3">{category.title}</h3>
              <div className="space-y-2 sm:space-y-2.5">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
