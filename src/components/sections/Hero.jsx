import React from 'react';
import bagHero from '../../assets/images/bag-hero.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex flex-col justify-end pb-32 sm:pb-48">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bagHero} 
          alt="STS?" 
          className="w-full h-full object-cover object-center translate-y-8 sm:translate-y-0 opacity-100 scale-105 animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-black text-neutral-950 uppercase tracking-tighter leading-[1.1] mb-6 mix-blend-normal">
            STS? Means Susono Take Sewing.
            <span className="block ">
            I make durable, packable items.
            </span>
          </h1>
          <p className="mt-6 text-lg tracking-wide text-neutral-600 mb-10 max-w-lg leading-relaxed mix-blend-normal font-semibold">
            Sewing,Silkscreen printing,etc...
            <br/>自身で感じた事や経験を元に製作しています。
            <br/>I'm gonna share my experiences and my products.
            <br/>Made in Japan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#onlinestore" className="rounded-full bg-neutral-950 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center">
              Discover Quality
            </a>
            <a href="#features" className="rounded-full bg-transparent border border-neutral-300 text-neutral-950 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-100 transition-all text-center">
              Explore Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
