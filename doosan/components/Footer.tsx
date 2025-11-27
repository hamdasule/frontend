import React from 'react';
import { ChevronDown, MapPin, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-400 py-16 text-xs">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div>
            <h4 className="text-white font-bold mb-4">제품 & 솔루션</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">헤리티지</a></li>
              <li><a href="#" className="hover:text-white">제품</a></li>
              <li><a href="#" className="hover:text-white">솔루션</a></li>
              <li><a href="#" className="hover:text-white">소프트웨어</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">교육 & 서비스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">교육</a></li>
              <li><a href="#" className="hover:text-white">다운로드 센터</a></li>
              <li><a href="#" className="hover:text-white">서비스 센터</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">투자정보</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">IR 자료실</a></li>
              <li><a href="#" className="hover:text-white">거버넌스</a></li>
              <li><a href="#" className="hover:text-white">보고서</a></li>
              <li><a href="#" className="hover:text-white">공고/공시</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">회사소개</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">기업정보</a></li>
              <li><a href="#" className="hover:text-white">지속가능경영</a></li>
              <li><a href="#" className="hover:text-white">뉴스 & 이벤트</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
           {/* Spacer */}
           <div className="hidden lg:block"></div>

          <div className="lg:col-span-1">
             <button className="w-full flex items-center justify-between border border-gray-700 px-3 py-2 text-xs hover:border-gray-500">
               <span>Related Sites</span>
               <ChevronDown size={14} />
             </button>
             <div className="mt-8 space-y-2 text-right">
                <a href="#" className="block text-white hover:underline font-bold">커리어 두산 ↗</a>
                <a href="#" className="block hover:text-white">법적고지</a>
                <a href="#" className="block hover:text-white">이용약관</a>
                <a href="#" className="block font-bold text-white hover:underline">개인정보처리방침</a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="mb-4 md:mb-0 text-[10px] text-gray-500">
            경기도 성남시 분당구 정자일로 155 두산타워 20층 (우) 13557 <br/>
            대표이사: 류정훈 | 사업자등록번호: 606-86-53835 | 통신판매업신고: 2020-성남분당B-00810 <br/>
            Copyright © Doosan Robotics Inc. All rights reserved.
          </p>
          <div className="flex gap-3">
             {/* Floating utility buttons mimicking the original */}
             <div className="fixed bottom-24 right-4 flex flex-col gap-2 z-50">
                 <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded shadow-lg">
                    <span className="text-xs">상담</span>
                 </button>
                 <button className="w-10 h-10 bg-white hover:bg-gray-100 text-slate-900 flex items-center justify-center rounded shadow-lg">
                    <MapPin size={18} />
                 </button>
                 <button className="w-10 h-10 bg-white hover:bg-gray-100 text-slate-900 flex items-center justify-center rounded shadow-lg">
                    <User size={18} />
                 </button>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}