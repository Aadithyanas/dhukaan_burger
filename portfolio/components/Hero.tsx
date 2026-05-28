"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent, MotionValue } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const FRAME_COUNT = 180;

// Helper to get image URL based on index
const currentFrame = (index: number) => 
  `/images/herosection/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

// Sub-component for individual flying letters
const AnimatedLetter = ({ letter, index, progress, total }: { letter: string, index: number, progress: MotionValue<number>, total: number }) => {
  // Stagger the start time of each letter between 80% and 95% of the scroll
  const start = 0.8 + (index * (0.15 / total));
  const end = start + 0.05; // 5% scroll duration for the letter to fly in
  
  const opacity = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const y = useTransform(progress, [start, end], [-100, 0], { clamp: true });
  const scale = useTransform(progress, [start, end], [1.5, 1], { clamp: true });

  return (
    <motion.span 
      style={{ opacity, y, scale, display: "inline-block", paddingRight: letter === " " ? "2.5rem" : "0.2rem" }} 
      className="text-white"
    >
      {letter}
    </motion.span>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to a frame number from 1 to 180
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload all 180 images for smooth playback
  // Preload all 180 images in the background
  useEffect(() => {
    let isMounted = true;
    const imgs: HTMLImageElement[] = [];
    
    // Create image objects and trigger network requests
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      imgs.push(img);
    }
    
    // Immediately store the image objects so renderFrame can use them when ready
    setImages(imgs);

    // Only wait for the VERY FIRST frame to load before hiding the loading screen
    if (imgs[0]) {
      if (imgs[0].complete) {
        setLoaded(true);
      } else {
        imgs[0].onload = () => { if (isMounted) setLoaded(true); };
        imgs[0].onerror = () => { if (isMounted) setLoaded(true); };
      }
    }

    return () => { isMounted = false; };
  }, []);

  // Set up canvas and render logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    
    const img = images[index - 1]; // Array is 0-indexed
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Make canvas match its container's size
    if (canvas.parentElement) {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate aspect ratio to cover the screen completely
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    // Add a 15% zoom to crop out unwanted elements at the edges (like the sparkle)
    const ratio  = Math.max(hRatio, vRatio) * 1.15; // Use cover with extra zoom
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;  
    
    context.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Draw the first frame as soon as images are loaded
  useEffect(() => {
    if (loaded && images.length > 0) {
      renderFrame(1);
    }
  }, [loaded, images]);

  // Handle scroll events and draw corresponding frame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!loaded) return;
    renderFrame(Math.round(latest));
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (loaded) renderFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded, frameIndex]);


  // Text fading logic based on scroll segments
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0], { clamp: true });
  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, -100], { clamp: true });
  
  // Force unmount of initial text to guarantee it disappears
  const [showHeroText, setShowHeroText] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && showHeroText) setShowHeroText(false);
    else if (latest <= 0.1 && !showHeroText) setShowHeroText(true);
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  return (
    <div id="home" ref={containerRef} className="relative w-full h-[400vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background">
        
        {/* Loading Overlay */}
        {!loaded && (
           <div className="absolute inset-0 z-50 flex items-center justify-center bg-background">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-gray-800 border-t-accent rounded-full animate-spin mb-6"></div>
                <div className="text-accent text-sm tracking-[0.3em] font-medium uppercase animate-pulse">Preloading Assets...</div>
              </div>
           </div>
        )}

        {/* Canvas rendering the Burger Sequence */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain md:object-cover z-10 pointer-events-none" />

        {/* Background "BURGERS" Text */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none z-0">
          <h1 className="font-heading text-[18vw] leading-none text-white/5 tracking-tighter select-none whitespace-nowrap">
            BURGERS
          </h1>
        </div>

        {/* Scroll-linked Feature Texts Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center">
            
            {/* Initial Hero Text */}
            {showHeroText && (
              <div className="absolute left-8 md:left-24 top-[40%] md:top-[45%] max-w-sm pointer-events-auto">
                <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                  <h2 className="font-heading text-4xl md:text-6xl leading-none text-white mb-4 uppercase">
                    Fried Chicken<br/>Burger
                  </h2>
                  <p className="text-gray-300 text-[10px] tracking-widest leading-loose uppercase mb-8 font-medium">
                    Rocky's Special Fried Chicken Burgers. Scroll to explore.
                  </p>
                  <button className="bg-accent hover:bg-accent-hover text-black font-bold py-3 px-6 rounded-full flex items-center space-x-3 transition-colors text-xs tracking-widest w-fit shadow-[0_0_20px_rgba(255,164,0,0.3)]">
                    <span>ADD TO BAG</span>
                    <span className="bg-white rounded-full p-1 ml-2">
                      <ChevronRight size={14} className="text-black" strokeWidth={3} />
                    </span>
                  </button>
                </motion.div>
              </div>
            )}

            {/* Feature 1 */}
            <motion.div style={{ opacity: opacity2 }} className="absolute right-8 md:right-24 top-1/3 max-w-sm text-right">
              <h3 className="font-heading text-3xl md:text-5xl text-accent mb-2 uppercase drop-shadow-lg">Crispy Golden Texture</h3>
              <p className="text-gray-200 text-xs tracking-wider leading-relaxed bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-white/10">Perfectly fried to achieve the ultimate crunch in every single bite, locking in the natural flavors.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div style={{ opacity: opacity3 }} className="absolute left-8 md:left-24 top-2/3 max-w-sm">
              <h3 className="font-heading text-3xl md:text-5xl text-accent mb-2 uppercase drop-shadow-lg">Fresh Crisp Veggies</h3>
              <p className="text-gray-200 text-xs tracking-wider leading-relaxed bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-white/10">Locally sourced lettuce and ripe tomatoes for a refreshing snap that perfectly balances the rich fried chicken.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div style={{ opacity: opacity4 }} className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-sm text-right">
              <h3 className="font-heading text-3xl md:text-5xl text-accent mb-2 uppercase drop-shadow-lg">Juicy Premium Patty</h3>
              <p className="text-gray-200 text-xs tracking-wider leading-relaxed bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-white/10">100% premium chicken breast, marinated in our secret blend of spices for 24 hours.</p>
            </motion.div>

            {/* Animated DHUKAAN BURGERS Text in the Center */}
            <div className="absolute left-1/2 top-[50%] md:top-[55%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none flex whitespace-nowrap z-30">
               <h3 className="font-heading text-[7.5vw] sm:text-4xl md:text-8xl lg:text-[8rem] uppercase tracking-normal drop-shadow-xl">
                 {"DHUKAAN BURGERS".split("").map((letter, i, arr) => (
                   <AnimatedLetter key={i} letter={letter} index={i} progress={scrollYProgress} total={arr.length} />
                 ))}
               </h3>
            </div>

            {/* Huge Top Text After Scroll */}
            <motion.div 
              style={{ opacity: opacity5, scale: useTransform(scrollYProgress, [0.8, 1], [0.9, 1], { clamp: true }) }} 
              className="absolute top-[15%] md:top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20 w-full text-center"
            >
              <h4 className="text-accent text-4xl md:text-6xl font-serif italic mb-[-15px] md:mb-[-30px] z-10 drop-shadow-lg opacity-90">
                Dhukaan's
              </h4>
              <h1 className="font-heading text-[6rem] md:text-[12rem] lg:text-[15rem] leading-none text-white tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] uppercase">
                BURGER
              </h1>
            </motion.div>

            {/* Final Call to Action Button */}
            <motion.div style={{ opacity: opacity5, scale: useTransform(scrollYProgress, [0.8, 1], [0.8, 1]) }} className="absolute left-1/2 top-[70%] md:top-3/4 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto flex flex-col items-center z-40">
              <button className="bg-accent hover:bg-accent-hover text-black font-bold py-4 px-10 rounded-full flex items-center space-x-3 transition-colors text-sm tracking-widest shadow-[0_0_30px_rgba(255,164,0,0.5)] transform hover:scale-105 duration-200">
                <span>ORDER NOW</span>
              </button>
            </motion.div>
        </div>

        {/* Socials / Footer overlay (static) */}
        <div className="absolute bottom-8 w-full px-8 md:px-16 flex justify-between items-center z-20 max-w-7xl left-1/2 -translate-x-1/2">
          <div className="flex space-x-6 text-gray-400 text-sm font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors pointer-events-auto">FB</a>
            <a href="#" className="hover:text-white transition-colors pointer-events-auto">TW</a>
            <a href="#" className="hover:text-white transition-colors pointer-events-auto">IG</a>
          </div>
        </div>

      </div>
    </div>
  );
}
