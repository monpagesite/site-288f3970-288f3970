import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface"
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
            {siteContent.contact.label}
          </p>
          <h2
            className={`text-4xl md:text-6xl font-serif font-semibold text-primary transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.contact.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Address */}
            <div className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {siteContent.contact.address.title}
                  </h3>
                  <p className="text-text-muted mb-1">
                    {siteContent.contact.address.line1}
                  </p>
                  <p className="text-sm text-text-muted">
                    {siteContent.contact.address.line2}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {siteContent.contact.hours.title}
                  </h3>
                  <p className="text-text-muted mb-1">
                    {siteContent.contact.hours.weekday}
                  </p>
                  <p className="text-text-muted mb-1">
                    {siteContent.contact.hours.weekend}
                  </p>
                  <p className="text-sm text-secondary font-medium">
                    {siteContent.contact.hours.closed}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                {siteContent.contact.contact.title}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-muted">
                  <Phone size={18} className="text-accent flex-shrink-0" />
                  <span>{siteContent.contact.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <Mail size={18} className="text-accent flex-shrink-0" />
                  <span>{siteContent.contact.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <MessageCircle
                    size={18}
                    className="text-accent flex-shrink-0"
                  />
                  <span>{siteContent.contact.contact.wechat}</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                关注我们
              </h3>
              <div className="flex flex-wrap gap-3">
                {siteContent.contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm text-text-muted hover:text-primary hover:bg-accent/10 transition-all duration-300"
                  >
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[600px]">
              <iframe
                src={siteContent.contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="カフェ Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
