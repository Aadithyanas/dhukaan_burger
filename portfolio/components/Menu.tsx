import React from 'react';
import Image from 'next/image';

export default function Menu() {
  return (
    <section id="menu" className="w-full bg-gradient-to-b from-[#f1a900] to-[#e08f00] py-20 relative overflow-hidden">
      
      {/* Decorative text behind everything */}
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-[10rem] md:text-[15rem] font-heading text-white opacity-20 whitespace-nowrap leading-none tracking-tighter uppercase select-none pointer-events-none">
        ARTESANAL
      </h2>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col space-y-24 mt-12">
        
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between group">
          {/* Burger Left */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image 
              src="/images/menu/1_v2.png" 
              alt="Classic Burger" 
              fill 
              className="object-contain drop-shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-500"
              style={{ mixBlendMode: 'darken' }}
            />
          </div>
          
          {/* Content Right */}
          <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-12 relative mt-16 md:mt-0">
            {/* Huge Number */}
            <span className="absolute -top-16 -left-4 text-8xl md:text-9xl font-heading text-white opacity-80 leading-none drop-shadow-md z-0">01.</span>
            
            {/* Title Badge */}
            <div className="bg-[#d2691e] px-4 py-2 rounded-full mb-4 relative z-10 shadow-lg border-2 border-[#e67e22]/50">
              <h3 className="font-heading text-2xl text-white uppercase tracking-wider mt-1">CLASSIC BURGER</h3>
            </div>
            
            <p className="text-[#5a3a11] text-sm md:text-base font-medium max-w-sm mb-4 relative z-10">
              Brioche bun, juicy beef patty, fresh tomatoes, lettuce, melted cheese, onions, and our special house sauce.
            </p>
            
            {/* Price Badge */}
            <div className="bg-[#d2691e] px-4 py-1 rounded-full relative z-10 shadow-md">
              <span className="font-heading text-xl text-white mt-1">₹99</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between group">
          {/* Burger Right */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image 
              src="/images/menu/2_v2.png" 
              alt="Dhukaan Special Prime" 
              fill 
              className="object-contain drop-shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-500"
              style={{ mixBlendMode: 'darken' }}
            />
          </div>
          
          {/* Content Left */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end pr-0 md:pr-12 relative mt-16 md:mt-0">
            {/* Huge Number */}
            <span className="absolute -top-16 -left-4 md:-left-auto md:-right-4 text-8xl md:text-9xl font-heading text-white opacity-80 leading-none drop-shadow-md z-0">02.</span>
            
            {/* Title Badge */}
            <div className="bg-[#d2691e] px-4 py-2 rounded-full mb-4 relative z-10 shadow-lg border-2 border-[#e67e22]/50">
              <h3 className="font-heading text-2xl text-white uppercase tracking-wider mt-1">DHUKAAN SPECIAL</h3>
            </div>
            
            <p className="text-[#5a3a11] text-sm md:text-base font-medium max-w-sm mb-4 relative z-10 md:text-right">
              Brioche bun, double beef patties, crispy bacon, tomatoes, lettuce, double cheese, and special sauce.
            </p>
            
            {/* Price Badge */}
            <div className="bg-[#d2691e] px-4 py-1 rounded-full relative z-10 shadow-md">
              <span className="font-heading text-xl text-white mt-1">₹149</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between group">
          {/* Burger Left */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image 
              src="/images/menu/3_v2.png" 
              alt="Dynamite Dhukaan" 
              fill 
              className="object-contain drop-shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-500"
              style={{ mixBlendMode: 'darken' }}
            />
          </div>
          
          {/* Content Right */}
          <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-12 relative mt-16 md:mt-0">
            {/* Huge Number */}
            <span className="absolute -top-16 -left-4 text-8xl md:text-9xl font-heading text-white opacity-80 leading-none drop-shadow-md z-0">03.</span>
            
            {/* Title Badge */}
            <div className="bg-[#d2691e] px-4 py-2 rounded-full mb-4 relative z-10 shadow-lg border-2 border-[#e67e22]/50">
              <h3 className="font-heading text-2xl text-white uppercase tracking-wider mt-1">DYNAMITE BURGER</h3>
            </div>
            
            <p className="text-[#5a3a11] text-sm md:text-base font-medium max-w-sm mb-4 relative z-10">
              Brioche bun, crispy fried chicken, spicy jalapeños, tomatoes, lettuce, cheese, onions, and spicy mayo.
            </p>
            
            {/* Price Badge */}
            <div className="bg-[#d2691e] px-4 py-1 rounded-full relative z-10 shadow-md">
              <span className="font-heading text-xl text-white mt-1">₹199</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
