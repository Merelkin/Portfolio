import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HobbiesSection from './components/HobbiesSection';
import ExperienceSection from './components/ExperienceSection';
import ContactsSection from './components/ContactsSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import './styles/main.scss';

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        node.classList.add('visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return ref;
}

function App() {
  // Снимаем фокус при клике на фон
  const handleBlur = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  const aboutRef = useFadeInOnScroll();
  const hobbiesRef = useFadeInOnScroll();
  const expRef = useFadeInOnScroll();
  const contactsRef = useFadeInOnScroll();

  return (
    <div className="App" onClick={handleBlur}>
      <Header />
      <HeroSection />
      <main>
        <div ref={aboutRef} className="fade-in-up">
          <AboutSection />
        </div>
        <div style={{ height: 32 }} />
        <div ref={hobbiesRef} className="fade-in-up">
          <HobbiesSection />
        </div>
        <div style={{ height: 32 }} />
        <div ref={expRef} className="fade-in-up">
          <ExperienceSection />
        </div>
        <div style={{ height: 32 }} />
        <div ref={contactsRef} className="fade-in-up">
          <ContactsSection />
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
