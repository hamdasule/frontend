import React from 'react';
import { Rocket, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="bg-blue-600 p-1.5 rounded-md">
                <Rocket size={20} />
              </div>
              <span className="text-xl font-bold">BrandLogo</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Creating digital experiences that matter. We build websites that are fast, responsive, and easy to use.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#service" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">App Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Ok
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BrandLogo. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;