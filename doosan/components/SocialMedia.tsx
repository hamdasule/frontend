import React from 'react';
import { Linkedin, Youtube, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialMedia() {
  const feeds = [
    { type: 'youtube', icon: <Youtube size={16} className="text-red-600"/>, image: "https://picsum.photos/seed/social1/400/300", title: "DOOSAN ROBOTICS", desc: "@DOOSANROBOTICS • 1 month ago" },
    { type: 'youtube', icon: <Youtube size={16} className="text-red-600"/>, image: "https://picsum.photos/seed/social2/400/300", title: "DOOSAN ROBOTICS", desc: "@DOOSANROBOTICS • 2 months ago" },
    { type: 'facebook', icon: <Facebook size={16} className="text-blue-600"/>, image: "https://picsum.photos/seed/social3/400/300", title: "Doosan Robotics", desc: "@DoosanRobotics • 3 months ago" },
    { type: 'facebook', icon: <Facebook size={16} className="text-blue-600"/>, image: "https://picsum.photos/seed/social4/400/300", title: "Doosan Robotics", desc: "@DoosanRobotics • 4 months ago" },
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background with tech grid hint */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Social Media</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            두산로보틱스의 혁신적인 기술과 <br />
            소식을 만나보세요.
          </h2>
          <div className="flex gap-4 text-gray-400">
            <Linkedin className="hover:text-white cursor-pointer" />
            <Youtube className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Facebook className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="relative">
          {/* Slider Controls (Visual only for this demo) */}
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm">
            <ChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeds.map((feed, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img src={feed.image} alt="Social Feed" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  {feed.type === 'youtube' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-start gap-3">
                  <div className="mt-1">{feed.icon}</div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{feed.title}</h5>
                    <p className="text-xs text-gray-500 mt-1">{feed.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}