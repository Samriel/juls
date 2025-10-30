import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DirectionsSection } from './components/DirectionsSection';
import { BookingSection } from './components/BookingSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DirectionsSection />
      <BookingSection />
      <EducationSection />
      <Footer />
    </>
  );
}

export default App;
