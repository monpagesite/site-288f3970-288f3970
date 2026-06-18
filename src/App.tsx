import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { SpaceSection } from './components/SpaceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <SpaceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
