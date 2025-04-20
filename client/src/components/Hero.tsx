const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Mobile profile image (only visible on mobile) */}
          <div className="block md:hidden w-48 h-48 mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-white p-2 rounded-full shadow-xl">
                <svg className="w-full h-full rounded-full object-cover border-4 border-white text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" opacity="0.2"/>
                  <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor" opacity="0.2"/>
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <span className="text-primary text-xl"><i className="ri-code-s-slash-line"></i></span>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 md:pr-12 text-center md:text-left">
            <div className="animate-fade-in">
              <p className="text-primary font-mono text-lg mb-4">Hi there, I'm</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Anirudh Vasudev
              </h1>
              <h2 className="text-xl md:text-3xl text-gray-600 font-semibold mb-6">
                Full Stack Developer & Backend Optimization Specialist
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                I build scalable, efficient, and user-friendly web applications with a focus on optimized backend systems and seamless frontend experiences.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 md:py-3 px-5 md:px-6 rounded-lg transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get in Touch
                </a>
                <a href="#projects" className="inline-block bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-2 md:py-3 px-5 md:px-6 rounded-lg transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View My Work
                </a>
              </div>
              <div className="flex justify-center md:justify-start mt-8 md:mt-10 space-x-5">
                <a href="https://linkedin.com/in/anirudh-vasudev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="ri-linkedin-fill text-2xl"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="ri-github-fill text-2xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="ri-twitter-fill text-2xl"></i>
                </a>
                <a href="mailto:anirudh040799@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  <i className="ri-mail-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Desktop profile image (only visible on desktop) */}
          <div className="hidden md:block md:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-white p-2 rounded-full shadow-xl">
                <svg className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" opacity="0.2"/>
                  <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor" opacity="0.2"/>
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce-slow">
                <span className="text-primary text-2xl"><i className="ri-code-s-slash-line"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
