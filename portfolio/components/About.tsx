import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FDF6E3] text-[#3B1A0A] py-20 overflow-hidden relative">
      {/* Top Heading */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <h2 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase">
          BURGERS THAT<br />HIT THE SPOT
        </h2>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10 mb-32">
        
        {/* Left Column */}
        <div className="flex flex-col items-start max-w-sm mx-auto md:mx-0">
          <h3 className="font-heading text-4xl md:text-5xl uppercase leading-none mb-6">
            Burgers Made to Satisfy Every Craving
          </h3>
          <p className="text-[#3B1A0A]/80 font-medium leading-relaxed mb-8 text-sm md:text-base">
            Fresh ingredients, bold flavors, and the perfect bite every time.
          </p>
          <button className="bg-[#3B1A0A] text-[#FDF6E3] hover:bg-[#3B1A0A]/90 font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-colors text-sm tracking-wide">
            <span>Get it now</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Center Column (Burger & Background Pill) */}
        <div className="relative flex justify-center items-center py-10 md:py-0">
          {/* Orange Pill Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-full h-[150%] bg-[#EAA043] rounded-full -z-10"></div>
          
          <div className="relative w-full max-w-[400px] aspect-square transform hover:scale-105 transition-transform duration-500">
             <Image 
               src="/images/about_burger_v2.png" 
               alt="Signature Burger" 
               fill
               className="object-cover"
               style={{ mixBlendMode: 'multiply' }}
             />
          </div>
        </div>

        {/* Right Column (Stats) */}
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center">
            <h4 className="font-heading text-4xl md:text-5xl uppercase leading-none">100%</h4>
            <p className="text-xs font-semibold uppercase tracking-widest mt-1">Fresh</p>
          </div>
          <div className="text-center">
            <h4 className="font-heading text-4xl md:text-5xl uppercase leading-none">4.9*</h4>
            <p className="text-xs font-semibold uppercase tracking-widest mt-1">Rated</p>
          </div>
          <div className="text-center">
            <h4 className="font-heading text-4xl md:text-5xl uppercase leading-none">10 min</h4>
            <p className="text-xs font-semibold uppercase tracking-widest mt-1">Delivery time</p>
          </div>
          <div className="text-center">
            <h4 className="font-heading text-4xl md:text-5xl uppercase leading-none">80%</h4>
            <p className="text-xs font-semibold uppercase tracking-widest mt-1">Sustainable</p>
          </div>
        </div>
      </div>

      {/* Gallery & Marquee Section */}
      <div className="relative w-full mb-16">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[30vh] md:h-[40vh]">
          <div className="relative w-full h-full">
             <Image src="/images/gallery/1_v2.png" alt="Lifestyle 1" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full">
             <Image src="/images/gallery/2_v2.png" alt="Lifestyle 2" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full">
             <Image src="/images/gallery/3_v2.png" alt="Lifestyle 3" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full">
             <Image src="/images/gallery/4_v2.png" alt="Lifestyle 4" fill className="object-cover" />
          </div>
        </div>

        {/* Diagonal Scrolling Marquee */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] -rotate-6 bg-[#682B10] py-4 shadow-2xl overflow-hidden z-20 border-y-[6px] border-[#4A1F0A]/50">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
            <span className="font-heading text-4xl md:text-5xl text-[#D97D30] uppercase mx-4">BACON * SPICY * SUPREME * VEGGIE * DOUBLE *</span>
          </div>
        </div>
      </div>

      {/* Footer Features */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-heading text-xl uppercase mb-2">Gourmet Burgers</h5>
          <p className="text-xs text-[#3B1A0A]/70 font-medium">Crafted with the freshest ingredients.</p>
        </div>
        <div>
          <h5 className="font-heading text-xl uppercase mb-2">Fast Service</h5>
          <p className="text-xs text-[#3B1A0A]/70 font-medium">Average order completion time is under 10 minutes.</p>
        </div>
        <div>
          <h5 className="font-heading text-xl uppercase mb-2">Sustainability Focus</h5>
          <p className="text-xs text-[#3B1A0A]/70 font-medium">Over 80% of packaging is recyclable.</p>
        </div>
        <div>
          <h5 className="font-heading text-xl uppercase mb-2">Customer Satisfaction</h5>
          <p className="text-xs text-[#3B1A0A]/70 font-medium">Rated 4.9/5 by thousands of happy customers.</p>
        </div>
      </div>
    </section>
  );
}
