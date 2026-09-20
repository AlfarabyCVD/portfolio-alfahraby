import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      className=""
    >
      <div className="space-y-10 sm:space-y-12">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Information Technology Student
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Hi, I am Muhammad Alfahraby
            </h3>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A dedicated IT student at Universitas Bosowa, passionate about building digital solutions that solve real-world problems. I am fascinated by the intersection of technology and usability, whether it is crafting intuitive web interfaces or designing robust data systems.
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              My journey in technology has led me to explore various domains—from web and software development to database management and decision support systems. I believe that technology should serve people, and I strive to build systems that are not just functional, but also meaningful and accessible.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/30 hover:-translate-y-0.5 text-sm text-center"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 text-sm text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Visual Element - Code/Creative Representation */}
          <div className="relative max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 lg:p-8 shadow-2xl">
              {/* Decorative Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">About Me</div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors duration-200">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Web Dev</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Building responsive websites</p>
                </div>

                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Software</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Creating efficient applications</p>
                </div>

                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700 hover:border-green-500/50 transition-colors duration-200">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Data & Dashboard</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Transforming data into insights</p>
                </div>

                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700 hover:border-orange-500/50 transition-colors duration-200">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">DSS</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Decision support systems</p>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-400 italic">
                  &ldquo;Building digital solutions that empower people through technology&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default About;
