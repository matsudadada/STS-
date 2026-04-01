import React from 'react';
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-widest text-neutral-950">Visuals</h2>
          <p className="mt-4 text-neutral-500 font-medium">Timeless design meets modern functionality.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] bg-white rounded-xl flex items-center justify-center border border-neutral-200 shadow-sm transition-all group overflow-hidden relative">
            <img src={gallery1} alt="着用イメージ" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold uppercase tracking-widest text-sm shadow-sm">Everyday Use</span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white rounded-xl flex items-center justify-center border border-neutral-200 shadow-sm transition-all group overflow-hidden relative md:mt-12">
            <img src={gallery2} alt="シルクスクリーンプリントの様子" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold uppercase tracking-widest text-sm shadow-sm">Silkscreen Printing</span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white rounded-xl flex items-center justify-center border border-neutral-200 shadow-sm transition-all group overflow-hidden relative sm:hidden md:flex">
            <img src={gallery3} alt="バッグ" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold uppercase tracking-widest text-sm shadow-sm">Accessories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
