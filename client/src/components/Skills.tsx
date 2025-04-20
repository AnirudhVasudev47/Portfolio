import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Skill as SkillType } from "@shared/schema";
import { 
  SiJavascript, SiReact, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, 
  SiVuedotjs, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql,
  SiGit, SiDocker, SiAmazon, SiFirebase, SiPython, SiJest, SiFigma, SiCypress
} from 'react-icons/si';
import { FaCode, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Skills = () => {
  // Fetch skills data from the API
  const { data: skills = [], isLoading, error } = useQuery<SkillType[]>({
    queryKey: ['/api/skills'],
  });
  
  // Map skill names to specific React Icons
  const getSkillIcon = (name: string, category: string): IconType => {
    // Map skill names to specific icons
    const iconMap: Record<string, IconType> = {
      "JavaScript": SiJavascript,
      "TypeScript": SiTypescript,
      "React": SiReact,
      "Vue.js": SiVuedotjs,
      "HTML5": SiHtml5,
      "CSS3": SiCss3,
      "Tailwind CSS": SiTailwindcss,
      "Node.js": SiNodedotjs,
      "Express": SiExpress,
      "PostgreSQL": SiPostgresql,
      "MongoDB": SiMongodb,
      "GraphQL": SiGraphql,
      "Docker": SiDocker,
      "Git": SiGit,
      "Jest": SiJest,
      "Cypress": SiCypress,
      "Figma": SiFigma,
      "Python": SiPython,
      "AWS": SiAmazon,
      "Firebase": SiFirebase
    };
    
    // Map categories to fallback icons
    const categoryIcons: Record<string, IconType> = {
      "Frontend": FaCode,
      "Backend": FaServer,
      "DevOps": FaCogs,
      "Database": FaDatabase,
      "Testing": FaCode,
      "Design": FaCode
    };
    
    // Return specific icon if available, otherwise use category icon, or default icon
    return iconMap[name] || categoryIcons[category] || FaCode;
  };
  
  // Map skill categories to colors
  const getSkillColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Frontend": "text-blue-500",
      "Backend": "text-green-600",
      "DevOps": "text-gray-700",
      "Testing": "text-purple-600",
      "Design": "text-pink-500"
    };
    
    return colorMap[category] || "text-primary";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 my-8">
            <p>Failed to load skills data. Please try again later.</p>
          </div>
        )}
        
        {!isLoading && !error && skills.length > 0 && (
          <>
            {/* Group skills by category */}
            {Array.from(new Set(skills.map(skill => skill.category))).map(category => (
              <div key={category} className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .sort((a, b) => (b.level || 0) - (a.level || 0))
                    .map((skill) => (
                      <div key={skill.id} className="skill-card bg-white rounded-lg shadow p-4 md:p-6 text-center">
                        <div className={`flex justify-center mb-3 md:mb-4 ${getSkillColor(skill.category)} text-2xl md:text-3xl`}>
                          {skill.icon ? (
                            <i className={`${skill.icon}`}></i>
                          ) : (
                            (() => {
                              const IconComponent = getSkillIcon(skill.name, skill.category);
                              return <IconComponent size="1.5em" />;
                            })()
                          )}
                        </div>
                        <h3 className="text-sm md:text-base font-medium">{skill.name}</h3>
                        {skill.level !== null && skill.level !== undefined && (
                          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-primary h-1.5 rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </>
        )}
        
        {!isLoading && !error && skills.length === 0 && (
          <div className="text-center text-gray-500 my-8">
            <p>No skills found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
