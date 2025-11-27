import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Clients from './components/Clients';
import Solutions from './components/Solutions';
import Products from './components/Products';
import SocialMedia from './components/SocialMedia';
import SupportLinks from './components/SupportLinks';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 w-full overflow-x-hidden">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="usecases">
        <UseCases />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="socialmedia">
        <SocialMedia />
      </section>
      <section id="support">
        <SupportLinks />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}