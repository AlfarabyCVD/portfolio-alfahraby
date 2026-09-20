import React from 'react';
import SectionWrapper from '@/app/components/SectionWrapper';

const Contact: React.FC = () => {
  const contactItems = [
    {
      label: 'Email',
      value: 'muhammadalfaraby23@gmail.com',
      href: 'mailto:muhammadalfaraby23@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      primary: true
    },
    {
      label: 'WhatsApp',
      value: '+62 857 9627 9079',
      href: 'https://wa.me/6285796279079',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      primary: true
    },
    {
      label: 'LinkedIn',
      value: 'muhalfahraby',
      href: 'https://www.linkedin.com/in/muhalfahraby',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      primary: true
    },
    {
      label: 'GitHub',
      value: 'AlfarabyCVD',
      href: 'https://github.com/AlfarabyCVD',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      primary: true
    },
    {
      label: 'Instagram',
      value: '@mhmmdalfarabyy',
      href: 'https://www.instagram.com/mhmmdalfarabyy',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      primary: false
    }
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      className=""
      isLast={true}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-3 sm:mb-4">
            Let's Connect
          </h3>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting projects.
          </p>
        </div>

        {/* Contact Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {contactItems.filter(item => item.primary).map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label !== 'Email' ? '_blank' : undefined}
              rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg bg-slate-900/30 border border-slate-800/50 hover:border-slate-700/70 hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-900/10"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-left min-w-0">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-slate-200 font-medium text-xs sm:text-sm md:text-base group-hover:text-cyan-300 transition-colors duration-300 truncate">
                  {item.value}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 text-slate-600 group-hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram - Secondary */}
        {contactItems.filter(item => !item.primary).map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-slate-800/50 hover:border-slate-700/70 text-slate-400 hover:text-slate-300 transition-all duration-300 hover:shadow-md"
          >
            <div className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0">
              {item.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium">{item.label}</span>
            <span className="text-xs sm:text-sm truncate">{item.value}</span>
          </a>
        ))}

        {/* Bottom note */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-xs sm:text-sm">
            Feel free to reach out through any platform above. I usually respond within 24 hours.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
