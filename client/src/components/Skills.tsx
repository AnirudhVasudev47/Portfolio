const Skills = () => {
  const skills = [
    { name: "React", icon: "ri-reactjs-line", color: "text-primary" },
    { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-600" },
    { name: "Express", icon: "ri-server-line", color: "text-gray-700" },
    { name: "Tailwind", icon: "ri-css3-line", color: "text-accent" },
    { name: "MySQL", icon: "ri-database-2-line", color: "text-blue-700" },
    { name: "Firebase", icon: "ri-fire-line", color: "text-orange-500" },
    { name: "AWS", icon: "ri-amazon-line", color: "text-yellow-600" },
    { name: "Figma", icon: "ri-pencil-ruler-2-line", color: "text-purple-600" },
    { name: "Git", icon: "ri-git-branch-line", color: "text-red-600" },
    { name: "HTML", icon: "ri-html5-line", color: "text-orange-600" },
    { name: "CSS", icon: "ri-css3-line", color: "text-blue-500" },
    { name: "JavaScript", icon: "ri-javascript-line", color: "text-yellow-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-white rounded-lg shadow p-6 text-center">
              <div className={`flex justify-center mb-4 ${skill.color} text-3xl`}>
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
