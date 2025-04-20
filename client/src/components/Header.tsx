import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ensure light mode is the default by removing dark mode classes
  document.documentElement.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full bg-white z-40 shadow-sm" id="navbar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Anirudh<span className="text-gray-800">Vasudev</span>
          </a>
          
          <button 
            id="mobile-menu-button" 
            className="lg:hidden text-gray-800 hover:text-primary focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#experience" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#skills" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#projects" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#education" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
            <a href="#contact" className="nav-link text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>
        </div>
        
        {/* Mobile navigation menu */}
        <div id="mobile-menu" className={`lg:hidden fixed w-full left-0 top-16 bg-white z-50 border-t border-gray-200 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 p-4">
            <a href="#home" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#experience" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#skills" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#projects" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#education" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
            <a href="#contact" className="nav-link py-2 text-gray-800 hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
