import React from 'react';
import { MapPin, BookOpen, Headphones, PenTool } from 'lucide-react';

export default function SupportLinks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Inquiry */}
        <div className="bg-[#F5F5F5] p-10 rounded-xl flex items-center justify-between group hover:bg-[#EEF0F4] transition-colors cursor-pointer min-h-[180px]">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">구매 문의</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              로봇 도입을 고민하고 계신가요? <br />
              전문가에게 1:1 상담을 받아보세요.
            </p>
          </div>
          <img src="https://picsum.photos/seed/icon1/100/100" className="w-20 h-20 opacity-80 mix-blend-multiply" alt="Inquiry Icon"/>
        </div>

        {/* Find Dealer */}
        <div className="bg-[#F5F5F5] p-10 rounded-xl flex items-center justify-between group hover:bg-[#EEF0F4] transition-colors cursor-pointer min-h-[180px]">
           <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">가까운 대리점 찾기</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              고객님에게 가장 가까운 대리점을 <br />
              안내해 드립니다.
            </p>
          </div>
           <MapPin size={48} className="text-blue-400 opacity-80" />
        </div>

        {/* Training */}
        <div className="bg-[#F5F5F5] p-8 rounded-xl flex items-center justify-between group hover:bg-[#EEF0F4] transition-colors cursor-pointer h-32">
           <div>
             <p className="text-sm text-gray-500 mb-1">단계별 온/오프라인 교육으로</p>
             <p className="text-sm text-gray-900 font-bold">로봇 운용 능력을 향상시켜보세요.</p>
           </div>
           <BookOpen size={32} className="text-blue-500 opacity-80" />
        </div>

        {/* Support */}
        <div className="bg-[#F5F5F5] p-8 rounded-xl flex items-center justify-between group hover:bg-[#EEF0F4] transition-colors cursor-pointer h-32">
           <div>
             <p className="text-sm text-gray-500 mb-1">로봇 전문가가 365일</p>
             <p className="text-sm text-gray-900 font-bold">고객님의 A/S를 지원합니다.</p>
           </div>
           <Headphones size={32} className="text-blue-500 opacity-80" />
        </div>

      </div>

      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </div>
    </section>
  );
}