import React from 'react';
import { Palette, Code, Smartphone, LineChart, Globe, Shield } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging interfaces that users love to interact with, focusing on accessibility and aesthetics.',
    },
    {
      icon: <Code size={28} />,
      title: 'Web Development',
      description: 'Robust and scalable web applications built with modern technologies like React, TypeScript, and Node.js.',
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions that provide seamless experiences on both iOS and Android devices.',
    },
    {
      icon: <LineChart size={28} />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to increase your online visibility and drive conversion through targeted campaigns.',
    },
    {
      icon: <Globe size={28} />,
      title: 'SEO Optimization',
      description: 'Improving your search rankings to help potential customers find your business easily on Google.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Cyber Security',
      description: 'Protecting your digital assets with advanced security measures and regular vulnerability assessments.',
    },
  ];

  return (
    <section id="service" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">Expert Services for Your Business</h2>
          <p className="text-slate-600 text-lg">
            We provide comprehensive digital solutions tailored to your unique business needs, ensuring growth and stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;