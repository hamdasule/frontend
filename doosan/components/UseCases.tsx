import React from 'react';
import { ChevronDown } from 'lucide-react';

const cases = [
  {
    id: 1,
    tag: "제조",
    subtag: "팔레타이징",
    title: "Palletizing Solution",
    subtitle: "Case Study",
    image: "https://picsum.photos/seed/factory1/400/300"
  },
  {
    id: 2,
    tag: "제조",
    subtag: "레이저 용접",
    title: "레이저 로봇 용접",
    subtitle: "Cobot Solution",
    image: "https://picsum.photos/seed/weld/400/300"
  },
  {
    id: 3,
    tag: "제조",
    subtag: "샌딩",
    title: "Sanding (샌딩)",
    subtitle: "Cobot Solution",
    image: "https://picsum.photos/seed/sanding/400/300"
  },
  {
    id: 4,
    tag: "제조",
    subtag: "머신텐딩",
    title: "공작기계 보조 작업",
    subtitle: "두산 M0617",
    image: "https://picsum.photos/seed/machine/400/300"
  },
  {
    id: 5,
    tag: "서비스",
    subtag: "Dr.Presso",
    title: "DR.PRESSO Jeju Food & Wine Festival",
    subtitle: "Food Tech",
    image: "https://picsum.photos/seed/coffee/400/300"
  },
  {
    id: 6,
    tag: "서비스",
    subtag: "튀김",
    title: "학교 단체급식 튀김로봇 솔루션",
    subtitle: "Food Tech",
    image: "https://picsum.photos/seed/fry/400/300"
  },
  {
    id: 7,
    tag: "서비스",
    subtag: "공항 수하물 핸들링",
    title: "Test met bagagerobot",
    subtitle: "",
    image: "https://picsum.photos/seed/airport/400/300"
  },
  {
    id: 8,
    tag: "서비스",
    subtag: "전기차 충전",
    title: "EV Charging Robot",
    subtitle: "Doosan Cobot Solution",
    image: "https://picsum.photos/seed/ev/400/300"
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Use cases</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              로봇 도입으로 일하는 방식이 새로워집니다.
            </h2>
            <p className="text-gray-600">
              <a href="#" className="text-blue-600 hover:underline">다양한 성공사례</a>를 통해 일터를 혁신할 새로운 아이디어를 얻어보세요.
            </p>
          </div>
          <button className="mt-6 md:mt-0 flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
            더 많은 도입사례 <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-medium opacity-80 mb-1">{item.subtitle}</div>
                  <div className="text-xl font-bold leading-tight">{item.title}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 border border-blue-200 text-blue-600 text-xs rounded-sm">{item.tag}</span>
                <span className="text-sm text-gray-600">{item.subtag}</span>
              </div>
            </div>
          ))}
          
          {/* Add a few wider marketing cards as shown in the screenshot */}
          <div className="col-span-1 md:col-span-2 relative rounded-lg overflow-hidden h-64 group cursor-pointer">
             <img src="https://picsum.photos/seed/ysl/800/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
             <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 w-fit mb-2">Doosan Robotics</span>
                <h3 className="text-white text-2xl font-bold">Yves Saint Laurent</h3>
                <div className="flex gap-2 mt-4 text-xs text-white/80">
                  <span className="border border-white/40 px-2 py-1">이벤트 & 전시</span>
                  <span className="py-1">입생로랑 팝업 스토어 이벤트</span>
                </div>
             </div>
          </div>

           <div className="col-span-1 md:col-span-2 relative rounded-lg overflow-hidden h-64 group cursor-pointer">
             <img src="https://picsum.photos/seed/robotland/800/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
             <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <span className="text-blue-300 font-bold mb-1">Service</span>
                <h3 className="text-white text-2xl font-bold">Masan Robot Land <br/> Doosan Robotics x AMR Labs</h3>
                 <div className="flex gap-2 mt-4 text-xs text-white/80">
                  <span className="border border-white/40 px-2 py-1">이벤트 & 전시</span>
                  <span className="py-1">마산 로봇랜드 전시</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}