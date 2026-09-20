'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Frosted Glass Container */}
        <div className="bg-slate-950/50 backdrop-blur-xl border border-white/5 rounded-xl sm:rounded-2xl shadow-lg shadow-black/20">
          <div className="px-3 sm:px-4 md:px-6">
            <div className="flex justify-between items-center h-14 sm:h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className="flex items-center hover:opacity-80 transition-opacity duration-300"
                >
                  <img 
                    src="/projects/logos/ar-logo.png" 
                    alt="AR" 
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:bg-white/5 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-white/5 mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:bg-white/5 block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
