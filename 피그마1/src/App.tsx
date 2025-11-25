import { Sidebar } from "./components/Sidebar";
import { ImageGallery } from "./components/ImageGallery";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-[320px] flex-1">
        {/* Hero Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-16 py-20">
          <div className="max-w-4xl">
            <div className="aspect-[4/3] overflow-hidden mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696489283182-0446be970e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NjM5NTU4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fashion portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              This is Paradigm
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, 
              bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus.
            </p>
            <button className="flex items-center gap-2 bg-[#3FEDC4] text-[#1a1a1a] px-6 py-3 uppercase text-sm tracking-wider hover:bg-[#2DD4AB] transition-colors">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Gallery Section 1 */}
        <section className="px-16 py-12">
          <ImageGallery 
            images={[
              "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMGhhbmdlcnxlbnwxfHx8fDE3NjQwNDI4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1575263977162-e5598ef5366a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZG9vciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQwNDI4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ]} 
          />
        </section>

        {/* Work Section */}
        <section id="work" className="px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              I love what I do
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3FEDC4] rounded-full flex-shrink-0 flex items-center justify-center text-[#1a1a1a]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Consequat lorem</h3>
                  <p className="text-gray-600">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3FEDC4] rounded-full flex-shrink-0 flex items-center justify-center text-[#1a1a1a]">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Lorem elit magna</h3>
                  <p className="text-gray-600">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3FEDC4] rounded-full flex-shrink-0 flex items-center justify-center text-[#1a1a1a]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Blandit adipiscing</h3>
                  <p className="text-gray-600">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section 2 */}
        <section className="px-16 py-12">
          <ImageGallery 
            images={[
              "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMGhhbmdlcnxlbnwxfHx8fDE3NjQwNDI4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1600677791065-56efdbf41e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MDQyODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ]} 
          />
        </section>

        {/* Gallery Section 3 - Triple */}
        <section className="px-16 py-12">
          <ImageGallery 
            layout="triple"
            images={[
              "https://images.unsplash.com/photo-1763710915750-79abb8f3480f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwd2hlZWwlMjBibHVlfGVufDF8fHx8MTc2NDA0Mjg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1741363694074-05801e6472c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmbGFncyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQwNDI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1718802373553-72f8f94dc860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmclMjBza3l8ZW58MXx8fHwxNzYzOTczNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ]} 
          />
        </section>

        {/* Gallery Section 4 */}
        <section className="px-16 py-12">
          <ImageGallery 
            images={[
              "https://images.unsplash.com/photo-1652439657905-4fce92306f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBzYW5kfGVufDF8fHx8MTc2NDAzOTA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1562351768-f68650f3ec54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQwNDA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ]} 
          />
        </section>

        {/* About Section */}
        <section id="about" className="px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Who I am
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet 
              rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio, 
              dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
              venenatis vestibulum. Donec sed odio dui. Maecenas faucibus mollis interdum. Nullam quis risus 
              eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </section>

        {/* Gallery Section 5 - Single */}
        <section className="px-16 py-12">
          <ImageGallery 
            layout="single"
            images={[
              "https://images.unsplash.com/photo-1696357519719-985a9e8f2821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNvcnJpZG9yJTIwcGVyc3BlY3RpdmV8ZW58MXx8fHwxNzY0MDQyODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            ]} 
          />
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-16 py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Get in touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#3FEDC4]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#3FEDC4]"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#3FEDC4]"
              />
              <button className="bg-[#3FEDC4] text-[#1a1a1a] px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#2DD4AB] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-16 py-8 text-center text-gray-500 text-sm">
          <p>© 2024 Paradigm Shift. Design: HTML5 UP.</p>
        </footer>
      </main>
    </div>
  );
}
