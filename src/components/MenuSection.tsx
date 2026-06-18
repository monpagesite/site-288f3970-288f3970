import React, { useState, useEffect, useRef } from 'react';
import { Star, Sparkles } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    siteContent.menu.categories[0].id
  );
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

  const currentCategory = siteContent.menu.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-widest text-secondary mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.menu.label}
          </p>
          <h2
            className={`text-4xl md:text-6xl font-serif font-semibold text-primary transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.menu.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Tabs - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-1">
              {siteContent.menu.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-6 py-4 text-lg rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-l-4 border-accent bg-surface/50 text-primary font-semibold'
                      : 'border-l-4 border-transparent text-text-muted hover:text-primary hover:bg-surface/30'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items - Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {currentCategory?.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 p-4 rounded-xl hover:bg-surface transition-all duration-300 cursor-pointer border border-transparent hover:border-border hover:shadow-sm group ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-serif font-semibold text-primary mb-1 flex items-center gap-2 flex-wrap">
                          {item.name}
                          {item.featured && (
                            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                              <Star size={12} fill="currentColor" />
                              招牌推荐
                            </span>
                          )}
                          {item.limited && (
                            <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                              <Sparkles size={12} />
                              限量
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-text-muted line-clamp-2 mt-1">
                          {item.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-lg font-semibold text-secondary flex-shrink-0">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
