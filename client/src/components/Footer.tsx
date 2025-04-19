const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">Anirudh<span className="text-primary">.dev</span></a>
            <p className="mt-2 text-gray-400">Full Stack Developer & Backend Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/anirudh-vasudev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="mailto:anirudh040799@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <i className="ri-mail-line text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Anirudh Vasudev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
