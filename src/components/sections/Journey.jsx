import React, { useState, useEffect, useRef } from 'react';
import gallery2 from '../../assets/images/gallery-2.jpg'; // screenprinting
import bagDetail from '../../assets/images/DSC_24122.jpg'; // durability/craft
import gallery3 from '../../assets/images/IMG_2072.jpg'; // packable/accessories
import gallery1 from '../../assets/images/IMG_2073.jpg'; // wear/scenes

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const steps = [
    {
      id: "inspiration",
      stepNum: "01",
      title: "Experience",
      subtitle: "自身の経験から得た制作のアイデア",
      desc: "地元のスケーターの先輩たちが行っていたシルクスクリーンやミシンなどの「ものづくり」に強く影響を受け、気づけば私も自然と何かを作り続けるようになっていた。",
      translation: "I was strongly influenced by the local skaters who were making things with screen printing and sewing machines, and before I knew it, I was naturally making things all the time.",
      image: gallery2,
      alt: "Silkscreen printing workshop",
      hotspots: [
        { x: "45%", y: "40%", label: "Hand-crafted Screen", detail: "オリジナルデザインを1枚ずつ手刷りします" },
        { x: "65%", y: "55%", label: "Skate Graphics", detail: "ストリートカルチャーの熱量を注ぎ込む" }
      ]
    },
    {
      id: "craft",
      stepNum: "02",
      title: "TRAVEL",
      subtitle: "旅先で出会った風景や文化、そこで感じたことから強い影響を受け、その想いをものづくりに反映している。",
      desc: "日本から一歩外へ出ることで感じる空気感や人々の価値観に刺激を受け、新しい視点やアイデアが生まれる。",
      translation: "",
      image: bagDetail,
      alt: "Close-up of durable sewing and buckles",
      hotspots: [
        { x: "35%", y: "45%", label: "West lake in Hangzhou China", detail: "美しい西湖へ誘うように聳え立つ特徴的な形の橋。" },
        { x: "50%", y: "60%", label: "West lake in Hangzhou China", detail: "夕日が望めるベストスポット。多くの人で賑わう。" }
      ]
    },
    {
      id: "packable",
      stepNum: "03",
      title: "PACKABLE DETAILS",
      subtitle: "必要な時に、必要なだけ。",
      desc: "使わない時は小さく折り畳んで収納可能。必要な時にサッと広げられるパッカブル仕様。軽量でありながら、旅先でも荷物を十分に詰め込め大容量スペースを確保。機能的でタフな旅のメインバックとしても使える仕様。",
      translation: "Minimal space, maximum utility. Folds down flat to stow inside larger baggage, yet offers ample volume when expanded for travel and daily shopping.",
      image: gallery3,
      alt: "STS? packable bag folded and styled",
      hotspots: [
        { x: "55%", y: "30%", label: "Compact Pocket", detail: "ポケットに折りたたんで丸ごと収納可能" },
        { x: "40%", y: "70%", label: "Ultralight Fabric", detail: "タフで軽くて大容量。まさに旅仕様" }
      ]
    },
    {
      id: "versatility",
      stepNum: "04",
      title: "IN THE WORLD, EVERYWHERE",
      subtitle: "都市から大自然まで。",
      desc: "どこへでも安心して使用できるように設計されたデザイン。必要な時に必要なものがある安心感。",
      translation: "Borderless lifestyle. Designed to dynamically adapt across camping, skating, commutes, and long-range travel under diverse conditions.",
      image: gallery1,
      alt: "Bag carried outdoors and skating",
      hotspots: [
        { x: "30%", y: "50%", label: "Grampians in Victoria Australia", detail: "" },
        { x: "65%", y: "35%", label: "岩場でも機能を発揮する。", detail: "岩に囲まれても大丈夫。" }
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.15,
    };

    const observers = [];

    steps.forEach((step, idx) => {
      const element = document.getElementById(`scroll-step-${idx}`);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(idx);
            }
          });
        }, observerOptions);
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="journey" className="relative w-full bg-neutral-900 text-white py-12 md:py-0 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header decoration of the section */}
        <div className="pt-24 pb-12 md:pb-0 relative z-20">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-800/40 text-neutral-400 text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Craft Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-widest mb-6 bg-gradient-to-r from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            THE STORY OF CRAFT
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed font-light">
            Web制作や写真・デザインをはじめ、シルクスクリーンプリント、縫製に至るまで、すべての工程を自身の手で行う STS?。<br></br>
            その背景には、旅で得たインスピレーションが常に息づいている。<br></br>
            制作のすべては、わずか6畳の部屋から生まれるのだ。

          </p>
        </div>

        {/* Scroll Container */}
        <div ref={containerRef} className="relative md:flex md:gap-16 pt-8 md:pt-0">

          {/* Sticky Visual Column (Left) */}
          <div className="w-full md:w-1/2 md:h-[calc(100vh-120px)] md:sticky md:top-20 flex flex-col justify-center py-6 md:py-0 z-10">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 shadow-2xl group transition-all duration-700">

              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/60 z-10 pointer-events-none" />

              {/* Steps images */}
              {steps.map((step, idx) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeStep === idx
                      ? 'scrollytelling-img-active'
                      : 'scrollytelling-img-inactive pointer-events-none'
                    }`}
                />
              ))}

              {/* Hotspots overlay */}
              {steps.map((step, idx) => (
                <div
                  key={`hotspots-${step.id}`}
                  className={`absolute inset-0 z-20 transition-all duration-700 ${activeStep === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  {step.hotspots?.map((hotspot, hIdx) => (
                    <div
                      key={hIdx}
                      className="absolute group/hotspot"
                      style={{ top: hotspot.y, left: hotspot.x }}
                    >
                      {/* Pulsing Dot */}
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border border-neutral-950"></span>
                      </span>

                      {/* Tooltip Card */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-white rounded-lg p-2.5 shadow-xl opacity-0 scale-95 group-hover/hotspot:opacity-100 group-hover/hotspot:scale-100 transition-all duration-300 pointer-events-none z-30">
                        <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                          {hotspot.label}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-light leading-snug">
                          {hotspot.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Step indicator on image */}
              <div className="absolute bottom-6 left-6 z-20 bg-neutral-950/60 backdrop-blur-md border border-neutral-800/80 px-4 py-2 rounded-full flex items-center gap-3">
                <span className="text-xl font-display font-black text-white tracking-wider">
                  {steps[activeStep].stepNum}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">
                  {steps[activeStep].id}
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Content Column (Right) */}
          <div className="w-full md:w-1/2 relative space-y-24 md:space-y-4">

            {/* Scroll Navigation Track on Desktop */}
            <div className="hidden md:block absolute left-0 top-[20%] bottom-[20%] w-[2px] bg-neutral-800 pointer-events-none">
              <div
                className="w-full bg-gradient-to-b from-white to-neutral-500 transition-all duration-500 rounded-full"
                style={{
                  height: `${100 / steps.length}%`,
                  transform: `translateY(${activeStep * 100}%)`
                }}
              />
            </div>

            {steps.map((step, idx) => (
              <div
                key={step.id}
                id={`scroll-step-${idx}`}
                className="min-h-[60vh] md:min-h-screen flex flex-col justify-center py-16 md:py-32 md:pl-12 border-b border-neutral-800/40 md:border-b-0 last:border-b-0"
              >
                {/* Step Subtitle / Number */}
                <div className="flex items-center gap-4 mb-4 select-none">
                  <span className="text-lg font-display font-medium text-neutral-500 tracking-wider">
                    {step.stepNum}
                  </span>
                  <div className="h-[1px] w-12 bg-neutral-800"></div>
                  <span className="text-xs uppercase font-extrabold text-neutral-500 tracking-widest">
                    Chapter
                  </span>
                </div>

                {/* Main Content */}
                <h3 className="text-xl sm:text-3xl font-display font-black tracking-widest text-white mb-2 uppercase">
                  {step.title}
                </h3>
                <h4 className="text-sm font-bold text-neutral-200 tracking-wide mb-6 leading-relaxed">
                  {step.subtitle}
                </h4>

                {/* Image under title for MOBILE layout only */}
                <div className="md:hidden my-6 aspect-[4/3] w-full overflow-hidden rounded-xl relative border border-neutral-800">
                  <img src={step.image} alt={step.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent pointer-events-none" />
                </div>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide mb-6 font-light">
                  {step.desc}
                </p>

                {/* Translation portion */}
                <div className="border-l border-neutral-800 pl-4 py-1.5 bg-neutral-950/20 rounded-r-md">
                  <p className="text-neutral-500 text-xs sm:text-sm font-light italic leading-relaxed">
                    {step.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
