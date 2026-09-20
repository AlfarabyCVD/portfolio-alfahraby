import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  children,
  className = '',
  isLast = false,
}) => {
  return (
    <>
      <section
        id={id}
        className={`scroll-mt-20 py-12 sm:py-16 lg:py-20 ${className}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <div className="mt-4 h-1 w-12 bg-blue-600 dark:bg-blue-500"></div>
          </div>
          {children}
        </div>
      </section>
      
      {/* Subtle section separator - hidden for last section */}
      {!isLast && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 py-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-slate-700/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600/40"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700/30 to-slate-700/30"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper;
