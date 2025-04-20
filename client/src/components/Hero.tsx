import profileImage from '@assets/BAE117E8-52F1-48EB-BCDF-A986FE42D037 2.jpg';
import { FaCode } from 'react-icons/fa';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile image */}
          <div className="w-56 h-56 md:w-72 md:h-72 mb-8 relative profile-glow animate-float">
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-100 opacity-80 animate-pulse-slow"></div>
            <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-blue-100 to-blue-50 opacity-70"></div>
            <div className="relative bg-white p-3 rounded-full shadow-xl">
              <img 
                src={profileImage} 
                alt="Anirudh Vasudev" 
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
              <span className="text-primary text-xl flex items-center justify-center">
                <FaCode />
              </span>
            </div>
          </div>
          
          <div className="animate-fade-in max-w-3xl">
            <p className="text-primary font-mono text-lg mb-3">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Anirudh Vasudev
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-semibold mb-6">
              Full Stack Developer & Backend Optimization Specialist
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I build scalable, efficient, and user-friendly web applications with a focus on optimized backend systems and seamless frontend experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get in Touch
              </a>
              <a href="#projects" className="inline-block bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-lg transition-colors" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View My Work
              </a>
            </div>
            
            {/* Resume Download Button */}
            <ResumeDownload />
            
            <div className="flex justify-center mt-10 space-x-5">
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
      </div>
    </section>
  );
};

export default Hero;
