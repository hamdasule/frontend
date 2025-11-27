import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto pt-24 px-6 mb-12">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-lg font-medium text-slate-900">Solutions</h2>
           <a href="#" className="flex items-center text-sm font-medium hover:text-blue-600">
             전체 솔루션 보기 <ArrowRight size={16} className="ml-1"/>
           </a>
        </div>

        {/* Feature 1: Dr. Presso */}
        <div className="flex flex-col lg:flex-row bg-[#F9F9F7] rounded-lg overflow-hidden mb-8">
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold w-fit mb-6">서비스용</span>
            <h3 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">Dr.Presso</h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
              탁월한 안전성과 편의성을 자랑하는 두산로보틱스의 국내 1위 협동로봇이 최고급 커피머신과 만나 전문 리저브에 버금가는 양질의 서비스를 제공하며, 객관적인 인터페이스로 손쉬운 유지보수가 가능합니다.
            </p>
          </div>
          <div className="flex-1 min-h-[400px]">
             <img src="https://picsum.photos/seed/drpresso/800/600" className="w-full h-full object-cover" alt="Dr Presso Robot" />
          </div>
        </div>

        {/* Feature 2: Palletizing */}
        <div className="flex flex-col-reverse lg:flex-row bg-[#F0F2F5] rounded-lg overflow-hidden">
          <div className="flex-1 min-h-[400px]">
             <img src="https://picsum.photos/seed/pallet/800/600" className="w-full h-full object-cover" alt="Palletizing Robot" />
          </div>
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold w-fit mb-6">산업용</span>
            <h3 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">Palletizing</h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
              팔레타이징 솔루션은 물류 및 운송 과정에서 물건을 팔레트에 정렬하거나 적재하는 반복적이고 힘든 작업을 자동화하여 생산 효율성을 극대화합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 3: Training Kit - Full Width Blue */}
      <div className="bg-[#003087] text-white py-24 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center">
           <div className="flex-1 mb-10 lg:mb-0">
              <h3 className="text-5xl md:text-7xl font-bold mb-8">Training Kit</h3>
              <p className="text-blue-100 max-w-xl leading-relaxed">
                두산로보틱스 교육 키트는 여러분이 인증된 협동로봇 엔지니어가 될 수 있는 기회를 제공합니다. 협동로봇을 직접 티칭하고 어떻게 작업자와 협업 할 수 있는지 이해할 수 있는 첫번째 단계입니다.
              </p>
           </div>
           <div className="flex-1 flex justify-center lg:justify-end">
              <div className="bg-white rounded-lg p-4 max-w-lg w-full shadow-2xl">
                 <img src="https://picsum.photos/seed/kit/600/400" className="w-full rounded" alt="Training Kit" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}