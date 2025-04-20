const Projects = () => {
  const projects = [
    {
      title: "Payment Gateway System",
      description: "A secure, high-performance payment processing system capable of handling thousands of transactions per minute with multiple payment methods integration.",
      technologies: ["Node.js", "Express", "MySQL", "AWS"],
      image: "payment-gateway"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A comprehensive dashboard providing real-time insights into user behavior, system performance, and business metrics with customizable widgets.",
      technologies: ["React", "Socket.io", "D3.js", "Firebase"],
      image: "analytics-dashboard"
    },
    {
      title: "Mobile Inventory System",
      description: "Cross-platform mobile application for inventory management with barcode scanning, offline capabilities, and seamless cloud synchronization.",
      technologies: ["React Native", "Node.js", "MongoDB", "Redux"],
      image: "inventory-system"
    }
  ];

  // Function to generate placeholder SVG for project images
  const getProjectImage = (name: string) => {
    const colors = {
      'payment-gateway': '#3B82F6',
      'analytics-dashboard': '#6366F1',
      'inventory-system': '#10B981'
    };
    
    const color = colors[name as keyof typeof colors] || '#3B82F6';
    
    return (
      <svg className="w-full h-full object-cover" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill={color} fillOpacity="0.1" />
        <text x="400" y="200" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill={color} textAnchor="middle">
          {name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </text>
      </svg>
    );
  };

  return (
    <section id="projects" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
              <div className="h-40 md:h-48 overflow-hidden">
                {getProjectImage(project.image)}
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm md:text-base font-medium transition-colors">
                    View Details
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
