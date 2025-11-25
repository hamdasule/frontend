import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Build Modern Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              With React & Tailwind
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help ambitious businesses scale their digital presence with cutting-edge web technologies and user-centric design patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#service"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-transform hover:-translate-y-1 shadow-lg shadow-blue-600/30"
            >
              Our Services
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border border-slate-600 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;