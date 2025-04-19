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
            <div className="rounded-lg shadow-xl overflow-hidden bg-primary/5 p-8 flex items-center justify-center">
              <svg className="w-full max-w-sm text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3955 9.59497L9.60352 14.387" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3971 14.3898L9.60107 9.59277" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0002 22C17.5231 22 22.0002 17.5228 22.0002 12C22.0002 6.47715 17.5231 2 12.0002 2C6.47737 2 2.00024 6.47715 2.00024 12C2.00024 17.5228 6.47737 22 12.0002 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
