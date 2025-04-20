import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";

const Projects = () => {
  // Fetch projects data from the API
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  // No image helper function needed anymore

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
              <div key={project.id || index} className="project-card bg-white rounded-xl shadow-lg h-full flex flex-col">
                <div className="p-5 md:p-7 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
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
