import React, { useEffect, useRef, useState } from 'react';
import { Users, Clock, Sparkles, Send } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const BookingSection: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('预订功能演示：实际部署时将连接到预订系统');
  };

  const iconMap = {
    users: Users,
    clock: Clock,
    sparkles: Sparkles,
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-widest text-secondary mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.booking.label}
          </p>
          <h2
            className={`text-4xl md:text-6xl font-serif font-semibold text-primary mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.booking.headline}
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.booking.subtext}
          </p>
        </div>

        {/* Features */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteContent.booking.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Booking Form */}
        <div
          className={`bg-background rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder={siteContent.booking.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder={siteContent.booking.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  预约日期
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  时段选择
                </label>
                <select
                  id="time"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option value="">请选择时段</option>
                  <option value="10:00-12:00">10:00 - 12:00</option>
                  <option value="12:00-14:00">12:00 - 14:00</option>
                  <option value="14:00-16:00">14:00 - 16:00</option>
                  <option value="16:00-18:00">16:00 - 18:00</option>
                  <option value="18:00-20:00">18:00 - 20:00</option>
                  <option value="20:00-22:00">20:00 - 22:00</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  人数
                </label>
                <select
                  id="guests"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option value="">请选择人数</option>
                  <option value="1">1人</option>
                  <option value="2">2人</option>
                  <option value="3">3人</option>
                  <option value="4">4人</option>
                  <option value="5+">5人及以上</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary mb-2"
              >
                特殊需求（选填）
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={siteContent.booking.form.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent text-white px-12 py-4 rounded-full text-lg font-medium hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              >
                <Send size={20} />
                {siteContent.booking.form.submit}
              </button>

              <p className="text-sm text-text-muted text-center">
                {siteContent.booking.notice}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
