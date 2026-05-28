import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0705] text-white pt-20 pb-10 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center relative bg-transparent shrink-0">
                 <span className="font-heading text-lg leading-none tracking-tight transform -skew-x-6 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] text-accent">DB</span>
               </div>
               <h3 className="font-heading text-3xl uppercase tracking-wider">Dhukaan<br/><span className="text-accent">Burger</span></h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the boldest, juiciest, and most flavor-packed burgers in town. Handcrafted with passion, served with love.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-xl uppercase tracking-widest text-accent">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span>123 Burger Street, Foodie Lane, <br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span>hello@dhukaanburger.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-xl uppercase tracking-widest text-accent">Hours</h4>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="text-accent shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-accent shrink-0" size={18} />
                <div>
                  <p className="text-white font-medium">Saturday - Sunday</p>
                  <p>10:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Socials & Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-xl uppercase tracking-widest text-accent">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for offers!</p>
              <div className="flex w-full">
                <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-accent w-full rounded-l-md" />
                <button className="bg-accent text-black font-bold px-4 py-2 text-sm uppercase tracking-wider rounded-r-md hover:bg-accent-hover transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Dhukaan Burger. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
