import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-3 group"
          >
            {/* Elegant Modern Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent rounded-lg transform rotate-45"></div>
              <span className="relative text-primary font-serif font-bold text-xl z-10">X</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-serif font-semibold text-primary group-hover:text-secondary transition-colors leading-none">
                lounge X
              </span>
              <span className="text-[10px] text-text-muted font-sans tracking-wider leading-none mt-0.5">
                {siteContent.logo.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteContent.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-text hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {siteContent.nav.cta}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {siteContent.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-3 px-4 text-text hover:text-primary hover:bg-surface rounded-xl transition-all font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-md"
            >
              {siteContent.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
