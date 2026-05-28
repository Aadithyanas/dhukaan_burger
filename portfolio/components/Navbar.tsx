import Link from 'next/link';
import { Home, Info, Utensils, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-4 md:top-1/2 md:-translate-y-1/2 md:right-8 flex flex-row md:flex-col gap-4 md:gap-6 bg-[#382b22]/90 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/10 z-[100] shadow-xl">
      <Link href="#home" className="text-white hover:text-accent transition-colors p-2 rounded-full flex items-center justify-center">
        <Home size={20} />
      </Link>
      <Link href="#about" className="text-white hover:text-accent transition-colors p-2 rounded-full flex items-center justify-center">
        <Info size={20} />
      </Link>
      <Link href="#menu" className="text-white hover:text-accent transition-colors p-2 rounded-full flex items-center justify-center">
        <Utensils size={20} />
      </Link>
      <Link href="#highlights" className="text-white hover:text-accent transition-colors p-2 rounded-full flex items-center justify-center">
        <Sparkles size={20} />
      </Link>
    </nav>
  );
}
