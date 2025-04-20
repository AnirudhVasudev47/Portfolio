import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Set initial theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);
  
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

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
    <header className="header fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-40 shadow-sm" id="navbar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Anirudh<span className="text-dark">Vasudev</span>
          </a>
          
          <button 
            id="mobile-menu-button" 
            className="lg:hidden text-dark hover:text-primary focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#experience" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#skills" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#projects" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#education" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
            <a href="#contact" className="nav-link text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            <button id="theme-toggle" className="p-1 rounded-full hover:bg-gray-100 focus:outline-none transition-colors" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              )}
            </button>
          </nav>
        </div>
        
        {/* Mobile navigation menu */}
        <div id="mobile-menu" className={`lg:hidden fixed w-full left-0 top-16 bg-white dark:bg-gray-900 z-50 border-t border-gray-200 dark:border-gray-700 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 p-4">
            <a href="#home" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#experience" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#skills" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#projects" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#education" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
            <a href="#contact" className="nav-link py-2 text-dark hover:text-primary font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <button id="mobile-theme-toggle" className="flex items-center w-full py-2 text-dark hover:text-primary space-x-2 transition-colors" onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                )}
                <span>Toggle Dark Mode</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
