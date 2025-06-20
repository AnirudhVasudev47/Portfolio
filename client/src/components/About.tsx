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
            <div className="rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-gray-50 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/developer-8764521_1280 2.jpg" 
                alt="Developer at night coding with city view"
                className="w-full h-auto object-cover" 
                style={{ maxHeight: '450px' }}
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Technical Lead & Full Stack Developer
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              A software development professional with over 4 years of experience in full stack 
              development and backend optimization, expert in React and Node.js. 
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My key achievements include leading the development of a payment module 
              that contributed to generating ₹60 crore in revenue at BHIVE Alts, and 
              improving project alignment by ensuring 100% requirement accuracy at Deloitte.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in developing full-stack applications with React on
              the frontend and Node.js for backend services. My expertise
              extends to database optimization, API design, and implementing
              scalable architecture patterns that can handle growing user
              demands.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              What drives me is solving complex problems with elegant solutions.
              Whether it's optimizing a slow-performing database query,
              refactoring legacy code, or designing a new system from scratch, I
              thrive on challenges that push my technical abilities.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 text-secondary rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Backend Optimization
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-accent rounded-full text-sm font-medium">
                Full Stack
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Scalable Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
