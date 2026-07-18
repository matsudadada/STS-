import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Journey from '../components/sections/Journey';
import CTA from '../components/sections/CTA';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans selection:bg-neutral-200">
      <Header />
      <main>
        <Hero />
        <Journey />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
