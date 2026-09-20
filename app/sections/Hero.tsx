import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
    <section
      id="hero"
      className="scroll-mt-24 min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-24 sm:pt-28"
    >
      {/* Background grid effect - subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Information Technology Student
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Building Digital <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experiences with Code
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm Muhammad Alfahraby, an IT student passionate about web development, 
              software development, dashboards, database design, and decision support systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/30 hover:-translate-y-0.5 text-center text-sm sm:text-base"
              >
                View My Projects
              </a>
              
              <a
                href="/cv.pdf"
                download
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 text-center text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 group"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Visual - Code Decoration */}
          <div className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl relative">
            {/* Decorative code blocks */}
            <div className="relative z-10 animate-fade-in-right">
              {/* Main Code Block */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mx-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-400 font-mono">App.tsx</div>
                </div>
                <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                  <div className="flex">
                    <span className="text-slate-600 mr-3">1</span>
                    <span className="text-pink-400">const</span> <span className="text-blue-400 ml-2">developer</span> <span className="text-slate-500 ml-2">=</span> <span className="text-yellow-300">{`{`}</span>
                  </div>
                  <div className="flex pl-6">
                    <span className="text-slate-600 mr-3">2</span>
                    <span className="text-blue-400">name</span>: <span className="text-green-400">'Muhammad Alfahraby'</span>,
                  </div>
                  <div className="flex pl-6">
                    <span className="text-slate-600 mr-3">3</span>
                    <span className="text-blue-400">role</span>: <span className="text-green-400">'Web Developer'</span>,
                  </div>
                  <div className="flex pl-6">
                    <span className="text-slate-600 mr-3">4</span>
                    <span className="text-blue-400">skills</span>: <span className="text-slate-500">[</span>
                  </div>
                  <div className="flex pl-10">
                    <span className="text-slate-600 mr-3">5</span>
                    <span className="text-green-400">'Web Development'</span>,
                  </div>
                  <div className="flex pl-10">
                    <span className="text-slate-600 mr-3">6</span>
                    <span className="text-green-400">'Database'</span>,
                  </div>
                  <div className="flex pl-10">
                    <span className="text-slate-600 mr-3">7</span>
                    <span className="text-green-400">'DSS'</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 mr-3">8</span>
                    <span className="text-slate-500">]</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-600 mr-3">9</span>
                    <span className="text-slate-500">{`};`}</span>
                  </div>
                </div>
              </div>

              {/* Floating Code Snippet - Hidden on small screens */}
              <div className="hidden sm:block absolute -top-8 sm:-top-12 -right-8 sm:-right-12 bg-slate-900 rounded-lg border border-slate-800 shadow-xl p-3 sm:p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 animate-float-slow">
                <div className="font-mono text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">&lt;Hero/&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 sm:mt-16 border-t border-slate-800 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>Available for opportunities</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Scroll to explore</span>
            <svg className="w-4 h-4 text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
    
    {/* Subtle section separator after Hero */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center gap-3 py-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-slate-700/30"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-600/40"></div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700/30 to-slate-700/30"></div>
      </div>
    </div>
    </>
  );
};

export default Hero;
