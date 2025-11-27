import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Clients', href: '#clients' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Products', href: '#products' },
    { label: 'Support', href: '#support' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm py-3' : 'bg-transparent py-5'} text-white border-b border-white/10`}>
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tighter uppercase italic">Doosan</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 font-medium text-sm">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a href="#" className="hidden md:block px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-slate-900 transition-all">Service Request</a>
          <a href="#" className="hidden md:block px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-slate-900 transition-all">Partner Service <span className="ml-1">↗</span></a>
          
          <div className="flex items-center gap-4 ml-4">
            <button className="hover:text-blue-400"><Globe size={20} /></button>
            <button className="hover:text-blue-400">Doosan Robotics</button>
            <button className="lg:hidden hover:text-blue-400" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 pb-4 border-t border-white/10">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}