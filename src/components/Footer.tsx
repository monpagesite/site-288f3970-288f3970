import React from 'react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-serif font-semibold hover:text-accent transition-colors"
          >
            カフェ
          </button>

          {/* Tagline */}
          <p className="text-background/80 max-w-md">
            {siteContent.footer.tagline}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {siteContent.footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-background/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-background/20" />

          {/* Copyright */}
          <p className="text-sm text-background/60">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
