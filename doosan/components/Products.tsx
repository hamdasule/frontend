import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Prime",
    image: "https://picsum.photos/seed/robot1/400/400",
    desc: ""
  },
  {
    name: "High-Power",
    image: "https://picsum.photos/seed/robot2/400/400",
    desc: ""
  },
  {
    name: "Masterpiece",
    image: "https://picsum.photos/seed/robot3/400/400",
    desc: ""
  },
  {
    name: "Agile",
    image: "https://picsum.photos/seed/robot4/400/400",
    desc: ""
  }
];

const series = [
  {
    category: "Masterpiece",
    name: "M-SERIES",
    desc: "최고사양을 고집한 프리미엄 협동로봇, M시리즈!",
    tags: ["M1509", "M1013", "M0617", "M0609"],
    image: "https://picsum.photos/seed/mseries/500/300"
  },
  {
    category: "Agile",
    name: "A-SERIES",
    desc: "협동로봇이 필요한 곳, 어디서나 도입이 용이한 A시리즈",
    tags: ["A0912S", "A0912", "A0509S", "A0509"],
    image: "https://picsum.photos/seed/aseries/500/300"
  },
  {
    category: "Edge",
    name: "E-SERIES",
    desc: "식음료 산업에 가장 최적화된 E시리즈",
    tags: ["E0509"],
    image: "https://picsum.photos/seed/eseries/500/300"
  }
]

export default function Products() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Products</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            전 세계 최대 규모의 <br /> Cobot 라인업
          </h2>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden p-6 text-slate-900 group cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="aspect-square mb-4 flex items-center justify-center">
                 <img src={p.image} className="max-w-full max-h-full object-contain mix-blend-multiply" alt={p.name}/>
              </div>
              <h4 className="font-bold text-lg">{p.name}</h4>
            </div>
          ))}
        </div>

        {/* Decorative Divider Area */}
        <div className="relative py-20 border-t border-white/10 mb-20 overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <span className="text-[10vw] font-black italic uppercase tracking-tighter">Doosan</span>
           </div>
        </div>

        {/* Detailed Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {series.map((s, i) => (
             <div key={i} className="bg-[#111] border border-white/10 rounded-xl overflow-hidden group hover:border-white/30 transition-colors">
                <div className="h-64 bg-white p-8 flex items-center justify-center relative">
                  <img src={s.image} className="max-w-full max-h-full object-contain" alt={s.name} />
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-400 mb-2">{s.category}</div>
                  <h3 className="text-3xl font-bold mb-4">{s.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-10">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#1A2332] text-blue-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
           ))}
           
           <div className="flex items-center justify-center h-full min-h-[300px] border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight />
                </div>
                <span className="text-sm font-medium">전체 라인업 보기</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}