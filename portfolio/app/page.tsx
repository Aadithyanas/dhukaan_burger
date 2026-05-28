import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen relative bg-background">
      
      {/* Left Sidebar Div */}
      <div className="fixed left-0 top-0 w-16 md:w-32 h-screen flex items-center justify-center z-40 bg-background border-r border-white/5 shrink-0 overflow-hidden">
        <h2 className="text-accent font-heading text-[5vh] md:text-[8vh] leading-none tracking-wider uppercase transform -rotate-90 whitespace-nowrap opacity-90 drop-shadow-xl">
          Dhukaan Burgers
        </h2>
      </div>

      {/* Right Main Content Div */}
      <div className="flex flex-col flex-1 relative min-w-0 ml-16 md:ml-32">
        <div className="sticky top-0 w-full z-50 h-0">
          <Navbar />
        </div>
        
        <Hero />
        <About />
        <Menu />
        <Highlights />
        <Footer />
      </div>

    </main>
  );
}
