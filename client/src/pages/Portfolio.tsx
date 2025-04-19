import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  useEffect(() => {
    // Detect when sections enter viewport to trigger animations
    const handleSectionVisibility = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };
    
    // Handle navbar scroll behavior
    const handleNavbarScroll = () => {
      const navbar = document.getElementById('navbar');
      
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('shadow');
          navbar.classList.add('bg-opacity-95');
        } else {
          navbar.classList.remove('shadow');
          navbar.classList.remove('bg-opacity-95');
        }
      }
    };
    
    window.addEventListener('scroll', handleSectionVisibility);
    window.addEventListener('scroll', handleNavbarScroll);
    window.addEventListener('load', handleSectionVisibility);
    
    // Initial check for sections that might be in viewport on load
    handleSectionVisibility();
    
    return () => {
      window.removeEventListener('scroll', handleSectionVisibility);
      window.removeEventListener('scroll', handleNavbarScroll);
      window.removeEventListener('load', handleSectionVisibility);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
