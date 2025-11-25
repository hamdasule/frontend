import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[320px] bg-[#3FEDC4] flex flex-col justify-between p-8 text-[#1a1a1a]">
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-[#1a1a1a] rounded-full"></div>
        <span className="text-sm uppercase tracking-wider">Paradigm Shift</span>
      </div>

      {/* Main Title */}
      <div className="flex-1 flex items-start pt-20">
        <div>
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            Paradigm<br />Shift
          </h1>
          <p className="text-sm uppercase tracking-wide">
            A free + fully responsive<br />site template by HTML5 UP
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 mb-12">
        <a href="#intro" className="block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          This is Paradigm
        </a>
        <a href="#work" className="block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          I love what I do
        </a>
        <a href="#about" className="block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          Who I am
        </a>
        <a href="#contact" className="block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
          Get in touch
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex gap-4">
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Youtube size={20} />
        </a>
      </div>
    </aside>
  );
}
