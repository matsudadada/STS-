import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-neutral-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-3xl font-black text-neutral-950 tracking-tighter leading-[1.1] mix-blend-normal">
            STS? Susono Take Sewing
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Concept</a>
          <a href="#gallery" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Details</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://sts.stores.jp" target="_blank" rel="noopener noreferrer" className="rounded-full bg-neutral-950 text-white px-6 py-2.5 text-sm font-bold tracking-wide hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            Online Store
          </a>
        </div>
      </div>
    </header>
  );
}
