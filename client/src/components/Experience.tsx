const Experience = () => {
  const experiences = [
    {
      company: "Deloitte",
      period: "2021 - Present",
      title: "Senior Developer",
      description: "Led requirement analysis for large-scale enterprise applications, focusing on real-time systems and performance optimization.",
      skills: ["Enterprise Systems", "Performance Optimization", "Real-time Processing"]
    },
    {
      company: "BHIVE Alts",
      period: "2020 - 2021",
      title: "Full Stack Developer",
      description: "Developed and maintained the investor application platform, implementing a payment module that processed over ₹60 Cr in transactions with robust error handling and security features.",
      skills: ["Payment Systems", "Financial Security", "High-volume Processing"]
    },
    {
      company: "Webbirth",
      period: "2019 - 2020",
      title: "Web & Mobile Developer",
      description: "Built cross-platform applications using React Native on the frontend and Node.js for backend services. Integrated with Laravel systems and implemented CI/CD pipelines for streamlined deployments.",
      skills: ["React Native", "Node.js", "Laravel", "CI/CD"]
    },
    {
      company: "Civil Engineering System",
      period: "2018 - 2019",
      title: "Full Stack Developer",
      description: "Designed and implemented a comprehensive system with PHP backend and React UI for civil engineering applications. Focused on data visualization and complex calculations for engineering models.",
      skills: ["PHP", "React UI", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-8 md:pl-0">
              {/* Mobile timeline line (always visible) */}
              <div className="block md:hidden absolute h-full w-0.5 bg-gray-200 left-3 top-0"></div>
              
              {/* Mobile timeline dot (always visible) */}
              <div className="absolute w-6 h-6 bg-primary rounded-full left-0 top-0 z-10"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="md:w-1/3 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-gray-600 mb-1">{exp.period}</p>
                  <p className="font-medium">{exp.title}</p>
                </div>
                
                <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-gray-700 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
