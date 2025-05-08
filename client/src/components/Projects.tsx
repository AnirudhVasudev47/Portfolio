import { Project } from "../types";

const Projects = () => {
  // Hardcoded projects data from resume
  const projects: Project[] = [
    {
      id: 1,
      title: "3d-resume",
      description: "Interactive 3D resume showcasing experience and skills with Three.js and React Three Fiber.",
      technologies: ["React", "Three.js", "React Three Fiber"],
      demoUrl: "https://3d-resume-nine.vercel.app/",
      featured: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "aapka-restaurant-sample",
      description: "Sample restaurant app demonstrating online ordering UI. Updated README recently.",
      technologies: ["React", "JavaScript", "CSS"],
      demoUrl: "https://aapka-restaurant-sample.vercel.app/",
      featured: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "sample-restraunt",
      description: "A demo restaurant navigation and menu project with recent nav fixes.",
      technologies: ["React", "JavaScript", "CSS"],
      demoUrl: "https://sample-restraunt.vercel.app/",
      featured: true,
      createdAt: new Date().toISOString(),
    }
  ];

  return (
    <section id="projects" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card bg-white rounded-xl shadow-lg h-full flex flex-col">
              <iframe
                  className={"h-96"}
                  src={project.demoUrl} title={project.title}>
              </iframe>
              <div className="p-5 md:p-7 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5 flex-1">
                  {project.description}
                </p>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 font-medium mb-4 inline-block"
                  >
                    View Project
                  </a>
                )}
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
      </div>
    </section>
  );
};

export default Projects;
