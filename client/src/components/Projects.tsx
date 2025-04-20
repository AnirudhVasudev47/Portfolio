import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";

const Projects = () => {
  // Fetch projects data from the API
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  // Function to generate placeholder SVG for project images
  const getProjectImage = (name: string) => {
    // Extract the image name from the path if it exists
    const imageName = name ? name.split('/').pop()?.split('.')[0] || name : 'project';
    
    // Define colors for different project types
    const colors: Record<string, string> = {
      'portfolio': '#3B82F6',
      'ecommerce': '#6366F1',
      'task': '#10B981',
      'payment-gateway': '#3B82F6',
      'analytics-dashboard': '#6366F1',
      'inventory-system': '#10B981'
    };
    
    // Find the most matching color key or use a default
    const colorKey = Object.keys(colors).find(key => imageName.includes(key)) || 'portfolio';
    const color = colors[colorKey];
    
    return (
      <svg className="w-full h-full object-cover" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill={color} fillOpacity="0.1" />
        <text x="400" y="200" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill={color} textAnchor="middle">
          {imageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
        
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 my-8">
            <p>Failed to load projects. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={project.id || index} className="project-card bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-40 md:h-48 overflow-hidden">
                  {getProjectImage(project.image || '')}
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm md:text-base font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {!project.demoUrl && (
                      <span className="text-gray-400 text-sm">No Demo Available</span>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <i className="ri-github-fill text-xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center text-gray-500 my-8">
            <p>No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
