import React from 'react';
import Image from 'next/image';

const collageImages = [
  "Screenshot 2026-05-28 202749.png",
  "Screenshot 2026-05-28 202800.png",
  "Screenshot 2026-05-28 202808.png",
  "Screenshot 2026-05-28 205107.png",
  "Screenshot 2026-05-28 205126.png",
  "Screenshot 2026-05-28 205138.png",
  "Screenshot 2026-05-28 205045.png",
  "Screenshot 2026-05-28 205155.png",
  "Screenshot 2026-05-28 205234.png",
  "Screenshot 2026-05-28 205251.png",
  "Screenshot 2026-05-28 205311.png",
  "Screenshot 2026-05-28 205330.png"
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative w-full min-h-screen py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-accent">
      
      {/* Gradient overlay to smoothly transition or add depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-0"></div>

      {/* Giant Background Text */}
      <div className="absolute top-0 left-0 w-full h-[60vh] flex items-start justify-center overflow-hidden z-0 pointer-events-none opacity-40">
        <h2 className="text-[25vw] leading-none font-heading text-white/50 uppercase tracking-tight transform scale-x-[0.6] scale-y-[2.2] origin-top mt-10">
          HIGHLIGHTS
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-12 md:mb-16 text-center mt-[10vh]">
        <div className="flex flex-col items-center leading-[0.85]">
          <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-carter text-[#1e1f1c] tracking-[-0.05em] uppercase relative z-10 translate-y-3 md:translate-y-6">
            DHUKAAN
          </span>
          <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-carter text-[#1e1f1c] tracking-[-0.05em] uppercase relative z-20">
            BURGER
          </span>
        </div>
      </div>

      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Scrollable Container */}
      <div className="w-full max-w-6xl mx-auto relative z-10 max-h-[60vh] overflow-y-auto no-scrollbar rounded-2xl p-2 md:p-6 shadow-2xl border border-white/20 bg-black/40 backdrop-blur-md">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
          
          {collageImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-full mb-4 md:mb-6 break-inside-avoid group cursor-pointer"
            >
              <Image 
                src={`/images/highlights/${src}`}
                alt={`Collage Image ${idx + 1}`}
                width={600}
                height={800}
                className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-700 ease-out brightness-90 group-hover:brightness-110 group-hover:scale-[1.03]"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Highlights;
