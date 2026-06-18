import React, { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <p
          className={`text-sm uppercase tracking-widest text-secondary mb-4 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteContent.story.label}
        </p>

        {/* Headline */}
        <h2
          className={`text-4xl md:text-6xl font-serif font-semibold text-primary text-center mb-12 max-w-3xl mx-auto leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteContent.story.headline}
        </h2>

        {/* Body Paragraphs */}
        <div className="space-y-6">
          {siteContent.story.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-base md:text-lg text-text leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Signature */}
        <p
          className={`text-sm text-text-muted italic text-center mt-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteContent.story.signature}
        </p>

        {/* Images */}
        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={siteContent.story.images[0].src}
              alt={siteContent.story.images[0].alt}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={siteContent.story.images[1].src}
              alt={siteContent.story.images[1].alt}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
