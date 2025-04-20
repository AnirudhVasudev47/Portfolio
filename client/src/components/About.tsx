const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-12 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-gray-50 p-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <svg className="w-full max-w-sm text-primary drop-shadow-lg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Retro Computer Base */}
                <rect x="40" y="110" width="120" height="30" rx="5" fill="#374151" />
                <rect x="40" y="105" width="120" height="10" rx="2" fill="#4B5563" />
                
                {/* Monitor */}
                <rect x="50" y="40" width="100" height="65" rx="5" fill="#6B7280" />
                <rect x="55" y="45" width="90" height="55" rx="2" fill="#111827" />
                
                {/* Screen Content - Code-like Pattern with Animation */}
                <g>
                  <rect x="65" y="55" width="70" height="5" rx="1" fill="currentColor" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
                  </rect>
                  <rect x="65" y="65" width="40" height="5" rx="1" fill="currentColor" opacity="0.6" />
                  <rect x="110" y="65" width="15" height="5" rx="1" fill="currentColor" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="65" y="75" width="60" height="5" rx="1" fill="currentColor" opacity="0.6" />
                  <rect x="65" y="85" width="30" height="5" rx="1" fill="currentColor" opacity="0.6" />
                  <rect x="100" y="85" width="25" height="5" rx="1" fill="currentColor" opacity="0.8">
                    <animate attributeName="width" values="5;25;5" dur="3s" repeatCount="indefinite" />
                  </rect>
                </g>
                
                {/* Monitor Stand */}
                <path d="M90 105L80 140H120L110 105H90Z" fill="#6B7280" />
                <rect x="75" y="140" width="50" height="5" rx="2" fill="#4B5563" />
                
                {/* Keyboard */}
                <rect x="65" y="150" width="70" height="15" rx="3" fill="#374151" />
                <rect x="70" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="80" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="90" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="100" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="110" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="120" y="155" width="5" height="5" rx="1" fill="#9CA3AF" />
                
                {/* Decorative Elements */}
                <circle cx="140" cy="50" r="3" fill="#ef4444">
                  <animate attributeName="fill" values="#ef4444;#f87171;#ef4444" dur="2s" repeatCount="indefinite" />
                </circle>
                <rect x="60" y="120" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="70" y="120" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="125" y="120" width="5" height="5" rx="1" fill="#9CA3AF" />
                <rect x="135" y="120" width="5" height="5" rx="1" fill="#10b981">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
                </rect>
                
                {/* 3D Effect Highlights */}
                <path d="M55 45L60 40H140L145 45" fill="#9CA3AF" opacity="0.5" />
                <path d="M145 45V100L140 105H60L55 100V45Z" fill="#D1D5DB" opacity="0.1" />
              </svg>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Full Stack Developer with a Backend Passion</h3>
            <p className="text-lg text-gray-700 mb-6">
              With over 4 years of experience in software development, I've cultivated a deep passion for building efficient, scalable, and robust applications. My journey has taken me through various tech stacks and industries, but my core focus remains on creating systems that deliver exceptional performance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in developing full-stack applications with React on the frontend and Node.js for backend services. My expertise extends to database optimization, API design, and implementing scalable architecture patterns that can handle growing user demands.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              What drives me is solving complex problems with elegant solutions. Whether it's optimizing a slow-performing database query, refactoring legacy code, or designing a new system from scratch, I thrive on challenges that push my technical abilities.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-green-100 text-secondary rounded-full text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Backend Optimization</span>
              <span className="px-3 py-1 bg-indigo-100 text-accent rounded-full text-sm font-medium">Full Stack</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Scalable Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
