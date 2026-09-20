'use client';

import React from 'react';

// Static star data - NO random generation at render time
// All stars are now 2-5px for better visibility
const STAR_DATA = [
  { left: "5%", top: "10%", size: "3px", opacity: 0.9, delay: "0s", duration: "3s" },
  { left: "12%", top: "25%", size: "4px", opacity: 0.95, delay: "0.5s", duration: "4s" },
  { left: "18%", top: "45%", size: "2.5px", opacity: 0.8, delay: "1s", duration: "3.5s" },
  { left: "25%", top: "15%", size: "3.5px", opacity: 0.9, delay: "1.5s", duration: "4.5s" },
  { left: "32%", top: "60%", size: "2.8px", opacity: 0.75, delay: "2s", duration: "3.2s" },
  { left: "38%", top: "35%", size: "4.5px", opacity: 0.95, delay: "0.8s", duration: "3.8s" },
  { left: "45%", top: "8%", size: "3.2px", opacity: 0.85, delay: "1.2s", duration: "4.2s" },
  { left: "52%", top: "70%", size: "2.3px", opacity: 0.7, delay: "2.5s", duration: "3.6s" },
  { left: "58%", top: "42%", size: "3.8px", opacity: 0.9, delay: "0.3s", duration: "4.8s" },
  { left: "65%", top: "18%", size: "2.8px", opacity: 0.8, delay: "1.8s", duration: "3.3s" },
  { left: "72%", top: "55%", size: "4.2px", opacity: 0.92, delay: "0.6s", duration: "4.4s" },
  { left: "78%", top: "28%", size: "2.6px", opacity: 0.78, delay: "2.2s", duration: "3.7s" },
  { left: "85%", top: "65%", size: "3.4px", opacity: 0.85, delay: "1.3s", duration: "4.1s" },
  { left: "92%", top: "38%", size: "4.6px", opacity: 0.95, delay: "0.9s", duration: "3.9s" },
  { left: "8%", top: "78%", size: "2.5px", opacity: 0.75, delay: "2.8s", duration: "3.4s" },
  { left: "15%", top: "52%", size: "3.9px", opacity: 0.9, delay: "0.4s", duration: "4.6s" },
  { left: "22%", top: "88%", size: "2.7px", opacity: 0.78, delay: "1.6s", duration: "3.1s" },
  { left: "28%", top: "5%", size: "4.1px", opacity: 0.92, delay: "1.1s", duration: "4.3s" },
  { left: "35%", top: "72%", size: "2.4px", opacity: 0.72, delay: "2.3s", duration: "3.55s" },
  { left: "42%", top: "48%", size: "3.7px", opacity: 0.88, delay: "0.7s", duration: "4.7s" },
  { left: "48%", top: "22%", size: "2.9px", opacity: 0.8, delay: "1.9s", duration: "3.25s" },
  { left: "55%", top: "82%", size: "4.3px", opacity: 0.9, delay: "0.2s", duration: "4.9s" },
  { left: "62%", top: "12%", size: "2.5px", opacity: 0.74, delay: "2.6s", duration: "3.45s" },
  { left: "68%", top: "68%", size: "3.5px", opacity: 0.82, delay: "1.4s", duration: "4.05s" },
  { left: "75%", top: "32%", size: "4.5px", opacity: 0.93, delay: "0.1s", duration: "3.95s" },
  { left: "82%", top: "92%", size: "2.6px", opacity: 0.76, delay: "2.9s", duration: "3.15s" },
  { left: "88%", top: "58%", size: "3.3px", opacity: 0.84, delay: "1.7s", duration: "4.15s" },
  { left: "95%", top: "75%", size: "3.1px", opacity: 0.82, delay: "0.95s", duration: "3.85s" },
  { left: "3%", top: "35%", size: "4.8px", opacity: 0.94, delay: "0.35s", duration: "4.55s" },
  { left: "10%", top: "95%", size: "2.2px", opacity: 0.7, delay: "2.45s", duration: "3.05s" },
  { left: "17%", top: "62%", size: "3.8px", opacity: 0.87, delay: "1.25s", duration: "4.25s" },
  { left: "24%", top: "3%", size: "2.8px", opacity: 0.78, delay: "2.15s", duration: "3.65s" },
  { left: "30%", top: "85%", size: "4.2px", opacity: 0.9, delay: "0.85s", duration: "4.35s" },
  { left: "37%", top: "50%", size: "2.6px", opacity: 0.76, delay: "1.55s", duration: "3.75s" },
  { left: "44%", top: "20%", size: "3.6px", opacity: 0.85, delay: "2.05s", duration: "3.2s" },
  { left: "50%", top: "78%", size: "4.4px", opacity: 0.91, delay: "0.65s", duration: "4.65s" },
  { left: "57%", top: "40%", size: "2.3px", opacity: 0.72, delay: "1.85s", duration: "3.35s" },
  { left: "64%", top: "8%", size: "3.8px", opacity: 0.88, delay: "0.45s", duration: "4.75s" },
  { left: "70%", top: "90%", size: "3px", opacity: 0.8, delay: "2.35s", duration: "3.5s" },
  { left: "77%", top: "55%", size: "4.2px", opacity: 0.92, delay: "1.05s", duration: "4.25s" },
  { left: "84%", top: "25%", size: "2.4px", opacity: 0.74, delay: "2.75s", duration: "3.1s" },
  { left: "90%", top: "70%", size: "3.4px", opacity: 0.84, delay: "0.55s", duration: "4.45s" },
  { left: "97%", top: "45%", size: "3.2px", opacity: 0.82, delay: "1.45s", duration: "3.9s" },
  { left: "6%", top: "65%", size: "4.6px", opacity: 0.93, delay: "0.25s", duration: "4.85s" },
  { left: "13%", top: "12%", size: "2.7px", opacity: 0.77, delay: "2.55s", duration: "3.28s" },
  { left: "20%", top: "80%", size: "4px", opacity: 0.89, delay: "0.75s", duration: "4.18s" },
  { left: "27%", top: "48%", size: "2.6px", opacity: 0.76, delay: "1.95s", duration: "3.62s" },
  { left: "33%", top: "15%", size: "4px", opacity: 0.9, delay: "0.15s", duration: "4.52s" },
  { left: "40%", top: "92%", size: "2.4px", opacity: 0.73, delay: "2.85s", duration: "3.12s" },
  { left: "47%", top: "58%", size: "3.6px", opacity: 0.86, delay: "1.35s", duration: "4.08s" },
  { left: "53%", top: "28%", size: "4.6px", opacity: 0.94, delay: "0.05s", duration: "3.98s" },
  { left: "60%", top: "75%", size: "2.4px", opacity: 0.73, delay: "2.65s", duration: "3.42s" },
  { left: "67%", top: "38%", size: "3.4px", opacity: 0.84, delay: "1.75s", duration: "4.12s" },
  { left: "73%", top: "5%", size: "3px", opacity: 0.81, delay: "0.95s", duration: "3.82s" },
  { left: "80%", top: "85%", size: "4.8px", opacity: 0.95, delay: "0.45s", duration: "4.62s" },
  { left: "87%", top: "52%", size: "2.2px", opacity: 0.71, delay: "2.25s", duration: "3.22s" },
  { left: "93%", top: "18%", size: "3.8px", opacity: 0.88, delay: "1.15s", duration: "4.32s" },
  { left: "4%", top: "42%", size: "2.8px", opacity: 0.79, delay: "2.05s", duration: "3.72s" },
  { left: "11%", top: "88%", size: "4.4px", opacity: 0.92, delay: "0.35s", duration: "4.42s" },
  { left: "19%", top: "32%", size: "2.2px", opacity: 0.72, delay: "1.65s", duration: "3.52s" },
  { left: "26%", top: "68%", size: "3.6px", opacity: 0.86, delay: "0.85s", duration: "4.22s" },
  { left: "31%", top: "22%", size: "4.9px", opacity: 0.96, delay: "2.15s", duration: "3.08s" },
  { left: "39%", top: "95%", size: "2.3px", opacity: 0.72, delay: "0.55s", duration: "4.88s" },
  { left: "46%", top: "8%", size: "3.2px", opacity: 0.83, delay: "1.45s", duration: "3.38s" },
  { left: "51%", top: "55%", size: "4.1px", opacity: 0.9, delay: "2.75s", duration: "4.05s" },
  { left: "59%", top: "72%", size: "2.7px", opacity: 0.77, delay: "0.65s", duration: "3.95s" },
  { left: "66%", top: "45%", size: "3.8px", opacity: 0.88, delay: "1.85s", duration: "4.55s" },
  { left: "71%", top: "12%", size: "2.4px", opacity: 0.73, delay: "0.25s", duration: "3.68s" },
  { left: "79%", top: "82%", size: "4.3px", opacity: 0.91, delay: "2.45s", duration: "4.15s" },
  { left: "86%", top: "35%", size: "2.3px", opacity: 0.72, delay: "1.25s", duration: "3.48s" },
  { left: "91%", top: "62%", size: "3.4px", opacity: 0.84, delay: "0.95s", duration: "4.28s" },
  { left: "98%", top: "28%", size: "3px", opacity: 0.8, delay: "2.35s", duration: "3.58s" },
  { left: "7%", top: "75%", size: "4.5px", opacity: 0.93, delay: "0.15s", duration: "4.48s" },
  { left: "14%", top: "48%", size: "2.6px", opacity: 0.76, delay: "1.55s", duration: "3.18s" },
  { left: "21%", top: "5%", size: "3.7px", opacity: 0.87, delay: "2.85s", duration: "4.38s" },
  { left: "29%", top: "90%", size: "2.8px", opacity: 0.78, delay: "0.75s", duration: "3.78s" },
  { left: "36%", top: "58%", size: "4.2px", opacity: 0.9, delay: "1.05s", duration: "4.68s" },
  { left: "43%", top: "25%", size: "2.5px", opacity: 0.75, delay: "2.65s", duration: "3.28s" },
  { left: "49%", top: "70%", size: "3.4px", opacity: 0.84, delay: "0.45s", duration: "4.18s" },
  { left: "56%", top: "38%", size: "3px", opacity: 0.81, delay: "1.75s", duration: "3.88s" },
  { left: "63%", top: "85%", size: "4.7px", opacity: 0.94, delay: "0.05s", duration: "4.78s" },
  { left: "69%", top: "15%", size: "2.5px", opacity: 0.74, delay: "2.95s", duration: "3.38s" },
  { left: "76%", top: "62%", size: "3.6px", opacity: 0.86, delay: "1.35s", duration: "4.48s" },
  { left: "83%", top: "42%", size: "4.4px", opacity: 0.92, delay: "0.65s", duration: "3.68s" },
  { left: "89%", top: "78%", size: "2.3px", opacity: 0.72, delay: "2.15s", duration: "4.58s" },
  { left: "96%", top: "52%", size: "3.2px", opacity: 0.83, delay: "1.45s", duration: "3.18s" },
  { left: "2%", top: "20%", size: "3.9px", opacity: 0.89, delay: "0.85s", duration: "4.88s" },
  { left: "9%", top: "65%", size: "2.6px", opacity: 0.76, delay: "2.55s", duration: "3.48s" },
  { left: "16%", top: "35%", size: "4.2px", opacity: 0.91, delay: "1.65s", duration: "4.28s" },
  { left: "23%", top: "92%", size: "2.2px", opacity: 0.71, delay: "0.35s", duration: "3.58s" },
  { left: "34%", top: "8%", size: "3.6px", opacity: 0.86, delay: "2.25s", duration: "4.08s" },
  { left: "41%", top: "55%", size: "2.9px", opacity: 0.79, delay: "1.15s", duration: "3.78s" },
  { left: "54%", top: "82%", size: "4.6px", opacity: 0.93, delay: "0.55s", duration: "4.38s" },
  { left: "61%", top: "18%", size: "2.3px", opacity: 0.72, delay: "2.05s", duration: "3.88s" },
  { left: "74%", top: "48%", size: "3.4px", opacity: 0.84, delay: "0.25s", duration: "4.98s" },
  { left: "81%", top: "72%", size: "4.8px", opacity: 0.95, delay: "1.95s", duration: "3.28s" },
  { left: "94%", top: "12%", size: "2.2px", opacity: 0.71, delay: "0.75s", duration: "4.68s" },
];

// Static orb data - more visible for live background
const ORB_DATA = [
  { id: 1, left: "15%", top: "20%", size: "600px", color: "rgba(59, 130, 246, 0.12)" },
  { id: 2, left: "75%", top: "60%", size: "700px", color: "rgba(139, 92, 246, 0.1)" },
  { id: 3, left: "50%", top: "80%", size: "650px", color: "rgba(6, 182, 212, 0.11)" },
];

const StarBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep navy base - cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>

      {/* Glowing orbs */}
      {ORB_DATA.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-3xl animate-float-slow"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Stars container with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {STAR_DATA.map((star, index) => {
          // Create variation for different movement patterns
          const movementType = index % 4; // 4 different movement patterns
          const isStaticStar = index % 7 === 0; // Only ~14% of stars are static for more movement
          
          return (
            <div
              key={index}
              className={`absolute rounded-full bg-white ${
                isStaticStar ? 'animate-twinkle-static' : `animate-star-float-${movementType}`
              }`}
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: star.duration,
                willChange: 'transform, opacity',
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
              }}
            />
          );
        })}
      </div>

      {/* Additional subtle gradient overlay - smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40"></div>

      <style jsx>{`
        /* Star float patterns with SIGNIFICANT visible movement */
        @keyframes star-float-0 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.9;
          }
          25% {
            transform: translate(15px, -20px) scale(1.15);
            opacity: 0.5;
          }
          50% {
            transform: translate(8px, -35px) scale(0.9);
            opacity: 0.3;
          }
          75% {
            transform: translate(-10px, -20px) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.9;
          }
        }

        @keyframes star-float-1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.85;
          }
          33% {
            transform: translate(-20px, 25px) scale(1.25);
            opacity: 0.4;
          }
          66% {
            transform: translate(-30px, 15px) scale(0.85);
            opacity: 0.95;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.85;
          }
        }

        @keyframes star-float-2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          30% {
            transform: translate(25px, 18px) scale(0.8);
            opacity: 0.95;
          }
          60% {
            transform: translate(18px, -18px) scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes star-float-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.75;
          }
          40% {
            transform: translate(-12px, -30px) scale(1.35);
            opacity: 0.9;
          }
          70% {
            transform: translate(8px, -22px) scale(0.75);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.75;
          }
        }

        /* Twinkle for nearly static stars */
        @keyframes twinkle-static {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1);
          }
          25% {
            opacity: 0.4;
            transform: scale(1.15);
          }
          50% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        /* Orb floating animation */
        @keyframes float-slow {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        /* Apply animations */
        .animate-twinkle-static {
          animation: twinkle-static 3s ease-in-out infinite;
        }

        .animate-star-float-0 {
          animation: star-float-0 6s ease-in-out infinite;
        }

        .animate-star-float-1 {
          animation: star-float-1 7s ease-in-out infinite;
        }

        .animate-star-float-2 {
          animation: star-float-2 5s ease-in-out infinite;
        }

        .animate-star-float-3 {
          animation: star-float-3 6.5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        /* Disable animations for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-twinkle-static,
          .animate-star-float-0,
          .animate-star-float-1,
          .animate-star-float-2,
          .animate-star-float-3,
          .animate-float-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
