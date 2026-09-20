import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

const Education: React.FC = () => {
  const educationData = [
    {
      school: 'Universitas Bosowa',
      level: 'Bachelor of Information Technology',
      address: 'Makassar, Indonesia',
      period: '2023 – Present',
      current: true
    },
    {
      school: 'SMK Telkom Makassar',
      level: 'Vocational High School',
      address: 'Jl. A.P. Pettarani No. 4 · Makassar',
      period: '2020 – 2023'
    },
    {
      school: 'MTsN 1 Kota Makassar',
      level: 'Junior High School',
      address: 'Jl. A.P. Pettarani No. 1A · Makassar',
      period: '2017 – 2020'
    },
    {
      school: 'SD Islam Al-Azhar 34 Makassar',
      level: 'Elementary School',
      address: 'Jl. Aroeppala, Hertasning Baru · Makassar',
      period: '2011 – 2017'
    }
  ];

  return (
    <SectionWrapper
      id="education"
      title="Education"
      className=""
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 sm:space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Content */}
              <div className="space-y-1.5 sm:space-y-2">
                {/* School name - most prominent */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {edu.school}
                  {edu.current && (
                    <span className="ml-2 sm:ml-3 inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  )}
                </h3>

                {/* Level */}
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
                  {edu.level}
                </p>

                {/* Address with location icon - muted */}
                <div className="flex items-start gap-2 text-slate-500 text-xs sm:text-sm">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">{edu.address}</span>
                </div>

                {/* Period */}
                <p className="text-slate-400 text-sm font-medium pt-1">
                  {edu.period}
                </p>
              </div>

              {/* Subtle divider line */}
              {index < educationData.length - 1 && (
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
