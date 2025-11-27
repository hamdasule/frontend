import React from 'react';

export default function Clients() {
  const brands = [
    "LG Electronics", "LANCOME", "DIOR", "dyson", "Continental", "MAHLE", "HYUNDAI", "TOYOTA", "SAMSUNG"
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background with globe effect hint */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
         <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-blue-900/20 rounded-full blur-3xl"></div>
         <img src="https://picsum.photos/seed/earth/1920/600" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Our Clients</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            전 세계 50개국 리딩 기업들이 <br />
            두산 로봇 도입으로 생산성을 높이고, <br />
            비용을 절감했습니다.
          </h2>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {brands.map((brand, idx) => (
             <span key={idx} className="text-white font-serif text-xl md:text-2xl font-bold tracking-widest">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
}