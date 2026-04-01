import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Gallery from '../components/sections/Gallery';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans selection:bg-neutral-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
