import React from 'react';
import bagDetail from '../../assets/images/bag-detail.jpg';

export default function Features() {
  const features = [
    {
      title: "Durable",
      desc: "Designed for everyday use with strong materials and reliable construction that stands the test of time."
    },
    {
      title: "Packable Capacity",
      desc: "Easily packs down when not in use, while offering ample space for your daily essentials and gear."
    },
    {
      title: "Versatility",
      desc: "Built for travel, daily use, skateboarding, and the outdoors."
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-24 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img 
                src={bagDetail} 
                alt="Bag details" 
                className="w-full h-[600px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-black uppercase tracking-widest text-neutral-950 mb-4">
              Built from experience.
            </h2>
            <div className="h-1 w-20 bg-neutral-300 mb-10 rounded"></div>
            
            <p className="text-neutral-600 text-lg leading-relaxed mb-12">
              Shaping essentials, discovered through travel and activity.
              <br/>
              地元のスケーターの先輩が行っていたシルクスクリーンやミシンなどの「ものづくり」に強く影響を受け、スケートボードで得た感覚や視点、各地での経験を制作に反映しています。
            </p>
            
            <dl className="space-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="relative pl-8">
                  <dt className="text-lg font-bold text-neutral-950 uppercase tracking-wider mb-2">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-neutral-950"></span>
                    {feature.title}
                  </dt>
                  <dd className="text-neutral-600 leading-relaxed font-normal">
                    {feature.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
      </div>
    </section>
  );
}
