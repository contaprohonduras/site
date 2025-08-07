import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ValuePropositions from './components/ValuePropositions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ErrorBoundary } from './components/ErrorBoundary';
import { usePerformanceMetrics } from './hooks/use-performance';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const { metrics, performanceScore, logMetrics } = usePerformanceMetrics();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'servicios', 'propuestas', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      const timer = setTimeout(() => {
        logMetrics();
      }, 5000); // Log metrics after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [logMetrics]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} />
        <main role="main">
          <Hero />
          <AboutUs />
          <Services />
          <ValuePropositions />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;