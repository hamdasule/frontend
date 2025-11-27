import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://via.placeholder.com/1200x600?text=Slide+1',
      title: '첫 번째 슬라이드',
      description: '설명 텍스트 1'
    },
    {
      image: 'https://via.placeholder.com/1200x600?text=Slide+2',
      title: '두 번째 슬라이드',
      description: '설명 텍스트 2'
    },
    {
      image: 'https://via.placeholder.com/1200x600?text=Slide+3',
      title: '세 번째 슬라이드',
      description: '설명 텍스트 3'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://picsum.photos/seed/robotarm1/1920/1080" 
          alt="Robot Arm Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Decorative Big Text in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[12vw] font-black text-white/5 leading-none tracking-tighter uppercase italic">
          Max Power In <br /> Every Aspect
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 mt-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI-Powered Robot Solutions <br /> for a Better Life
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
          Innovation in every motion, revolutionizing the way we work.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
            <span>두산 로봇과 함께 상상을 실현해 보세요</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 슬라이드 컨테이너 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10 transition"
      >
        ❮
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10 transition"
      >
        ❯
      </button>

      {/* 점 네비게이션 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}