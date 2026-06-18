import React, { useEffect, useRef } from 'react';
import { ArrowDown, Coffee } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('[data-animate]');
    if (elements) {
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, index * 200);
      });
    }
  }, []);

  const scrollToStory = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-surface/30 via-transparent to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div ref={contentRef} className="space-y-8">
            <span
              data-animate
              className="inline-block text-sm uppercase tracking-wider text-secondary bg-surface px-4 py-2 rounded-full opacity-0 translate-y-8 transition-all duration-700"
            >
              {siteContent.hero.overline}
            </span>

            <h1
              data-animate
              className="text-6xl md:text-8xl font-serif font-semibold text-primary leading-[1.05] tracking-tight opacity-0 translate-y-8 transition-all duration-700"
            >
              {siteContent.hero.headline[0]}
              <br />
              {siteContent.hero.headline[1]}
            </h1>

            <p
              data-animate
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg opacity-0 translate-y-8 transition-all duration-700"
            >
              {siteContent.hero.subtext}
            </p>

            <div
              data-animate
              className="flex flex-col gap-4 opacity-0 translate-y-8 transition-all duration-700"
            >
              <button
                onClick={scrollToStory}
                className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-10 py-5 rounded-full text-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] w-full sm:w-auto"
              >
                <ArrowDown size={22} />
                {siteContent.hero.cta}
              </button>

              <p className="text-sm text-text-muted">
                {siteContent.hero.trustIndicator}
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={siteContent.hero.image}
                alt={siteContent.hero.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating badge overlay */}
              <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Coffee className="text-accent" size={20} />
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {siteContent.hero.badge.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
