import React from 'react';

export default function CTA() {
  return (
    <section id="onlinestore" className="relative py-40 overflow-hidden bg-white flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-200 opacity-[0.2] rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl tracking-widest uppercase font-black text-neutral-950 mb-6">
          Online Store
        </h2>
        <p className="text-xl text-neutral-600 font-medium mb-12">
          {/* STS? bag */}
        </p>
       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://sts.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 bg-neutral-950 text-white text-sm font-bold uppercase tracking-widest rounded shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all inline-block text-center"
          >
            Online Store
          </a>
        </div>
        <p className="mt-8 text-neutral-500 text-m tracking-wide font-medium">
          Bags,Printed Clothes,Accessories,etc...
        </p>
      </div>
    </section>
  );
}
