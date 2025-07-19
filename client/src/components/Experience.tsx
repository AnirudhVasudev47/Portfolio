import { useQuery } from "@tanstack/react-query";
import { Experience as ExperienceType } from "../types";

const Experience = () => {
  // Fetch experiences data from the API
  const { data: experiences = [], isLoading, error } = useQuery<ExperienceType[]>({
    queryKey: ['/api/experiences'],
  });

  // Function to format period from startDate and endDate
  const formatPeriod = (startDate: string, endDate?: string | null) => {
    // Extract year and month from date string (format: YYYY-MM)
    const formatDate = (dateStr: string) => {
      if (dateStr === 'Present') return 'Present';

      const [year, month] = dateStr.split('-');
      if (!month) return year;

      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';

    return `${start} - ${end}`;
  };

  return (
    <section id="experience" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 my-8">
            <p>Failed to load experience data. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && experiences.length > 0 && (
          <div className="max-w-7xl mx-auto relative">
            {/* Vertical center line that connects all dots */}
            <div className="absolute hidden md:inline left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id || index} className="relative mb-20 md:mb-16 pt-2">
                {/* Timeline dot positioned in the center */}
                <div className="absolute hidden md:inline left-1/2 transform -translate-x-1/2 w-7 h-7 bg-primary rounded-full top-8 z-10 border-2 border-white"></div>

                <div className="flex flex-col md:flex-row flex-auto">
                  <div className="flex-1 py-8 items-center justify-center text-center order-1">
                    <h3 className="text-xl font-bold text-primary">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 mb-1">{formatPeriod(exp.startDate, exp.endDate)}</p>
                    <p className="font-medium">{exp.position}</p>
                  </div>

                  <div className="flex-1 md:pl-24 items-center justify-center order-2">
                    <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills && exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                          >
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
        )}

        {!isLoading && !error && experiences.length === 0 && (
          <div className="text-center text-gray-500 my-8">
            <p>No experience data found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
