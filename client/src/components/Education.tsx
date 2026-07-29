const Education = () => {
  const education = [
    {
      degree: "M.Sc. Data Science",
      institution: "IU International University of Applied Sciences, Berlin",
      status: "Oct 2024 - Oct 2025",
      result: "Grade: 2.1 (≈ B+ / Distinction)",
      description: "ML, Deep Learning, Big Data Analytics. Applied TensorFlow & PyTorch for real-world AI projects."
    },
    {
      degree: "B.Tech Computer Science",
      institution: "Presidency University, Bangalore",
      status: "Jan 2017 - Dec 2021",
      result: "CGPA: 7/10",
      description: "Computer science fundamentals across algorithms, data structures, and software engineering principles."
    }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Kannada", level: "Native" },
    { name: "Hindi", level: "Native" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {edu.status}
                  </span>
                  <p className="text-sm text-gray-600 mt-2">{edu.result}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {edu.description}
              </p>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-4">Languages</h3>
              <ul className="space-y-2">
                {languages.map((language) => (
                  <li key={language.name} className="flex items-center justify-between text-gray-700">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-gray-600">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary mb-4">Publication</h3>
              <p className="text-gray-700 font-medium">"Ride-Along Application"</p>
              <p className="text-gray-600 mt-1">
                Published in IJCRT · Paper ID: IJCRT2106046
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
