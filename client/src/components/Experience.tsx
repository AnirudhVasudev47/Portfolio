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
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical center line that connects all dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-20 md:mb-16 pt-2">
              {/* Timeline dot positioned in the center */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 bg-primary rounded-full top-0 z-10 border-2 border-white"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 pt-7 md:pt-0">
                <div className="text-center md:text-right order-1">
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-gray-600 mb-1">{exp.period}</p>
                  <p className="font-medium">{exp.title}</p>
                </div>
                
                <div className="order-2">
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
