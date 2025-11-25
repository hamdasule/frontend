import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'Web Dev', img: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'Finance Dashboard', category: 'UI Design', img: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Travel App', category: 'Mobile', img: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Marketing Campaign', category: 'Branding', img: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Social Network', category: 'Web App', img: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Healthcare Portal', category: 'Enterprise', img: 'https://picsum.photos/600/400?random=6' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Featured Projects</h2>
          </div>
          <button className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-slate-100">
              {/* Image with zoom effect */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 font-medium text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors" aria-label="View Project">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;